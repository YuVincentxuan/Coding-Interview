/*
    author: Hush!
    time:   2019-12-03
*/
/*
    题目描述:
        输入一个链表，输出该链表中倒数第k个结点。
*/
/*
    解题思路:
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    var arr = [];
    while(head != null){
        arr.push(head);
        head = head.next;
    }
    return arr[arr.length - k ];
}