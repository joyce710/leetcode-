/**
 * 107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
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