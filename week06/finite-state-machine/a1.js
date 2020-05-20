/**
 * 判断字符串是否存在a
 * @param {String} string 字符串
 */

function match(string) {
    let foundA = false;
    for(let c of string) {
        if(c === 'a') {
            foundA = true;
        }
    }
    return false;
}

match("I am groot");