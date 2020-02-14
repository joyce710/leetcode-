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
function buildTree(preorder,inorder){
   
    console.log('33333',preorder,preorder.length,inorder)
  
    if(preorder.length===0 || inorder.length===0) return null;
    console.log('22222')
    //let rootIndex=0;
    //function helper(preorder,inorder){
        let node=new TreeNode(preorder[0])
        console.log(node)
        let pos=inorder.indexOf(preorder[0])
        leftin=inorder.slice(0,pos)
        rightin=inorder.slice(pos+1)
        console.log('leftin', leftin,rightin)
        leftpre=preorder.slice(1,1+pos)
        rightpre=preorder.slice(pos+1)
        node.left=buildTree(leftpre,leftin)
        node.right=buildTree(rightpre,rightin)
        return root

}
let preorder = [3,9,20,15,7]
let inorder = [9,3,15,20,7]
console.log('buildTree', buildTree(preorder,inorder))  
var buildTree2 = function(p, i) {
   
        if(p.length===0 || i.length===0) {return null};
        let val = p[0];
        let pos = i.indexOf(val);//the root position, and also the number of left nodes
        let root = new TreeNode(val);
        root.left = buildTree2(p.slice(1, 1 + pos), i.slice(0, pos));
        root.right = buildTree2(p.slice(1 + pos), i.slice(1 + pos));
        return root;
    
    
};
console.log('buildTree22222', buildTree2(preorder,inorder))  
