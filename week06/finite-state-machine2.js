/**
 * 可选作业：
 * 我们如何使用状态机处理完全未知的pattern？
 * 参考资料：字符串KMP算法
 */

function getNext(p) {
  const next = [-1];
  let k = -1;
  let j = 0;
  let pLen=p.length;

  while (j < pLen-1) {
    //p[k]表示前缀，p[j]表示后缀
    if (k == -1 || p[j] == p[k])
    {
      ++j;
      ++k;
      //较之前next数组求法，改动在下面4行
      if (p[j] != p[k])
        next[j] = k;   //之前只有这一行
      else
      //因为不能出现p[j] = p[ next[j ]]，所以当出现时需要继续递归，k = next[k] = next[next[k]]
        next[j] = next[k];
    }
    else
    {
      k = next[k];
    }
  }

  return next;

}
 
function KmpSearch(s, p) {
  let i = 0;
  let j = 0;

  const sLen = s.length;
  const pLen = p.length;

  const next = getNext(p);

  while (i < sLen && j < pLen) {
    //①如果j = -1，或者当前字符匹配成功（即S[i] == P[j]），都令i++，j++
    if (j === -1 || s[i] === p[j]) {
      i++;
      j++;
    } else {
      //②如果j != -1，且当前字符匹配失败（即S[i] != P[j]），则令 i 不变，j = next[j]
      //next[j]即为j所对应的next值
      j = next[j];
    }
  }

  return j === pLen ? i - j : -1;
}
 
//demo test
console.log(KmpSearch('asdfasdfsadf','sadf'));
