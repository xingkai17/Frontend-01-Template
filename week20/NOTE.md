# 每周总结可以写在这里

## phantomjs 无头浏览器

```js
var page = require("webpage").create();
page.open("http://baidu.com", function (status) {
  console.log("Status: " + status);
  if (status === "success") {
    page.render("./baidu.png"); // 将http://baidu.com生成一个baidu.png图片
  }
  phantom.exit();
});
```

## Oauth

### 获取 code

```js
var url = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(
  "http://localhost:8000"
)}&user=read:%3Auser&state=123abc`;

```

### 获取 access_token

```js
const code = "your code";
const state = "123abc";
const client_secret = "your client_secret";
const client_id = "your client_id";
const redirect_uri = encodeURIComponent("http://localhost:8000");
const params = `code=${code}&state=${state}&client_secret=${client_secret}&client_id=${client_id}&redirect_uri=${redirect_uri}`;
const request_url = `https://github.com/login/oauth/access_token?${params}`;

function request(url, method, config) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("===响应===", xmlhttp.responseText);
    }
  };

  xmlhttp.open(method, url, true);
  xmlhttp.setRequestHeader("Authorization", "");
  xmlhttp.send();
}

request("request_url", "POST");
```

### 获取用户信息

```js
function request(url, method) {
  var xmlhttp;
  if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
  } else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("===响应===", xmlhttp.responseText);
    }
  };

  xmlhttp.open(method, url, true);
  xmlhttp.setRequestHeader(
    "Authorization",
    "token d00bdd5d3f1605db80460a0747f07284850d1e40"
  );
  xmlhttp.send();
}

request("https://api.github.com/user", "GET");
```
