/**
 * 判断字符串是否存在‘ab’
 * @param {String} string 字符串
 */

function match(string) {
    let foundA = false;
    for(let c of string) {
        if(c === 'a')
            foundA = true;
        else if(foundA && c === 'b') {
            return true;
        }
        else 
            foundA = false;
    }
    return false
}


console.log(match('I abm groot'));

