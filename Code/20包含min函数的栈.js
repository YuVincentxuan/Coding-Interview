/*
    author: Hush!
    time:   2019-12-09
*/
/*
    题目描述:
       定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
*/
/*
    解题思路: 

*/
var stack = [];
function push(node)
{
    stack.push(node)
}
function pop()
{
    return stack.length == 0 ? null : stack.pop()
}
function top()
{
    return stack.length == 0 ? null : stack.shift()
}
function min()
{
    return Math.min.apply(this, stack);
}

