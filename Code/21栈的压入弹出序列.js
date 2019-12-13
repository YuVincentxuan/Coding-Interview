/*
    author: Hush!
    time:   2019-12-10
*/
/*
    题目描述:
       输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
       假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
       序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
       （注意：这两个序列的长度是相等的）
*/
/*
    解题思路: 
        利用一个辅助栈，将压入栈的元素依次压入辅助栈，当最新压入栈的元素与弹出栈的第一个元素相同的时候
        弹出辅助栈中相同的元素，同时将弹出栈的下标后移以为。如果辅助栈最后的长度为0，则表示该弹出栈就是
        压入栈的弹出序列。

*/
function IsPopOrder(pushV, popV)
{
    // write code here
    var newV = [], idx = 0;
    if(pushV.length != popV.length)
        return false;
    else{
        for(var i = 0; i<pushV.length;i++){
            newV.push(pushV[i]);
            while(newV.length && newV[newV.length-1] == popV[idx]){
                newV.pop();
                idx++;
            }
        }
    }
    return newV.length == 0
}