# 每周总结可以写在这里

## 把一个元素子元素逆序

```html
<div id="a">
  <span>1</span>
  <p>2</p>
  <a>3</a>
  <div>4</div>
</div>
<script>
  const element = document.getElementById("a");

  /******************普通方式**********************/
  function reverseElement(element) {
    let len = element.childNodes.length;
    while (len--) {
      element.appendChild(element.childNodes[len]);
    }
  }

  /******************Range方式**********************/
  function reverseElement(element) {
    let range = new Range();
    range.selectNodeContents(element);
    let fragment = range.extractContents();

    let len = fragment.childNodes.length;
    while (len--) {
      fragment.appendChild(fragment.childNodes[len]);
    }
    element.appendChild(fragment);
  }
</script>
```

## Range API

- var range = new Range()
- range.setStart(element, 9)
- range.setEnd(element, 4)
- var range = document.getSelection().getRangeAt(0)
- range.setStartBefore
- range.setEndBefore
- range.setStartAfter
- range.setEndAfter
- range.selectNode
- range.selectNodeContents
- var fragment = range.extractContents()
- range.insertNode(document.createTextNode('aaa'))

```js
  var range = new Range();
  range.setStart(element, 5);
  range.setEnd(element, 9);
  var range = document.getSelection().getRangeAt(0);

  var fragment = range.extractContents();
  range.insertNode(document.createTextNode("aaa"));
```

## CSSOM

### Rules

- document.styleSheets[0].cssRules
- document.styleSheets[0].insertRule('p{color: pink}', 0)
- document.styleSheets[0].removeRule(0)

### Rule

- CSSStyleRule
- CSSCharsetRule
- CSSImportRule
- CSSMediaRule
- CSSFontFaceRule
- CSSPageRule
- CSSNamespaceRule
- CSSKeyframesRule
- CSSKeyframeRule
- CSSSupportsRule

### getComputedStyle

```js

  window.getComputedStyle(elt, pseudoElt);
  作用：获取一个元素最终经过 CSS 计算得到的属性。
  elt: 获取属性的元素
  pseudoElt: 可选，用于选择伪元素

```

## CSSOM View

### 窗口 API

> 窗口 API 用于操作浏览器窗口的位置、尺寸等

- moveTo(x, y) 窗口移动到屏幕的特定坐标；
- moveBy(x, y) 窗口移动特定距离；
- resizeTo(x, y) 改变窗口大小到特定尺寸；
- resizeBy(x, y) 改变窗口大小特定尺寸。
- open()

## 滚动 API

### 视口滚动 API(可视区域，由 window 对象操作)

- scrollX 是视口的属性，表示 X 方向上的当前滚动距离，有别名 pageXOffset；
- scrollY 是视口的属性，表示 Y 方向上的当前滚动距离，有别名 pageYOffset；
- scroll(x, y) 使得页面滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}；
- scrollBy(x, y) 使得页面滚动特定的距离，支持传入配置型参数 {top, left}。

### 元素滚动 API(元素滚动 API，在 Element 类上)

- scrollTop 元素的属性，表示 Y 方向上的当前滚动距离。
- scrollLeft 元素的属性，表示 X 方向上的当前滚动距离。
- scrollWidth 元素的属性，表示元素内部的滚动内容的宽度，一般来说会大于等于元素宽度。
- scrollHeight 元素的属性，表示元素内部的滚动内容的高度，一般来说会大于等于元素高度。
- scroll(x, y) 使得元素滚动到特定的位置，有别名 scrollTo，支持传入配置型参数 {top, left}。scrollBy(x, y) 使得元素滚动到特定的位置，支持传入配置型参数 {top, left}。
- scrollIntoView(arg) 滚动元素所在的父元素，使得元素滚动到可见区域，可以通过 arg 来指定滚到中间、开始或者就近。

## 布局 API

### 全局尺寸信息

- window.innerHeight, window.innerWidth 这两个属性表示视口的大小。
- window.outerWidth, window.outerHeight 这两个属性表示浏览器窗口占据的大小
- window.devicePixelRatio 这个属性非常重要，表示物理像素和 CSS 像素单位的倍率关系
- window.screen （屏幕尺寸相关的信息）
  - window.screen.width, window.screen.height 设备的屏幕尺寸。
  - window.screen.availWidth, window.screen.availHeight 设备屏幕的可渲染区域尺寸，一些 Android 机器会把屏幕的一部分预留做固定按钮，所以有这两个属性，实际上一般浏览器不会实现的这么细致。
  - window.screen.colorDepth, window.screen.pixelDepth 这两个属性是固定值 24，应该是为了以后预留。

### 元素的布局信息

- getClientRects(),会返回一个列表，里面包含元素对应的每一个盒所占据的客户端矩形区域，这里每一个矩形区域可以用 x, y, width, height 来获取它的位置和尺寸;
- getBoundingClientRect(),它返回元素对应的所有盒的包裹的矩形区域，需要注意，这个 API 获取的区域会包括当 overflow 为 visible 时的子元素区域。

>这两个 API 获取的矩形区域都是相对于视口的坐标，也就是说这些区域都是受滚动影响的。

```js
  document.documentElement.getBundingClientRect();
```

## 作业一

>访问指定协议网站，抓取标准

- 1. 访问网站 https://html.spec.whatwg.org/
- 2. 找到标准定义地方样式分析 基本都会有.idl class
- 3. f12 选择Elements选项，选中body标签
- 4. 切到Console
- 5. 运行 API - regex.js 中的代码就得到所有的标准
