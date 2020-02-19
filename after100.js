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
 */
/**
 * 131. Palindrome Partitioning
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
 */

//  function palindromePart(str){
//      let res=[]
//      helper(0,[],str,res)
//     console.log('res', res)
//      function helper(start,path,str,res){
//         console.log('path',start,path, str[start],str)
//         res.push(path)
//          for(let i=start;i<str.length;i++){
//             // if(str[i]==str[i-1]){continue}
//             //console.log('path', i,typeof(path),res)
//             // path+=str[i]
//             //res.push(path)
//             //  if(path.length>0 && path.split().reverse().toString()==path.toString()){
//             //      res.push(path)}
            
//              helper(i+1,[...path,str[i]],str,res)
            
//          }
//      }
//      return res
// }
function palindromePart1(str){
    let res=[]
    helper(path,str)
    function helper(path,str){
    

    }
    function isPalindrome(str){
       return str.split().reverse().toString()===str
    }

}
function isPalindrome(str){
    console.log('str', str.split('').reverse().join(''),str)
    return str.split('').reverse().toString()==str
 }



 let str="aa"
 console.log('isPalindrome', isPalindrome(str))
 //console.log('palindromePart',palindromePart(str)) 
/**
 * 129. Sum Root to Leaf Numbers
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

var sumNumbers = function(root) {
    let res=[]
    if(!root){return 0}
    helper(root,0,res)
    function helper(root,path,res){
        console.log(root.val,path,res)
        if(root==null){
            console.log("path2",path)
            res.push(path)}
        path=path*10+root.val
        res
        console.log(path)
        console.log(root,root.left)
        if(root.left){helper(root.left,path,res)}
        if(root.right){helper(root.right,path,res)}
    }
    return res
};
 */
/**
 * 136. Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
 */
function singleNum(nums){
    let map=new Map()
    for(let i=0;i<nums.length;i++){
       //console.log('map', nums[i],map.get(nums[i]))
        if(map.get(nums[i])){
            let value=map.get(nums[i])
            value++
      map.set(nums[i],value)
            }
        else{map.set(nums[i],1)}
    }
  map.forEach((value,key)=>{
      //if(value==2){return key}
      //console.log('keyvalue', key,value)
      if(value==1){console.log('key', key)}
    }
      )
   


}
let nums=[4,1,2,1,2]
console.log('snglenums', singleNum(nums))

function singleNum2(){
    let res=0
    for(let i=0;i<nums.length;i++){
        res=res^nums[i]
    }
    return res
}
console.log('snglenums', singleNum2(nums))

function BTreeLeveltravesal(root){
    if(!root){return}
    let res=[]
    let queue=[root]
    let cur=[]

        while(queue.length>0){
            let size=queue.length
            for(let i=0;i<size;i++){
                let node=queue.shift()
                cur.push(node.val)
                if(node.left){queue.push(node.left)}
                if(node.right){queue.push(node.right)}
            }
            res.push(cur)
            cur=[]
        //    cur.forEach( node=>{
        //        curval.push(node.val)
        //        if(node.left){
        //            next.push(cur.left)
        //        }
        //        if(node.right){
        //            next.push(node.right)
        //        }
        //    })
        //    res.unshift(curval)
        //    curval=[]
        //    cur=next
        //    next=[]

        }
        
    return res
         
    }
function BTreeLeveltravesal2(root){
    if(!root){return }
   let res=[]
   helper(0,root,res)
   return res
   function helper(level,node,res){
       while(level>=res.length){
           res.push([])
       }
       res[level].push(root.val)
       if(root.left){helper(level+1,node.left,res)}
       if(root.right){helper(level+1,node.right,res)}

   }
}

/**
 * 199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
 */
function btreeRightSide(root){
    if(!root){return}
    let queue=[root]
    let res=[]
    while(queue.length>0){
        let size=queue.length
        for(let i=0;i<size;i++){
        let node=queue.pop()
        if(i==0)res.push(node.val)
        if(node.left){queue.push(node.left)}
        if(node.right){queue.push(node.right)}
    }
    }
    return res
}
function btreeRightSide2(root){
    if(!root){return []}
    let res=[]
    let ret=[]
    helper(root,0,res,ret)
  function  helper(node,level,res,ret){
      if(level<=res.length){res.push([])}
      if(level=res.length){ret.push(node.val)}
      res[level].push(node)
      if(node.right){helper(node.right,level+1,res)}
      if(node.left){helper(node.left,level+1,res,ret)}
  

    }
    return ret


}