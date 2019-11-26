/*
    题目描述:
        css 中经常有类似 background-image 这种通过 - 连接的字符，
        通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
        1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
        2. -webkit-border-image 转换后的结果为 webkitBorderImage
*/
//方法一
function cssStyle2DomStyle(sName) {
    var arr = sName.split('');   //将字符串转换成数组
    if(arr[0] == '-'){
        arr.splice(0,1);  //如果开头是'-'，则直接去除
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] == '-'){
            arr[i+1]=arr[i+1].toUpperCase()
            arr.splice(i,1);
        }
    }
    return arr.join('');  //将数组转换成字符串输出
}
//方法二:
//利用正则表达式进行匹配
function cssStyle2DomStyle(sName) { 
    return sName.replace(/\-[a-z]/g , function(a, b){    //匹配字符串
        return b == 0 ? a.replace('-','') : a.replace('-','').toUpperCase();   // a 是匹配的字符串，b 是匹配的下标。下标是0，则不进行大小写转换。
    });
}
//扩展:
//把字符串中所有单词的首字母都转换为大写:
name = 'aaa bbb ccc';
uw=name.replace(/\b\w+\b/g, function(word){
  return word.substring(0,1).toUpperCase()+word.substring(1);}
);
/*
    定义和用法:
        substring(start, stop) 方法用于提取字符串中介于两个指定下标之间的字符。
    返回值:
        一个新的字符串，该字符串值包含 stringObject 的一个子字符串，其内容是从 start 处到 stop-1 处的所有字符，其长度为 stop 减 start。
    说明:
        substring() 方法返回的子串包括 start 处的字符，但不包括 stop 处的字符。
        如果参数 start 与 stop 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。如果 start 比 stop 大，那么该方法在提取子串之前会先交换这两个参数。
        与 slice() 和 substr() 方法不同的是，substring() 不接受负的参数。
*/