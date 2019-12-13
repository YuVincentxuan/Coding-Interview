/*
    author: Hush!
    time:   2019-12-05
*/
/*
    题目描述:
        输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
*/
/*
    解题思路: 
        比较两个链表的大小，进行合并。
*/
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here
    if(pHead1 == null){
        return pHead2;
    }else if(pHead2 == null){
        return pHead1;
    }
    var pHead = null;
    if(pHead1.val < pHead2.val){
        pHead=pHead1
        pHead.next = Merge(pHead1.next,pHead2)
    }else{
        pHead=pHead2
        pHead.next = Merge(pHead1,pHead2.next)
    }
    return pHead;
}