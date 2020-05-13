# 每周总结可以写在这里

## 如何把一个URL变成一个屏幕上显示的网页

- 浏览器首先使用 HTTP 协议或者 HTTPS 协议，向服务端请求页面；
- 把请求回来的 HTML 代码经过解析，构建成 DOM 树；
- 计算 DOM 树上的 CSS 属性；
- 最后根据 CSS 属性对元素逐个进行渲染，得到内存中的位图；
- 一个可选的步骤是对位图进行合成，这会极大地增加后续绘制的速度；
- 合成之后，再绘制到界面上。

## HTTP 协议

    https://tools.ietf.org/html/rfc2616

### HTTP Method（方法）

- OPTIONS (调试)
- GET (浏览器通过地址栏访问页面)
- HEAD (只返回请求头)
- POST (表单提交)
- PUT (添加资源)
- DELETE (删除资源)
- TRACE (调试)
- CONNECT (多用于 HTTPS 和 WebSocket)

### HTTP Request Body

- application/json
- application/x-www-form-urlencoded
- multipart/form-data
- text/xml

