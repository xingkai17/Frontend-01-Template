
var page = require('webpage').create();
page.open('https://baidu.com/', function(status) {
  console.log("status: " + status);
  if(status === 'success') {
    var title = page.evaluate(function () {
      return document.title;
    })
    console.log(title);
  }
  phantom.exit();
});