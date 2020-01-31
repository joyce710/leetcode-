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
  */
 //two ways:
 //count sort and one-pass 
 //solution one:
//  var sortColors = function(nums) {
//      let map={}
//    for(let i=0;i<nums.length;i++){
//        if(map[nums[i]]){map[nums[i]]+=1}
//        else{map[nums[i]]=1}
       
//        console.log(i,nums[i],map)
//    }
//    console.log(map[0])
//    nums.nums.slice(0,map[0],0)
//    console.log("nums",nums)
    
// };
// let nums=[2,0,2,1,1,0]
//  console.log("sortColors",sortColors(nums))

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
 */
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

/** 
86. Partition List
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

*/
function partitionList(head,x){
    let dummy=new ListNode()
    dummy.next=head
    let pre=head
    let partition=head
    let after
    while(partition.next.val>=x){
        partition=partition.next
    }
    
    pre=partition
    partition=partition.next
    cur=partition.next
    while (cur &&cur.next){
        
        if(cur.val<x){

          
           partition.next=cur.next
           cur.next=partition
           pre.next=cur
           pre=pre.next
           cur=cur.next
        }
        else{
          cur=cur.next
        }
    }
    return dummy.next

}



