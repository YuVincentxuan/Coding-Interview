/*
    author: Hush!
    time:   2019-11-18
*/
/*
    题目描述:
        输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
*/
/*
    解题思路:
        1.按顺序输入到一个数组中，最后反转数组。
        2.模拟栈“后进先出”打印数组。可使用递归，或者是unshift()
        unshift():在数组前端添加任意个项并返回数组的长度。
*/
//方法一:
function printListFromTailToHead(head)
{
    var current = head;
    var ArrayList = [];
    while(current != null){
        ArrayList.push(current.val)
        current = current.next
    }
    return ArrayList.reverse()
}
//方法二
function printListFromTailToHead(head)
{
    var current = head;
    var ArrayList = [];
    while(current != null){
        ArrayList.unshift(current.val)
        current = current.next
    }
    return ArrayList
}
