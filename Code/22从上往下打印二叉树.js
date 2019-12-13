/*
    author: Hush!
    time:   2019-12-11
*/
/*
    题目描述:
       从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*/
/*
    解题思路: 
        辅助队列。保持打印方向是从左到右，从上往下。

*/
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    if(!root) return [];
    var arr = [], result = [];
    arr.push(root)
    while(arr.length){
        var root = arr.shift()
        result.push(root.val);
        if(root.left) arr.push(root.left);
        if(root.right) arr.push(root.right);
    }
   return result;
}