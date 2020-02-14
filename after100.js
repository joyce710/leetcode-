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
 * 107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
 */
var BSTlevelOrder=function(root){
    if(!root){return root}
    let res=[]
    let next=[]
    let cur=[]
    cur.push(root.val)
    while(cur.length>0){
        res.push(cur.slice(0))
        cur.forEach(root=>{
            next.push(root.left)
            next.push(root.right)
        })
        cur=next
        next=[]
    }
return res
}
//way2

function BSTlevelOrder(root){
    if(!root){return []}
    let res=[]
    helper(0,root,res)
    return res
    function helper(dep,root,res){
      while(dep>res.length){res.push([])}
      res[dep].push(root.val)
      helper(dep+1,root.left,res)
      helper(dep+1,root.right,res)
    }

}

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
