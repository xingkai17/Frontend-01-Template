# 写一个正则表达式 匹配所有 Number 直接量

    number 为 整数        /^[+-]?([1-9][0-9]*|0)$/

    number 为 浮点数      /^[+-]?([1-9][0-9]*|0)?((\.[0-9]*)?|(\.[0-9]*)([eE][+-]?[0-9]+)?)$/

    number 为 二进制      /^0[bB][01]+$/

    number 为 八进制      /^0[oO][0-7]+$/

    number 为 十六进制    /^0[xX][0-9a-fA-F]+$/

    所有Number 直接量     /^([1-9][0-9]*|0)?((\.[0-9]*)?|(\.[0-9]*)([eE][+-]?[0-9]+)?)$|^0[bB][01]+$|^0[oO][0-7]+$|^0[xX][0-9a-fA-F]+$/

# 写一个 UTF-8 Encoding 的函数


    function UTF8_Encoding(string) {
      var buffer = [];
      for (var i = 0; i < string.length; i++) {
        var code = string.charCodeAt(i);
        if (0x0000 <= code && code <= 0x007F) {
          buffer.push(ToHexNum(code));
        } else if (0x0080 <= code && code <= 0x07FF) {
          buffer.push(ToHexNum(192 | (31 & (code >> 6))));
          buffer.push(ToHexNum(128 | (63 & code)));
        } else if (0x0800 <= code && code <= 0xD7FF || 0xE000 <= code && code <= 0xFFFF ) {
          buffer.push(ToHexNum(224 | (15 & (code >> 12))));
          buffer.push(ToHexNum(128 | (63 & (code >> 6))));
          buffer.push(ToHexNum(128 | (63 & code)));
        } else if(0xD800 <= code && code <= 0xDBFF) {
          buffer.push(ToHexNum(240 | (7 & (code >> 18))));
          buffer.push(ToHexNum(128 | (63 & (code >> 12))));
          buffer.push(ToHexNum(128 | (63 & (code >> 6))));
          buffer.push(ToHexNum(128 | (63 & code)));
        }
      }
      return buffer;
    }

    function ToHexNum(num) {
      return num.toString(16);
    }

    console.log(UTF8_Encoding('winter 来了'))

# 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

    "(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*"
    
    '(?:[^"\n\\\r\u2028\u2029]|\\(?:['"\\bfnrtv\n\r\u2028\u2029]|\r\n)|\\x[0-9a-fA-F]{2}|\\u[0-9a-fA-F]{4}|\\[^0-9ux'"\\bfnrtv\n\\\r\u2028\u2029])*'

