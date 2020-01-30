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
*/
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

    
};
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
  */