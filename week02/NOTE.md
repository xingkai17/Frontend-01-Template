# 每周总结可以写在这里

## 1、语言 按照语法分类

- 非形式语言：
  - 中文
  - 英文
- 形式语言（乔姆斯基谱系）
  - 0 型：无限制文法
  - 1 型：上下文相关文法
  - 2 型：上下文无关文法
  - 3 型：正则文法

## 2、产生式（BNF）巴斯科诺尔范式

- 用尖括号括起来的名称表示语法结构名
- 语法结构分成基础结构和需要用其他语法结构定义的符合结构
  - 基础结构称终结符
  - 复合结构称非终结符
- 引号和中间的字符表示终结符
- 可以有括号
- \* 表示重复
- | 表示或
- \+ 至少一次
- 只要是形式化语言，都能用 BNF 描述

## 3、通过 BNF 理解乔姆斯谱系

- 0 型 无限制文法
  - ?::=?
- 1 型：上下文相关文法
  - ?<A\>?::=?<B\>?
- 2 型：上下文无关文法
  - <A\>::=>
- 3 型：正则文法
  - <A\>::=<A\>?

```

整数连加
"+"
<Number>: "0" | "1" ... "9"
<Deciamal>: "0" | (("1" ~ "9") <Number>+)
<Expression>: <Deciamal> ("+" <Deciamal>)+
<Expression>: Deciamal | (<Expression> "+" <Deciamal>)

四则运算
<PrimaryExpression> = <DecimalNumber> |
"(" <LogicalExpression> ")"


<MultiplicativeExpression> = <PrimaryExpression> |
<MultiplicativeExpression> "*" <PrimaryExpression>|
<MultiplicativeExpression> "/" <PrimaryExpression>


<AdditiveExpression> = <MultiplicativeExpression> |
<AdditiveExpression> "+" <MultiplicativeExpression>|
<AdditiveExpression> "-" <MultiplicativeExpression>

逻辑判断
<LogicalExpression> = <AdditiveExpression> |
<LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>

```

## 4、图灵完备性

- 命令式 -- 图灵机
  - goto
  - if while

- 声明式 -- lambda
  - 递归
  - 分治

## 5、动态、静态

- 动态：
  - 在用户设备/在线服务器上运行
  - 产品实际运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

## 6、类型系统

- 动态静态
- 强类型、弱类型
- 复合类型
  - 结构体
  - 函数签名
- 子类型
  - 逆变/协变
  


总结：这周的三个作业还是不错的，被迫去看英文文档，从恐惧到努力去看，发现英文版文档也还好，挺好的，深刻理解了完备性，比如说第一题的Number 直接量，如果不看文档的话很有可能会拉下几种情况。