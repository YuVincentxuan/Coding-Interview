/*
    author: Hush!
    time:   2019-11-17
*/
/*
    题目描述:
        请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are
        Happy。则经过替换之后的字符串为We%20Are%20Happy。
*/
/*
    解题思路:
        逐个替换，碰到空格，就替换字符串。可考虑使用正则
*/
//方法一:
function replaceSpace(str){
    return str.replace(/\s/g, '%20');
}
//另一种写法:
function replaceSpace(str){
    var reg = new RegExp(" ","g");
    var newStr = str.replace(reg, "%20");
    return newStr;
}

//方法二:
function replaceSpace(str)
{
    var newStr = '';
    for(var i=0; i<str.length;i++){
        if(str[i] == ' '){
            str.length += 2;
            newStr += '%20';
        }else{
            newStr += str[i];
        }
    }
    return newStr;
}