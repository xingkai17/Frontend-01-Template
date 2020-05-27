# 每周总结可以写在这里

## css 计算

### 第一步 收集css规则

- 遇到style标签时，我们把css规则保存起来
- 这里我们调用css Parser来分析css规则
- 这里我们必须要仔细研究此库分析css规则的格式

### 第二步 添加调用

- 当我们创建一个元素后，立即计算css
- 理论上，当我们分析一个元素时，所有css规则已经收集完毕
- 在真实浏览器中，可能遇到写在body的style标签，需要重新css计算的情况，这里我们忽略

### 第三步 获取父元素序列

- 在computeCSS函数中，我们必须知道元素的所有父元素才能判断元素与规则是否匹配
- 我们从上一步骤的stack，可以获取本元素所有的父元素
- 因为我们首先获取的是“当前元素”，所以我们获得和计算父元素匹配的顺序是从内向外

### 第四步 拆分选择器

- 选择器也要从当前元素向外排列
- 复杂选择器拆成针对单个元素的选择器，用循环匹配父元素队列

### 第五步 计算选择器与元素匹配

- 根据选择器的类型和元素属性，计算是否与当前元素匹配
- 这里仅仅实现了三种基本选择器，实际的浏览器中要处理复合选择器

### 第六步 生成computed属性

- 一旦选择匹配，就应用选择器到元素上，形成computedStyle

### 第七步 确定规则覆盖关系

- css 规则跟进specificity和后来优先规格覆盖
- specificity是个四元组，越左边权重越高
- 一个css规则的specificity根据包含的简单选择器相加而成

## 重学css

### 第一步css语法的研究

#### CSS总体结构

- @charset
- @import
- rules
  - @media
  - @page
  - rule

### 第二步 css @规则的研究

- @charset
- @import
- @media
- @page
- @counter-style
- @keyframes
- @fontface
- @supports
- @namespace

### 第三步 css规则的结构

#### css规则

- selector
- key
  - Properties
  - Variables
- value

### 第四步 初建CSS知识体系
