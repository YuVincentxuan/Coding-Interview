/*
    author: Hush!
    time:   2019-11-24
*/
/*
    题目描述:
        用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
*/
/*
    解题思路:
        利用两个数组来模拟栈，用进栈模拟入队，用出栈模拟出队。
*/
//方法一:
let outStack = [];
let inStack = [];
function push(node)
{
    inStack.push(node);
    
}
function pop()
{
    if(!outStack.length){
        while(inStack.length){
            outStack.push(inStack.pop());
        }
    }
    return outStack.pop();
}

//方法二:
//方法二只使用了一个数组，利用JS的pop()和shift()方法直接模拟队列操作。但是这样显然是不符合题意的。
let stack = [];
function push(node)
{
    stack.push(node);
    
}
function pop()
{
    if(!stack.length){
        return false;
    }
    return stack.shift();
}