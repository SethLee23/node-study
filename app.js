var express = require('express');
var app = express();

app
.get('/', function (req, res) {
  // 返回一个表单
  res.sendFile('./index.html', { root: __dirname })
})
.get('/submit', function (req, res) {
  console.log('req',req.query)
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
