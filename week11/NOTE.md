# 每周总结可以写在这里

## 正则

### match 方法

```js
"abc".match(/a(b)c/g)
=>
["abc", "b", index: 0, input: "abc", groups: undefined]

> 捕获匹配用 ()

"[a=value]".match(/\[([^=]+)=([^\]]+)\]/)
=>
["[a=value]", "a", "value", index: 0, input: "[a=value]", groups: undefined]

> 不捕获匹配用 (?:)

"[a=value]".match(/\[(?:[^=]+)=(?:[^\]]+)\]/)
=>
["[a=value]", index: 0, input: "[a=value]", groups: undefined]
```

### replace 方法

```js
"abc".replace(/a(b)c/, function(str, $1) {
  console.log(str, $1);
})
=> abc b
=> "undefined"

"abc".replace(/a(b)c/, function(str, $1) {
  console.log(str, $1);
  return $1 + $1;
})
=> abc b
=> "bb"

"abc".replace(/a(b)c/, "$1$1")
=> abc b
=> "bb"


```

### exec 方法

- exec
- lastIndex

```js
let lastIndex = 0;
let token;
do {
  token = inputElement.exec(source);
  console.log(token);
}
while(inputElement.lastIndex - lastIndex == token.length)
```

> 案例 =》 jstoken.html
