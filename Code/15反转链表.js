/*
    author: Hush!
    time:   2019-12-04
*/
/*
    题目描述:
        输入一个链表，反转链表后，输出新链表的表头。
*/
/*
    解题思路:使用两个指针，一个指针保存原链表，一个指针生成新链表。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    var pre,next;
    if(pHead == null) return null;
    while(pHead != null){
        next = pHead.next
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}