/**
 * 可选作业：
 * 把正则风格的 tokenize 换成状态机
 * tokenize("1024 + 10 * 25")
 * 
 * 48:56
 */

function tokenize(string) {
  let state = start;
  for(let c of string) {
      state = state(c);
  }
  return state === end;
}

function start(c) {
  if(c >= '0' && c <= '9') {
    return 
  }
}

function end(c) {
  return end;
}

var dictionary = ["Number", "Whitespace", "LineTerminator", "+", "-", "*", "/"];

console.log(tokenize('1024 + 10 * 25'));

