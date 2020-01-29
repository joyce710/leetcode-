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
 */
var climbStairs = function(n) {
 let arr=new Array(n)
 helper(n,arr)
}
function helper(n,arr) {

    if(n==1){return arr[1]=1}
    else if(n==2){return arr[2]= 2}
    else if(arr[n]){return arr[n]}
    arr[n]=helper(n-1,arr)+helper(n-2,arr)
     return arr[n]
};
console.log("climbStairs",climbStairs(45))