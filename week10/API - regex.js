var set = new Set();
let len = $0.getElementsByClassName('idl').length;
for(let i = 0; i < len; i++) {
  let arr = $0.getElementsByClassName('idl')[i].innerText.match(/[iI]nterface (?:mixin )?([a-zA-Z]+)/g)
  arr && arr.forEach(item => set.add(item));
}
console.log(JSON.stringify([...set]));