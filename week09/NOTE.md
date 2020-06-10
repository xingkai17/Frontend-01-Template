# 每周总结可以写在这里

## 重学CSS

### Animation

- @keyframes
- animation
  - animation-name 时间曲线
  - animation-duration 动画的时长
  - animation-timing-function 动画的时间曲线
  - animation-delay 动画开始前的延迟
  - animation-iteration-count 动画的播放次数
  - animation-direction 动画的方向

### Transition

- transition-property 要变换的属性
- transition-duration 变换的时长
- transition-timing-function 时间曲线
- transition-delay 延迟

### 颜色

- CMYK：Cyan-青色，Magenta-品红，Yellow-黄色，blacK-黑色
- RGB：Red-红色，Green-绿色，Blue-蓝色
- HSL：Hue-颜色（0-360），Saturation-饱和度（0-100%），Lightness-亮度（0-100%，黑-白）
- HSV：Hue-颜色（0-360），Saturation-饱和度（0-100%），Value-明度（0-100%，黑-白）

### 形状

- border
- box-shadow
- border-radius

## 重学HTML

### 合法元素

- ElementL: \<tagname\>\</tagname\>
- Text: text
- Comment: \<!-- comments --\>
- DocumentType: <!Document html>
- ProcessingInstruction: \<?a 1?\>
- CDATA: \<![CDATA[]]\>

### 字符引用

- \&#161; = !
- \&amp; = &
- \&lt; = <
- \&gt; = >
- \&quot; = "

## 重学DOM

### 导航类操作

- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling

### 修改操作

- appendChild
- insertBefore
- removeChild
- replaceChild

### 高级操作

- compareDocumentPosition：比较两个节点中关系的函数
- contains：检查是否包含另一个节点
- isEqualNode：检查两个节点是否完全相同
- cloneNode：复制一个节点，传入参数true可以深拷贝

### 事件

- 捕获
- 冒泡