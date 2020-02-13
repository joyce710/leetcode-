function NodeList(val){
    this.val=val;
    this.next=null
}

/** 69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.

var mySqrt = function(x) {
    let l=1
    let r=x
    if(l==r){return l}
    while(l<r){ 
       
        let m=l+Math.floor((r-l)/2)
        console.log(l,r,m)
        if(m*m==x){return m}
        else if(m*m >x){
            r=m
        }
        else{
            l=m+1
        }
        console.log(l,r,m)
    }
    return l-1
};

console.log(mySqrt(1))
*/
/**
 *70. Climbing Stairs
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

var climbStairs = function(n) {
 let arr=new Array(n)
 return helper(n,arr)
}
function helper(n,arr) {

    if(n==1){return arr[1]=1}
    else if(n==2){return arr[2]= 2}
    else if(arr[n]){return arr[n]}
    arr[n]=helper(n-1,arr)+helper(n-2,arr)
     return arr[n]
};
console.log("climbStairs",climbStairs(45))
 */

 /**
  75. Sort Colors
Medium
Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.
Note: You are not suppose to use the library's sort function for this problem.
Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?
 
 //two ways:
 //count sort and one-pass 
 //solution one:
 var sortColors = function(nums) {
     let map={}
   for(let i=0;i<nums.length;i++){
       if(map[nums[i]]){map[nums[i]]+=1}
       else{map[nums[i]]=1}
       
       console.log(i,nums[i],map)
   }
   console.log(map[0])
   nums.nums.slice(0,map[0],0)
   console.log("nums",nums)
    //没想到一次怎么置换multiple 个元素
};
let nums4=[2,0,2,1,1,0]
 console.log("sortColors",sortColors(nums4))

function sortColors2(nums){
    //aftermin 之前都是最小的，beforemax之后都是最大的，理清这两个
    let afterMin=0;
    let beforeMax=nums.length-1
    let i=0
    while(i<=beforeMax){
        if(nums[i]===2){
            let t=nums[i]
           nums[i]=nums[beforeMax]
           nums[beforeMax]=t
            
            beforeMax--
        }
       else if(nums[i]===0){
           let t=nums[i]
           nums[i]=nums[afterMin]
           nums[afterMin]=t
           afterMin++
           i++
       }
       else{
           i++
       }
    }
    return nums

}
let nums=[2,0,1]
console.log("sortColors2",sortColors2(nums))


 */

/**
 * 77. Combinations
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

 function combinations(n,k){
     if(n<k){return []}
     let res=[]
     helper(1,n,k,[],res)
     return res
   function helper(start,n,k,path,res){
       if(path.length==k){
           
          // if(res.includes(path.sort().toString())){return }
          //console.log(path.sort().toString())
           res.push(path)

           //console.log('res', res)
           return res
       }
       for(let i=start;i<=n;i++){
           if(path.includes(i)){continue}
           console.log('path11', path)
        //    path=path.concat(i)
        //    helper(i+1,n,k,path,res)
        //    path=path.slice(0,-1)
        helper(i+1,n,k,[...path,i],res)
         console.log('path', path)
       }
       return res
   }
 }
 console.log('combinations', combinations(4,2))
  let path1=[1,2,3,4]
  console.log('path1', [...path1,5],path1)

  */
 /**
  * 78. Subsets
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 
 function Subsets(nums){
     let res=[]
     helper(0,nums,[],res)
     return res
 }
 function helper(start,nums,path,res){
    res.push(path)
     for(let i=start;i<nums.length;i++){
         console.log('i', i,nums[i],path)
        helper(i+1,nums,[...path,nums[i]],res)
       
     }
     return res
 }
 function Subsets2(nums) {
	const res = [];
    generatePowerset([], 0,nums,res);
    return res
    }
    function generatePowerset(path, start,nums,res) {
		res.push(path);
		for (let i = start; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1,nums,res);
		}

	return res;
}
 let nums=[1,2,3]

 console.log('Subsets', Subsets(nums))
  */
/**
 * 71. Simplify Path
Given an absolute path for a file (Unix-style), simplify it. Or in other words, convert it to the canonical path.

In a UNIX-style file system, a period . refers to the current directory. Furthermore, a double period .. moves the directory up a level. For more information, see: Absolute path vs relative path in Linux/Unix

Note that the returned canonical path must always begin with a slash /, and there must be only a single slash / between two directory names. The last directory name (if it exists) must not end with a trailing /. Also, the canonical path must be the shortest string representing the absolute path.
Example 1:

Input: "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.
Example 2:

Input: "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op, as the root level is the highest level you can go.
Example 3:

Input: "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
Example 4:

Input: "/a/./b/../../c/"
Output: "/c"
 
function SimplifyPath(path){
    path= path.split("/")
    console.log(path)
    let res=[]
    for(let i=0;i<path.length;i++){
       if(path[i]=="." || path[i]==''){continue}
       else if(path[i]==".."){res.pop()}
       else{res.push(path[i])}
     
    }
    console.log(res)
    res="/"+res.join("/").toString()
    return res
    }

    let path ="/a/../../b/../c//.//"

console.log("SimplifyPath",SimplifyPath(path)) 

*/


 /**
  * 79. Word Search
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

 var wordSearch=function(board,word){
     let row=board.length;
     let col=board[0].length;
     for(let i=0;i<row;i++){
         for(let j=0; j<col;j++){
             if(helper(i,j,row,col,word,0,board)){return true}  
         }
     }
     return false

 }
 function helper(i,j,row,col,word,d,board){
    if(i<0 || j<0|| i>=row||j>=col||board[i][j]!=word[d]){return false}
    else if(d==word.length-1){return true}
    //处理重复的不能走，就把当前这个格子标记成一个特殊的数
    let cur=board[i][j]
    board[i][j]="*"
    let res= helper(i+1,j,row,col,word,d+1,board)||helper(i-1,j,row,col,word,d+1,board)
            ||helper(i,j-1,row,col,word,d+1,board)||helper(i,j+1,row,col,word,d+1,board)
    board[i][j]=cur
    return res
    }
  */

/** 
    80. Remove Duplicates from Sorted Array II
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.

It doesn't matter what you leave beyond the returned length.
Example 2:

Given nums = [0,0,1,1,1,1,2,3,3],

Your function should return length = 7, with the first seven elements of nums being modified to 0, 0, 1, 1, 2, 3 and 3 respectively.

It doesn't matter what values are set beyond th
   

function RemoveDuplicates(nums){
    let i=0
    while(nums[i]!=null){
        if(nums[i]===nums[i+1]){
            while(nums[i+1]===nums[i+1+1]){
                nums.splice(i+1,1)
                //console.log('i', i)
            }
            i+=2
        }
       else{
           i++
       }
    
    }
    return nums

}
let nums2= [1,1,1,2,2,3]
console.log('RemoveDuplicates', RemoveDuplicates(nums2))


*/





/**
 * 83. Remove Duplicates from Sorted List
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

function removeDuplicates(head){
    let start=head
     
     
    while(start){
    if(start.next!==null &&start.val===start.next.val){
        
        start.next= start.next.next
        //console.log('start', start)
    }
    else{
        start=start.next
    }
   
 }
      return head
  
 }

console.log('removeDuplicates', removeDuplicates()) 
 */
/**
 * 82. Remove Duplicates from Sorted List II
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

function removeDuplicatesII(){
    let dummy=new ListNode()
    dummy.next=head
    let pre=dummy
    let cur=head
    while(pre){
        if(cur.val==cur.next.val){
            while(cur.val==cur.next.val&& cur.next){
                cur=cur.next
            }
            pre.next=cur.next
            cur=cur.next
        }
        else{
            pre=cur
            cur=cur.next
        }
}
return dummy.next
}
*/
/** 
86. Partition List
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

    var partition = function(head, x) {
       
        let node1=new ListNode()
        let node2=new ListNode()
    
        let dimmynode1=node1
        let dummynode2=node2
        while(head){
            if(head.val>=x){
                node1.next=head
                node1=node1.next
            }
            else{
                node2.next=head
                node2=node2.next
            }
            head=head.next
    
        }
       //console.log("node1",node1,"node2",node2,)
        node2.next=dimmynode1.next
        node1.next=null
        return dummynode2.next
        
    
    }
*/

/** 
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
Example:

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]0
function MergeArray(nums1,nums2,m,n){
    nums1.splice(m,nums1.length)
   nums2.splice(n,nums2.length)
    console.log('nums1', nums1,nums2)
    let i=0
    let j=0
   while(j<n){
       console.log('nums[i', nums1[i],nums2[j])
       if(nums1[i]>nums2[j] || nums1[i]==undefined){
          nums1.splice(i,0,nums2[j])
          i++
          j++
          console.log("nums1aa",nums1)
       }
       else{
           i++
       }
   }
   return nums1
    
}

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3
console.log('merge', MergeArray(nums1,nums2,m,n))

function MergeArray2(nums1,nums2,m,n){
    let i=m-1;
    let j=n-1
    len=m+n-1
   
        while(len>=0 && i>=0 && j>=0){
            console.log('i,j', i,j,nums1[i],nums2[j],nums1)
        if(nums1[i]<nums2[j]){
            nums1[len]=nums2[j]
            j--
            len--
        }
        else{
            nums1[len]=nums1[i]
            i--
            len--

        }
     }
    
    return nums1

}
let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3
console.log('merge', MergeArray2(nums1,nums2,m,n))
*/

/**
 90. I Subsets II
Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
] 

function SubsetsII(nums){
    nums.sort()
    let res=[]
    helper(0,nums,[],res)
    return res
}
  function helper(start,nums,path,res){
    res.push(path.slice(0))
      for(let i=start;i<nums.length;i++){
        console.log('i', i)
        if(i>start &&nums[i]==nums[i-1]){
            continue
        }
        path.push(nums[i])
        helper(i+1,nums,path,res)
        path.pop()
      }
      

  }



let nums22=[1,2,3]
console.log('SubsetsII', SubsetsII(nums22))

 */
/**
 * 92. Reverse Linked List II
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL

function ReversLink(head,m,n){
    let dummy=new ListNode()
    dummy.next=head
    let pre=dummy
    let prelast=dummy
    let last=head
    let cur=head
    while (m>1){
        pre=pre.next
        cur=cur.next
        m--
    }
    while(n>1){
        prelast=prelast.next
        n--
    }
    for(let i=0;i<n-m+1;i++){
        pre.next=cur
    }
}

var subsetsWithDup = function(nums) {
    var answer = [];
    var stack = [];
    nums = nums.sort();   
    backtracking(stack, answer, nums, 0);
    return answer;
};

function backtracking(stack, answer, arr, idx) {
    answer.push(stack.slice());
    for (let i = idx; i < arr.length; i++) {
        if (i > idx && arr[i] === arr[i-1]) continue; 
        stack.push(arr[i]);
        console.log('stack1', stack)
        backtracking(stack, answer, arr, i+1);
        console.log('stack2', stack)
        stack.pop();
        console.log('stack3', stack)
    }
}
let nums12=[1,2,2]
console.log('subsetsWithDup', subsetsWithDup(nums12))

let a=[1,2,3]
 a.push(5)

console.log('a', a)

var merge = function(nums1, m, nums2, n) {
  
    let j=n-1
    let len=m+n-1
    while(j>=0 ){
       if(nums1[i]>nums2[j]){
           nums1[len]=nums1[i]
           i--
           len--
       }
       else{
           nums1[len]=nums2[j]
           j--
           len--
       }
    }
    return nums1
    
}
 */

 //新建bst
 class TreeNode{
     constructor(value){
         this.value=value,
         this.left=null
         this.right=null

     }
 }
 let t=new TreeNode(5)
 console.log('t',t)
/**
98. Validate Binary Search Tree
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
 

Example 1:

    2
   / \
  1   3

Input: [2,1,3]
Output: true
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function validTreeNode(val) {
     this.val = val;
     this.left = this.right = null;
    }
   let  root=validTreeNode()
var isValidBST = function(root) {
    if(!root){return true}
    if(root.left.val>root.right.val || root.val>root.right.val){return false}
    return isValidBST(root.left)&& isValidBST(root.right)

    
};

/**
 * 96. Unique Binary Search Trees

Given n, how many structurally unique BST's (binary search trees) that store values 1 ... n?

Example:

Input: 3
Output: 5
Explanation:
Given n = 3, there are a total of 5 unique BST's:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 

 function UniqueBST(n){
     let arr=new Array(n+1)
     arr.fill(0)
     arr[1]=1;
     arr[0]=1
 
     for(let i=2;i<=n;i++){
         for(let j=0;j<=i-1;j++){
             arr[i]+=arr[j]*arr[i-j-1]
            console.log('i', i,arr[i])
         }
     }
     return arr[n]

 }
console.log(UniqueBST(3))
*/
 /**
  * 101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
  */
 var isSymmetric1 = function(root) {
    return helper(root, root)
};

const helper = function(p, q) {
    if (p == null && q == null)
        return true
    if (p == null || q == null)
        return false
    return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left)
}
//  var isSymmetric = function(root) {
//     if(root==null){return true}
//     return helper(root.left,root.right)

// }
// function helper(p,q){
//     console.log(p, q)
//     if(q==null && p==null){return true}
//     if(p==null || q==null){return false}
//     return (p.val==q.val) && helper(p.left ,q.right)&&helper(p.right ,q.left)

// }
console.log('isSymmetric', isSymmetric1([1,2,3]))

/**
 * 104. Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.

 function MaximumDepthBST(root){
    if(root==null){return 0}
    helper(root,0)
    function helper(root,depth){
        if(root==null){
            return depth
        }
      let dp1=helper(root.left,depth+1)
       let dp2= helper(root.right,depth+1)
       return Math.max(dp1,dp2)
    }
 }
 let r=new TreeNode()
 r=[3,9,20,null,null,15,7]
 console.log('root', r)
 console.log('MaximumDepthBST', MaximumDepthBST(r))
//?????答案好难想....
*/
/** 
121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
function bestBuySell1(nums) {
    let price=0
    let min=Infinity
    for(let i=0;i<nums.length;i++){
        console.log('i', i,nums[i])
        if(
            nums[i]<min){min=nums[i]
            console.log(nums[i],min)}
        else{price=Math.max(nums[i]-min,price)
        console.log('price', price)}
    }
    return price

}

function bestBuySell2(nums){
    let min=Infinity
    let res=0
    let max=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            min=nums[i]
            res+=max
            max=0
        }
        else if(nums[i]<min){
            min=nums[i]
            res+=max
            max=0
        }
        else{
            max=Math.max(nums[i]-min,max)
        }
        console.log('i', i,nums[i],min,max)
    }
    if(nums[nums.length-1]>=nums[nums.length-2]){return res+max}
    return res

}
function bestBuySell22(nums){
    let res=0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]-nums[i]){
            res+=nums[i+1]-nums[i]
        }
    }
    return  res
}
function  bestBuySell(nums) {
    if(nums.length<2){return 0}
    return helper(0,1,0,nums)
    function helper(minindex,index,max,nums){
        while(index<nums.length){
            if(nums[index]-nums[minindex]<0){
                minindex=index
                index++
            }
            else{
                let  dif=nums[index]-nums[minindex]
                max=Math.max(max,dif)
                index++
            }
            helper(minindex,index,max,nums)
        }
        return max

    
    }
}

let nums3= [1,9,6,9,1,7,1,1,5,9,9,9]
console.log('bestBuySell1', bestBuySell2(nums3))

/**
 * 110. Balanced Binary Tree
Easy

1735

146

Add to List

Share
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
 false
 */
var isBalanced = function(root) {
    if(!root){return true}
     //console.log( (Math.abs((height(root.left)-height(root.right)))
     //console.log(height(root.left), height(root.right))
     if(Math.abs((height(root.left)-height(root.right)))>1){
         return false
     }
     return isBalanced(root.left)&&isBalanced(root.right)
 
 }
 function height(lastroot){
    // console.log('las', lastroot)
     if(!lastroot){return 0}
     return 1+Math.max(height(lastroot.left),height(lastroot.right))

 }
 let root2=new TreeNode()
 root2=[1,2,2,3,3,null,null,4,4]
 console.log('isBalancedTree', isBalanced(root2))
//其实在计算深度的时候就已经遍历了每一个树枝 所以在这时候比较
//为什么这个不对呢???
var isBalanced=function(root){
     
    if(!root){return true}
    console.log(  helper(root.left),helper(root.right),Math.abs(helper(root.left)-helper(root.right)))
    return Math.abs(helper(root.left)-helper(root.right))<2
    function helper(root){
        if(!root){return 0}
        left=helper(root.left)
        right=helper(root.right)
        if(Math.abs(left-right)>1){return false}
        return 1+Math.max(left,right)
    }


}
var isBalanced=function(root){
     //???为什么console里有过false 最后还能return true 呢??  
    if(!root){return true}
    let balanced=true
    helper(root,balanced)
     console.log(  helper(root,balanced),balanced)
     
    return balanced
   
    function helper(root,balanced){
        if(!root){return 0}
        left=helper(root.left,balanced)
        right=helper(root.right,balanced)
       // console.log(root.left,left,root.right,left,right)
        if(Math.abs(left-right)>1){
            balanced=false
           console.log(balanced)
            return -1}
        return 1+Math.max(left,right)
    }


}
   

/**
 * 112. Path Sum


Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */
var hasPathSum = function(root, sum) {  

    return finder(0,root,sum)

    function finder(cursum,root,sum){
        if(!root){return false}
        if(!root.left &&!root.right){
            return sum==root.val+cursum
        }
      return finder(cursum+root.val,root.left,sum) || finder(cursum+root.val,root.right,sum)
         
      }
    }
console.log(true || false)
/** 
113. Path Sum II
a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
Return:

[
   [5,4,11,2],
   [5,8,4,5]
]
*/
function psthSumII (root, sum){
    let res=[]
    
    helper(root,sum,[],res)
    return res
    function helper(root ,sum,path,res){
          if(!root){return []}
          if(!root.left && !root.right&& root.val==sum ){
            
              res.push(path.concat(root.val))
              return
          }
          if(root.left){helper(root.left,sum-root.val,path.concat(root.val),res)}
          if(root.right){helper(root.right,sum-root.val,path.concat(root.val),res)}
    }

}

function symmetrictree(arr){
    if(!root){return true}
    return helper(root.left,root.right)
    function helper(p,q){
        if(!p && !q){return true}
        if(!P||!q){return false}
        return (p.val==q.val&& helper(p.left,q.right)&& helper(p.right,q.left))

    }
}
function sorttobst(array){
   len=arr.length
   mid=Math.floor(len/2)
   if(mid>0){
   let node=new TreeNode(arr[mid])
   node.left=sorttobst(arr.slice(0,mid))
   node.right=sorttobst(arr.slice(mid+1,len))
   }
   return node
}

function BalancedBST(nums){
    if(!nums){return true}
   if((depth(root.left)-depth(root.right))>1){return false}
   return BalancedBST(nums.left)&&BalancedBST(nums.right)
    function depth(root){
        if(!root){return 0}
        return Math.max(depth(root.left),depth(root.right))+1

    }

}
//z这一题的花花jie
