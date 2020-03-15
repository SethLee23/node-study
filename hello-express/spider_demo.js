/* eslint-disable func-names */
/* eslint-disable no-eval */
const axios = require('axios');
const cheerio = require('cheerio');

(async function () {
  const res = await axios.get('https://www.acfun.cn/a/ac13868826');
  const html = res.data;
  //  console.log('res1', html);
  const $ = cheerio.load(html);
  const resource = [];
  $('#main>script').each(function () {
    const script = $(this).html();
    if (script.match('content') && script.match('articleInfo')) {
      const arr = script.split('window.articleInfo = ');
      const main = JSON.parse(arr[1].replace(/;$/, ''));
      const $2 = cheerio.load(main.parts[0].content);
      $2('img,p,div').each((i, d) => {
        if (d.name === 'img') {
          const { src } = d.attribs;
          resource.push({ src });
        } else if (d.children) {
          d.children.forEach((i2) => {
            if (i2.data) {
              resource.push(i2.data);
            }
          });
        }
      });
      // const parts = items.match(/"parts":\[\{(.*?)\}\]/)[0];
      // const partsContent = parts.split('[')[1].split(']')[0];
    }
  });
  console.log(resource);
}()).then((res) => {
  // console.log('res2', res);
  process.exit(0);
}).catch((err) => {
  console.log(err);
  process.exit(1);
});
