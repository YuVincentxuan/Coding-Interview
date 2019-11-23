/*
    author: Hush!
    time:   2019-11-23
*/
/*
    题目描述:
        输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
        假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
        例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，
        则重建二叉树并返回。
*/
/*
    解题思路:
        利用递归在前序序列和中序序列中找到左右子树对应节点
*/
//创建节点
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    var tree = null
    if(pre.length > 1){  //判断是否是叶子节点，如果不是递归返回节点，
        tree = new TreeNode(pre[0]); //创建节点
        var q = vin.indexOf(pre[0]); //根据前序遍历序列找到根节点，然后找到其在中序遍历中的位置
        var vinLeft = vin.slice(0,q); //根据中序遍历序列返回左子树
        var vinRight = vin.slice(q+1,vin.length); //根据中序遍历序列返回右子树
        pre.shift(); //弹出根节点
        var preLeft = pre.slice(0,vinLeft.length);
        var preRight = pre.slice(vinLeft.length,pre.length);
        tree.left = reConstructBinaryTree(preLeft,vinLeft) //递归左子树
        tree.right = reConstructBinaryTree(preRight,vinRight) //递归右子树
    }else if(pre.length ===1){ //返回叶子节点
        tree = new TreeNode(pre[0]);
        tree.left = null;
        tree.right = null;
    }
   return tree 
}