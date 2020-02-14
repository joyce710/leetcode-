
class TreeNode{
    constructor(val){
        this.val=val
        this.left=null
        this.right=null
    }

}

let t=new TreeNode(5)
console.log('t',t)
/**
 *105. Construct Binary Tree from Preorder and Inorder Traversal

Add to List

Share
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
 */
function construcTree(preorder,inorder){
    console.log('33333')
    if(!preorder.leghth || !inorder.leghth){return null}
    console.log('22222')
    //let rootIndex=0;
    //function helper(preorder,inorder){
        let node=new TreeNode(preorder[0])
        let divideIndex=inorder.indexOf(preorder[0])
        leftinorder=inorder.slice(0,divideIndex)
        rightinorder=inorder.slice(divideIndex+1)
        console.log('leftinorder', leftinorder,rightinorder)
        leftLen=left.leghth
        leftpreorder=preorder.slice(1,1+leftLen)
        rightpreorder=preorder.slice(1+leftLen+1)
        node.left=construcTree(leftpreorder,leftinorder)
        node.right=construcTree(rightpreorder,rightinorder)
   
    
}
let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]
console.log('construcTree', construcTree(preorder,inorder))  
  console.log('leftinorder')