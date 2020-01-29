

/**

// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring,
// "pwke" is a subsequence and not a substring.


function _repeat(str){
    console.log('length', str.length)
    if(str.length===0){return 0}
    if(str.length===1){return 1}
    let res=[]
    let max=[]
    for(let i=0;i<str.length;i++){
        console.log('i', str[i])
        if (!res.includes(str[i])){
            res.push(str[i])
            if(res.length>max.length){
               max=res
                
                
                console.log('res', res)
                console.log('max', max)
            }
        }
       else{
        res=[]
        res.push[str[i]]
       
        continue
       }   
       console.log('res', res)
        }
        return console.log('tag', max.length)
    }
    
 

_repeat("abcabcbb")

function _repeat1(str){
    let store={}
    let left=0
    let max=0
    for(let right=0;right<str.length;right++){
      if(store[str[right]] !== undefined){
          left=Math.max(left,store[str[right]])
           console.log('leftttt', left)
      }
       store[str[right]]=right
       max=Math.max(right-left+1,max)
       console.log('left',left)
       console.log('r',right ,str[right])
       console.log('store', store)
       console.log('max', max)
     
    }
    return console.log('max', max)
}

_repeat1("abcabb")

**/

/** test map
let te={e:1112,r:6768}
console.log('tag', te["e"])
let map=new Map()
map.set("e",8888)
console.log('map', map)

function unique(arr) {
    let set = new Set(arr)
    let Array=[]
    set.forEach(item => Array.push(item))
    return Array
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
 console.log(unique(values))

 function unique2(arr) {
    return Array.from(new Set(arr));
  }
  console.log(unique2(values))

  let map= new Map([['str1', 'str1']])
  map.set(1, 'num1');     // a numeric key
  map.set(true, 'bool1')
  for (let item of map.keys()) {
    console.log('key',item); // cucumber, tomatoes, onion
  }

  map.forEach( (key, value, map) => {
    console.log(value); // cucumber: 500 etc
  });
  map.keys().forEach(item=>console.log('keys', item))
  console.log('newmap',map)
  console.log('entrie', map.entries())
*/

/** longestPalindrome
var longestPalindrome = function(str) {
    let Palindrome= ""
    let s =""
    for (let i=1;i<str.length;i++){
        if(str[i-1] ==str[i+1]){
            let len1=helper(str,s,i,i).length
            if (len1>Palindrome.length){
                Palindrome=helper(str,s,i,i)
            }
            
        }
      
    if(str[i] ===str[i+1]){
        let len2=helper(str,s,i,i+1).length
         if (len2>Palindrome.length){
                Palindrome=helper(str,s,i,i+1)
                console.log('helper2', Palindrome)
            }
    }
    }
    return Palindrome
};

var helper=function(str,res,l,r){
    while (l>0 && r<str.length && str[l]==str[r]){
        l -=1;
        r+=1;
        res=str.substring(l+1,r)
        console.log(res,l+1,r)
    }
        return res
    
}

console.log("pppp",longestPalindrome("ccc"))

*/



/**3sum 

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function sum3sum(nums){
            
    let res=[]
    nums.sort((a,b)=>{return a-b})
    for(let i=0;i<nums.length;i++){
        let left=i+1;
        let right = nums.length-1
        let sum=-nums[i]
       console.log('i', i)
        while (left<right){
            console.log('left', left)
            console.log('rightft', right)
            console.log('55555', res, res.length)
            if (res.length===3){
                Res.push(res)
                res=[]
             }
            if(nums[left]+nums[right]===sum){
                res.push([nums[i],nums[left],nums[right]])
                console.log('res', res, res.length)
                while(left<right && nums[left]===nums[left+1]){ left++}
                console.log("left4444",left)
                while (left<right && nums[right]===nums[right-1]){right--}
                console.log("right444",right)
            }
            console.log('res333', res, res.length)
            if(nums[left]+nums[right]<sum){left++}
            else{right--}
            console.log('44444', res, res.length)
        }
        while(nums[i]===nums[i+1]){i++}
    } 
  return res
}

let nums1=[0,0,0]
console.log(sum3sum(nums1))
//   0  1  2 3 4 5
// [-4,-1,-1,0,1,2]

**/

/**longestConsecutive 
var longestConsecutive = function(nums) {
    nums = new Set(nums);
    console.log('nums',nums)
    let max = 0;
    let y = 0;
    nums.forEach(x => {
        console.log('x', x)
      // 说明x是连续序列的开头元素
      if (!nums.has(x - 1)) {
        y = x + 1;
        while (nums.has(y)) {
            console.log('yfx', x)
          y = y + 1;
        }
        max = Math.max(max, y - x); // y - x 就是从x开始到最后有多少连续的数字
      }
    });
    return max;
  };

  let num1s=[100, 4, 200, 1,1,1, 3, 2]
  longestConsecutive (num1s)
function longestConsecutuve1(nums){
    nums=Array.from
    nums=[...new Set(nums)].sort((a,b)=>a-b)
    let count=1
    let maxCount=1
    for (let i=0; i<nums.length;i++){
        if(nums[i+1]-nums[i]===1){
            count++
        }
        else{
            maxCount=Math.max(maxCount,count)
            count=1
        }
    }
  return maxCount

}

console.log("res1",longestConsecutuve1(num1s))

function longestConsecutuve2(nums){
    let count=1
   let y=0
   let maxCount=1;
   nums.forEach(x=>{
       if(!nums.includes(x-1)){
           y=x+1
           while(nums.includes(y)){
             y++
             
           }
       }
       maxCount=Math.max()
   })
   for(let i=0;i<nums.length;i++){
       if(!nums.includes(nums[i]-1)){
           y=nums[i]+1
           while(nums.includes(y)){
               y+=1
           }
           
           maxCount=Math.max(y-nums[i],maxCount)
          
       }
       
   }
   return maxCount

}


console.log("res2",longestConsecutuve2(num1s))
*/

/** two sum use dictionnary  or use map 

var twoSum = function(nums, target) {
    nums.sort((a,b)=>{return a-b})
    let res=[]
    for(let l=0;l<nums.length;l++){
       let right=nums.length-1
      while(right>l){
            if(nums[l]+nums[right]===target){
               res.push([nums[l],nums[right]])
               while(right>l){
                right--
                }

            }
            if(nums[l]+nums[right]>target){
                 right--
            }
            else{ break }
        }
    }
    return res
};

let nums=[2,3,7,11,15]
console.log(twoSum(nums,9))

var lengthOfLongestSubstring = function(s) {
    let res=[]
    let right=0
    let maxLen=1
    let left=0
    array=s.split('')
    console.log('array', array)
    for (let i=0;i<array.length;i++){
      
      if(!res.includes(array[i])){
          res.push(array[i])
          right++
      }
      else{
         left=i;
         res=[]
      }
      maxLen=Math.max(right-left, maxLen)
    }
    return maxLen
};

console.log('lengthsubstring', lengthOfLongestSubstring("pwwkew"))



function twoSum1(nums,target){
    
    let store= {}
    for (let i=0;i<nums.length;i++){
        console.log('i', i)
       let sum=target-nums[i]
       console.log(sum)
       console.log(store[sum])
        if (store[sum]===undefined){
             store[nums[i]]=i
             console.log(nums[i],store[nums[i]])
        }else{
            return ([store[sum],i])
        }
        console.log(store)
         
           
        
    }

}

function twoSummap(nums,target){
    let map= new Map
    for(let i=0;i<nums.length;i++){
        console.log('tag',target)
        console.log('nums[i]', nums[i])
        sum=target-nums[i]
        console.log('sum', sum)
        if(map.has(sum)){
            console.log('map', map)
            return ([i,map.get(sum)])
        }
        else{
            map.set(nums[i],i)
        }
    }

}
let num3=[2,7,11,15]
console.log('twosum',twoSum1(num3,9))
console.log('twoSummap',twoSummap(num3,9))

*/

/**3. Longest Substring Without Repeating Characters 
var lengthOfLongestSubstring0 = function(s) {
    let max=0
    let map=new Map
    let left=0
 for (let i=0;i<s.length;i++){
   if(map.has(s[i])){
       console.log('s[i', s[i])
    left=Math.max(map.get(s[i])+1,left)
    console.log('left', left)
      
   }
  
    map.set(s[i],i)
    console.log('map', map)
    
   max=Math.max(i-left+1,max)
 }
 return max
}

var lengthOfLongestSubstring = function(str) {
    let store={};
    let left=0;
    let max=0;
    for (let i=0; i<str.length;i++){
        if(store[str[i]] !==undefined){
            //如果当前left比store里重复那个数大,那么就没关系,说明不会重复,因为已经跳过他了.只要保持那个left就行
            left=Math.max(store[str[i]]+1,left)
        }
        store[str[i]]=i
        max=Math.max(i-left+1,max)
    }
    return max
}
console.log(lengthOfLongestSubstring0("abcabcbb"))
console.log(lengthOfLongestSubstring("abcabcbb"))


*/




/** 
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

var findMedianSortedArrays = function(nums1, nums2) {
   let array=[...nums1,...nums2].sort((a,b)=>a-b)
   if(array.length%2!==0){
       return array[parseInt(array.length/2)]
   }
   return (array[array.length/2]+array[array.length/2-1])/2
};

arr1=[1,2]
arr2=[2,5]

console.log('findMedianSortedArrays', findMedianSortedArrays(arr1,arr2))

*/


/** 6. ZigZag Conversion
 
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I



function ZigZagConversion(str,rowNum){
    if(rowNum<2){return str}
    let res=""
    let row=[]
    for(let i=0;i<rowNum;i++){
       row[i]=[]
    }
    let index=0
    while(index<str.length){
        for(let i=0;i<rowNum && index<str.length;i++){
            row[i].push(str[index]);
            index++
        }
        for(let i=rowNum-2;i>0&index<str.length;i--){
            row[i].push(str[index])
            index++
        }
    }

    for(let i=0;i<rowNum;i++){
  
        res+=row[i].join('')
       //res+=string
        console.log('row[i]',row[i].join(""))
       
    }
    return res
}

console.log('tag', ZigZagConversion("PAYPAL,ISHIRING",2))
*/

/** 9 isPalindrome
var isPalindrome = function(x) {
    if(x<0){return false}
     console.log(x)
    let reverse=x.toString().split('').reverse().join('')
     console.log(reverse)
    if (x.toString()===reverse){
        console.log("222")
        return true}
    else{return false}
 }

 let x=121
 console.log('isPalindrome', isPalindrome(x))

 */
/** longestPalindrome1 
var longestPalindrome1 = function(s) {
    if(s.length<2){return s}
    let palindrome=""
    let substr=""
    let l;
    let r;
    //每次全覆盖就是当中间为一个数的时候,全面跑一遍,再用if如果他们还有特别的 再来一遍,反正都是会存下最大值
    for(let i=0;i<s.length;i++){
            l=i;
            r=i
            substr= getSubStr(l,r,s,substr)
            if(palindrome.length<substr.length){
                palindrome=getSubStr(l,r,s,substr)
            
        }
        if(s[i]==s[i+1]){
            l=i;
            r=i+1;
          
            substr= getSubStr(l,r,s,substr)
            if(palindrome.length<substr.length){
               palindrome=getSubStr(l,r,s,substr)
        }
        }
    }
    return palindrome
};

function getSubStr(l,r,s,substr){
    while(s[l]===s[r] && l>=0 && r<s.length){
        substr=s.substring(l,r+1)
        l--;
        r++;
    }
    return substr
}
 let s="ab"
 console.log('longestPalindrome1', longestPalindrome1(s))

 */

/** String to Integer (atoi)
 这一题的作用就是和javascript里的parseint 一样


 
 function roughScale(x) {
     //可以用parseint 如果开头没有以数字打头不行!!数字中间插位数也不行,只会找到第一个数字If the first character cannot be converted to a number, parseInt returns NaN unless the radix is bigger than 10.
    const parsed = parseInt(x);
    if (isNaN(parsed)) { return 0 }
    return parsed ;
    //也可以用和这个比较
    //     let res=[]
    //     for(let i=0;i<x.length;i++){
    //     if(x[i] >= '0' && x[i] <= '9') {
    //     res.push(x[i]);
    //     }
    //    }
   // res=res.join('')
   // return res
     
   //还可以用regex
//    let res=[]
  
//      let regex=/[0-9]/g
//    for(let i=0;i<x.length;i++){
//      if(x[i].match(regex)){
//          res.push(x[i])
//      }
//   }
//   return res
}

  // expected output: 1500
  
  console.log(roughScale('   -9128deed22'));

  */ 

//   function atoi(str){
//       str=str.trim()
//       if(str[0] !=="+" || str[0] !=="-" || str[0].isNum)
//       for(let i=0;i<str.length;i++){
//           if
//       }
//   }
  


/** 11. Container With Most Water
 *Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

var maxArea = function(nums) {
    let max=0
    let l=0
    let r=nums.length-1
    let res

   while(l<r){
       if(nums[l]<nums[r] ){
           console.log('l', l,nums[l])
           console.log('r', r,nums[r])
           res=nums[l]*Math.abs(r-l)
           console.log('res', res)
           l++
       }
       else{
           res=nums[r]*Math.abs(r-l)
           r--
       }
       max=Math.max(max,res)
   }
   return max
};

let h=[1,8,6,2,5,4,8,3,7]
console.log('maxArea', maxArea(h))
*/

/** 14. Longest Common Prefix
Easy

1890

1610

Add to List

Share
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

function longestcomprefix(arr){
    if(arr.length<2){return arr.join("")}
    arr.sort((a,b)=>a.length-b.length)
    console.log('arr',arr)
    let prefix=""
    let minindex=arr[0].length
    for (let i=0;i<arr.length-1;i++){
        console.log('i', i,arr[i])
        let indx=0
        if(arr[i][indx]===arr[i+1][indx]){
           while(arr[i][indx]===arr[i+1][indx] &&indx<arr[0].length){
            indx++
            }
           console.log('indx', indx)
            if(indx<minindex){
                minindex=indx
                console.log('333@@@@', minindex)
            
            }
            prefix=arr[0].slice(0,minindex)
            console.log('prefix', prefix)
        }
        else{
              return ""
        }
    }
    return prefix

}

let array1= ["acc","aaa","aaba"]
console.log('longestcomprefix', longestcomprefix(array1))
*/


/**7. Reverse Integer 
function reverse(x){
    let str
    let num
     if(x.toString().startsWith("-")){
         str=x.toString().slice(1)
         console.log("x",x)
         str=helper(str)
         num=Number(("-"+str))
         console.log("3333",num)
     }
     else{
        str=helper(str)
        num=Number(str)
     }
     if(num>2**31-1 || num< (2**31*-1)){
         return 0
     }
     return num
}

function helper(str){
    str=str.split('').reverse().join('')
    if(str.startsWith("0")){
        let i=0
        while(i<str.length && str[i]==="0"){
            i++
        }
        str=str.slice(i)
    }
    console.log("return",str)
   return str
}

let number1=-1230
console.log("reverse",reverse(number1))
 */


/**8. String to Integer (atoi) 就是JavaScript的parseint
var myAtoi = function(str) {
    str= str.trim()
    let res=[]
    let regex=/[0-9]/g
    let resstr

    if(isNaN(str[0]) && str.length>1){
        if(str[0]==="+" ||str[0]==="-" ){
            console.log('str[i', str[0])
            if(!str[1].match(regex)){return 0}
            for(i=1;i<str.length;i++){
                console.log('str[i', str[i])
                if(!str[i].match(regex)){ break}
                res.push(str[i])
                console.log('res', )
             }
             resstr=Number(str[0]+res.join(''))
         }
         else{return 0}
    }
    else{
        for(i=0;i<str.length;i++){
            if(!str[i].match(regex)){break}
            res.push(str[i])
            console.log('res',res)
         }
         resstr=Number(res.join(''))
    }

      console.log(resstr)
   if(resstr<2**31*-1 ){return 2**31*-1 }
   else if( resstr>2**31-1){return 2**31-1 }
   return resstr

    
};

// 或者直接用parseInt 
function myAtoiparseInt(str){
    str=str.trim()
    console.log('str', str)
   let number=parseInt(str)
   console.log('num', number)
   if(isNaN(number)){return 0}
   if(number<2**31*-1 ){return 2**31*-1 }
   else if( number>2**31-1){return 2**31-1 }
   return number

}

let string2="4193 with words"
console.log(myAtoiparseInt(string2))

*/

/** 15. 3Sum

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
var threeSum = function(nums) {
    if(nums.length<2){
        console.log(nums.length,nums)
        return []}
   
    let res=[]
    nums.sort((a,b)=>a-b)
    console.log('2@@@@nums', nums)
    for(let i=0;i<nums.length;i++){
        console.log('i', i,nums[i])
       
        let l=i+1;
        let r=nums.length-1
        let target=-nums[i]
        while(l<r){
            if(nums[l]+nums[r]===target){
                console.log('tarfet', target,nums[l],nums[r])
                console.log('L,,R', nums[i],nums[l],nums[r])
               
                res.push([nums[i],nums[l],nums[r]])
                l++;
                r--
                console.log('L,,R', nums[i],nums[l],nums[r])
                while(nums[l]===nums[l-1] && l<r){ 
                    console.log('numsl', nums[l]) 
                     l++}
                while(nums[r]===nums[r+1] && l<r) {r--}
                console.log("res", res)
            }
            // console.log('L,33,R33', target,nums[i],nums[l],nums[r])
            // console.log('L22,,R222', target,nums[l],nums[r])
            else if(nums[l]+nums[r]<target){
                l++
            }
            else if(nums[l]+nums[r]>target){ r-- }
        }
        while(nums[i]===nums[i+1]){i++}
    }
    return res
};

let nums2 = [-2,0,0,2,2]
console.log("threeSum323",threeSum(nums2))
*/



/** 
16. 3Sum Closest
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).



var threeSumClosest= function(nums,target){
    nums.sort((a,b)=>a-b)
    let res
    let mindif=Infinity
    for(let i=0;i<nums.length;i++){
        let dif
        let l=i+1
        let r=nums.length-1
        while(l<r){
        let sum=nums[i]+nums[r]+nums[l]
            if(sum===target){
                return sum
            }
            else if(sum<target){
                dif=Math.abs(sum-target)
                l++
            }
            else{
                dif=Math.abs(sum-target)
                r--
            }
            if(dif<mindif){
                mindif=dif
                res=sum
            }
       }
    }
    return res
}

let nums=[-1,2,1,-4]

console.log('threeSumClosest', threeSumClosest(nums,1))


var isValid=function(str){

    let stack=[]
    let map=new Map
    map.set("(",")")
       .set("[","]")
       .set("{","}")
       console.log('map', map)
    for(let i=0;i<str.length;i++){
        console.log('str[i', str[i])
        console.log('stackoriginal', stack)
        if(map.has(str[i])){
            stack.push(str[i])

        }
        else{
            let poped=stack.pop()
            if(str[i] !== map.get(poped))
               {return false}
            console.log('stackpop', poped)
            // stack.pop()
          
        }
        console.log('stackafterPop', stack)
    }
    return stack.length===0
}
console.log('isValid', isValid("[()([])]"))
 */
/** 
19. Remove Nth Node From End of List

Share
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.


function ListNode(val){
    this.val=val;
    this.next=null
    return val
}
head=ListNode(3)
console.log(typeof(head))
function RemoveNode(head,n){
    let len=0
   while(head.next !=null){
       head=head.next
       len+=1
   }

}
*/






/**17. Letter Combinations of a Phone Number
Medium

2973

357

Add to List

Share
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
function Combination(num){
    let len=num.length
    if(num.length<1){return []}
    console.log('len', len)
    let map= new Map
    map.set("1","")
       .set("2","abc")
       .set("3","def")
       .set("4","ghi")
       .set("5","jkl")
       .set("6","mno")
       .set("7","pqrs")
       .set("8","tuv")
       .set("9","wxyz")
    let res=[]
    helper(map,"",num,0)
    function helper(map,temp,num,index){
    if(temp.length===num.length ){  
        res.push(temp)    
    }
    else{
       
        let tempstr=map.get(num[index])
       
        for(let i=0;i< tempstr.length ;i++){
          console.log('i', i)
            temp=temp+tempstr[i]
        
            helper(map,temp,num,index+1)
            temp=temp.slice(0,temp.length-1)   
        }  
     }

    }
    return res
}
 
console.log(Combination, Combination(""))
*/
/**
 *22. Generate Parentheses

Share
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

function GenerateParentheses(n){
    let res=[]
    helper("(",n-1,n)
    
    function helper(prefix,open,close){
        console.log(prefix)
        if(close===0&& open===0){
            res.push(prefix)
        }
        if(open<close){
            helper(prefix+')',open,close-1)
        }
        if(open){
            helper(prefix+'(',open-1,close)
        }

    }
    return res
}
console.log(GenerateParentheses(3))
 */



/**
 24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 
26. Remove Duplicates from Sorted Array

Share
Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned l


var removeDuplicates = function(nums) {
    
 
   let low=0
   let fast=1
   while(fast<nums.length){
       if(nums[low]===nums[fast]){
           fast++
       }
       else{
           low+=1
           nums[low]=nums[fast]
           fast++
           console.log("slow",low,nums[low])
       }
      console.log("fast",fast,nums[fast])
   }
   return low+1
};
let num4=[0,0,1,1,1,2,2,3,3,4]
console.log('removeDuplicates', removeDuplicates(num4))
console.log('num', num4)

var removeDuplicates2 = function(nums) {
    
   for(let i=0;i<nums.length;i++){
       if(nums[i]===nums[i+1]){
           
       }
   }
 };
*/

//  var removeDuplicates3 = function(nums) {
//     for (let i = 0; i <= nums.length - 1; i++) {
//         console.log('len', nums.length,i)
//         while (nums[i] === nums[i+1]) {
//             if ((nums[i] === nums[i+1])) {
//                 console.log('nums[i', i,nums[i],nums[i+1])
//                 // Romove '1' element at index position 'i'
//                 nums.splice(i, 1);
//                 console.log('NUM', nums.length)
//             }
//         }
//     }
//     return nums.length;
// };
// ??????????????num不会变吗?
// console.log('Duplicates', removeDuplicates3(num4))
// console.log('num', num4)

/**27. Remove Element

Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.

It doesn't matter what you leave beyond the returned length. 

function Removelement(nums,val){
 //num的长度是会改变,但这个循环里nu.length不会改变了,这已经是一个数了
    for(let i=0;i<nums.length+1;){
        console.log('len', nums.length)
        if(nums[i]==val){
            nums.splice(i,1)
            console.log('nums[i', i,nums[i],nums)
            
        }
        else{
            i++
        }
    }
   return nums

}
let num5=[0,1,2,2,3,0,4,2,5,6]
console.log('Removelement', Removelement(num5,2))


function Removelement2(nums,val){
    let start=0
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[start]=nums[i]
            start++
        }
    }
    return start
}
console.log('Removelement2', Removelement2(num5,2),num5)
*/

/** 
 * 28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2

function  strStr(haystack, needle){
    needle_len=needle.length
    console.log('len', needle_len)
    for(let i=0;i<haystack.length;i++){
        let start=i;
        let end=i+needle_len
        console.log('end', start,end)
       console.log('substr', haystack.substring(start,end))
        if(haystack.substring(start,end)===needle){
            return start
        }
    }
    return -1

}
let haystack = "aaaaa";
let needle = "bba";
console.log('strStr', strStr(haystack, needle))

*/

/** 29. Divide Two Integers
Share
Given two integers dividend and divisor, divide two integers without using multiplication, division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2

 
var divide = function(dividend, divisor) {
    if (dividend <= -2147483648 && divisor==-1) return 2147483647;
    if(divisor==-1){return -dividend}
    if(divisor==1){return dividend}
    let finalSign=Math.sign(dividend)===Math.sign(divisor)?1:-1
  //  console.log('sign', finalSign)
    
    dividend=Math.abs(dividend)
    divisor=Math.abs(divisor)
   let res= helper(dividend,divisor,0)
   if(res<2**31*-1){return 2**31*-1 }
   if(res>2**31-1){return 2**31-1}
   return finalSign*res
   
};
function helper(dividend,divisor,count){
     if(dividend-divisor<0){
        //console.log('dividend<0', dividend,divisor,count)
        return count
        //return count
     }
     else{
        dividend=dividend-divisor
        count+=1
       // console.log('dividend', dividend,count)
         return helper(dividend,divisor,count)
     }

}


let dividend = 2147483647
let divisor = 2
console.log('divide', divide(dividend,divisor))

 */

 /**
  31. Next Permutation

Share
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place and use only constant extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

1,2,3,5,4 → 1,2,4,3,5
3,2,1 → 1,2,3
1,1,5 → 1,5,1

 var nextPermutation = function(nums) {

    for(let i=nums.length-1;i>0;i--){
        if(nums[i-1]<nums[i]){
            let changeIndex=i-1
            let nextMaxNumIndex=findNextMax(nums,changeIndex)
            swapNum(changeIndex,nextMaxNumIndex,nums)
            sortRestNum(i,nums.length-1,nums)
            return nums
        }
    }
    sortRestNum(0,nums.length-1,nums)
    return nums

};
function findNextMax(nums,numIndex){
    curNum=nums[numIndex]
    for(let i=nums.length-1;i>numIndex;i--){
        if(nums[i]>curNum){
            return i
        }
    }

}
let nums=[1,2,3,5,4,2]
console.log(findNextMax(nums,2))
function swapNum(i,j,nums){
    let temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp
    return nums
}
//console.log(swapNum(2,4,nums))
function sortRestNum(start,end,nums){
    while(start<end){
        temp=nums[start]
        nums[start]=nums[end]
        nums[end]=temp
        start++
        end--

    }
    return nums

}
//console.log(sortRestNum(3,5,nums))

console.log(nextPermutation(nums))
  */
/** 
 39. Combination Sum
Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
The same repeated number may be chosen from candidates unlimited number of times.

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

var combinationSum = function(nums, target) {
    let res=[]
    let path=[]
    
    helper(nums,path,0,target,res)
    return res
};

function helper(nums,path,index,target,res){

    for(let i=index;i<nums.length;i++){
        if(target<0){return }
        if(target===0){
           res.push(path)
          // console.log("ress",res)
           return
        }
        // path.push(nums[i])
        // console.log(path)
        helper(nums, path.concat(nums[i]),i,target-nums[i],res)
        
        console.log('path',path)
    }

}
 let candidates = [2,3,6,7]
 
 
 let target = 7
 console.log(combinationSum(candidates,target))
 */
/** 
 40. Combination Sum II

Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]

var combinationSum2 = function(nums, target) {
    let res=[]
    nums.sort((a,b)=>a-b)
    console.log(nums)
    helper(nums,0,target,[],res)
    return res
};

function helper(nums,index,target,path,res){
    console.log("path", res,path)
    if(target<0){return}
    if(target===0){
        res.push(path)
        return
    }
    for(let i=index;i<nums.length;i++){
       
        helper(nums,i+1,target-nums[i],path.concat(nums[i]),res)
        while (nums[i]==nums[i+1] && i<nums.length){
            i++
        }
    }


} 
let candidates = [2,5,2,1,2]
 
 
 let target = 5
 console.log(combinationSum2(candidates,target))
console.log('helper', helper(7,3,0))

var searchInsert = function(nums, target) {
  for(let i=0;i<nums.length;i++){
      if(nums[i]>=target){
          return i

      }
  }
  return nums.length
    
};

*/
/** 
33. Search in Rotated Sorted Array
Medium

3532

390

Add to List

Share
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).
*/
/**这样写nums会被改变,但不能变,因为要返回原始index binarysearch 可以,但动的只能是指针,不能是nums这个
 * 所以这个改一改的话就把search这个妇女单独拿出来写
 */
/*
var search = function(begin,end,nums, target) {
  

    if(begin>end){return -1}
    mid=Math.floor((begin+end)/2)
    if(target===nums[mid]){return mid}
    if(nums[begin]<nums[mid]){
        //left is ascending
       if(target <nums[begin]){
           console.log('left is ascending', 'target in left',mid,end,nums[mid])
           //target in right
           //do bs in left
           return search(mid,end,nums,target)
         
       }
       else{
           //do bs at right
           console.log('left is ascending', 'target in right')
           
           return binarySearch(begin,mid,target,nums)
       }
    }
    else{
        //right is acending,let is mix
        if(target<nums[mid]){
            //target at left
            //fdo search
            console.log('right is ascending', 'target in left')
            return search(begin,mid,nums,target)

        }
        else{
            console.log('right is ascending', 'target in right',mid,end,nums[mid])
            //target at right
            //do bsf
            return binarySearch(mid,end,target,nums)
        }
    }
};
function binarySearch(begin,end,target,nums){
    console.log('bss', begin,end,target,nums)
    if(begin> end ){return -1}
    let mid=Math.floor((begin+end)/2)
    console.log('num[mid', mid,nums[end],nums,nums.length)//????
    console.log('mid66', mid,nums[mid],target)
   if(target===nums[mid]){return mid}
    if(target<nums[mid]){
       return  binarySearch(begin,mid,target,nums)
    }
    else{
       return  binarySearch(mid+1,end,target,nums)
    }

}

let nums=[3,4,5,6,7,0,1,2]
let target=7
console.log('search', search (0,nums.length-1,nums, target))


function SearchRotated(nums,target){
     
          let left=0;
          let  r=nums.length-1
         
          while(left<=r){
          let mid=Math.floor((left+r)/2)
          if(nums[mid]===target){return mid}
          if(nums[left]<=nums[mid]){
              //left is ascending
              if(nums[left]<=target &&target<=nums[mid]){
                  //target  in left
                  r=mid-1
              }
              else{
                l=mid+1
              }
              
          }
          else{
              //right is ascending
              if(nums[mid]<=target &&target <=nums[r]){
                  left=mid+1
              }
              else{
                  r=mid-1
              }
          }
          }
          return -1

}
console.log('SearchRotated', SearchRotated (nums,target))

*/
/** 
function IsFutureDate(dateVal) {
    var Currentdate = new Date();
        dateVal= dateVal.split("/");
        console.log('dateval', dateVal)
    var year = Currentdate.getFullYear();
    let  curMonth = Currentdate.getMonth();
    console.log('curMonth', curMonth)
    if (year < dateVal[1]) {
        return false;//future date

    }        
    else {
        return true; //past date
    }

}
console.log('teste', IsFutureDate("09/2013"))

console.log(parseInt('5')< 4)

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getMonth()); // (January gives 0)

*/


/**
 * 34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].
 

 var searchRange = function(nums, target) {

    let start=0;
    let end=nums.length-1
   
   
   while(start<=end){
    mid=Math.floor((start+end)/2)
       console.log('startend', start,mid,end,nums[mid],target)
        if(target===nums[mid]){
           let start=mid
           while(nums[start]===nums[mid]){
               console.log('start', start)
               start--
           }
           let end=mid+1
           while(nums[end]===nums[mid]){
               end++
           }
           return [start+1,end-1]
        }
        if(target<nums[mid]){
          
            end=mid-1
        }
        else{
            console.log('left', '')
            start=mid+1
        }

   }
    return [-1,-1]
};

let nums0=[5,7,7,8,8,10]
let target = 7


console.log('searchRange', searchRange(nums0,target))
*/
/**
 * 46. Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
Accepted


 function Permutations(nums){
     let res=[]
     helper(nums,[],res)
     return res
 }

 function helper(nums,path,res){
    
     if(path.length===nums.length){
         res.push(path)
         console.log('res', res)
         return 
     }
     for(let i=0;i<nums.length;i++){
         if(path.includes(nums[i])){continue}
       
         helper(nums,path.concat(nums[i]),res)
     
     }
 }

 let nums=[1,2,3]

 console.log('Permutations', Permutations(nums))
 */
/** 
47. Permutations II
Given a collection of numbers that might contain duplicates, return all possible unique permutations.

Example:

Input: [1,1,2]
Output:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

//change nums,minus nums[i]
//while nums[i]==nums[i+1] continue
function Permutations2(nums){
    let res=[]
    nums.sort((a,b)=>a-b)
    //helper(nums,res,[])
    helper(nums,res,[])
    return res
}
function helper(nums,res,path){
    if(nums.length===0){
        // console.log("res", path,res)
        //因为加进去res里了还是那个path,所以每次有什么变化 他就跟着变,,当最后一层nums变成0 时 path 又是从[ ] 开始,因为里面东西都pop出去了
        res.push(path.slice())
        //res.push(path)??????????
        // console.log("res", path,res)
        return
    }
    for(let i=0;i<nums.length;i++){
        
        // console.log('i', i,nums[i])
        // console.log('nums', nums)
        
        
        if(nums[i]===nums[i-1]){continue}
        
        path.push(nums[i])
        nums.splice(i,1)
        helper(nums,res, path)
        nums.splice(i,0,path.pop())
        
    }
}
let nums=[1,2,3]

console.log('Permutations', Permutations2(nums))
let bb=[4]
bb.push(nums)
*/
/** 
60. Permutation Sequence

Share
The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

function Permutation3(n,k){
    let nums=[]
    let res=[]
    for(let i=1;i<n+1;i++){
        nums.push(i)
    }
    console.log('nums', nums)
    let path=''
    backtracking(n,nums,path,res)
    return res[k]
}
function backtracking(n,nums,path,res){
    if(path.length===n){
        res.push(path)
        return 
    }
    for(let i=0;i<nums.length;i++){
      
        if(path.includes(nums[i])){continue}
        backtracking(n,nums,path+nums[i],res)
        
    }
}
console.log('Permutations', Permutation3(3,3))



*/
/**
 * 49. Group Anagrams
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

 function groupAnagrams(strs){
    let map=new Map()
    for(let i=0;i<strs.length;i++){
        str=strs[i].split('').sort().join('')
        console.log('str[i', str)
        if(map.has(str)){
            map.get(str).push(strs[i])
        }
        else{
            map.set(str,[strs[i]])
  
        }
    }
    console.log('map', map)
    let res=[]
 for (let value of map.values()){
     res.push(value)
 }
return res
 }
 let strs=["eat", "tea", "tan", "ate", "nat", "bat"]
 console.log('groupAnagrams', groupAnagrams(strs))
 */
/**
 * 贪心算法！！
55. Jump Game
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

var jumpGame= function(nums){
    if(nums.length<2){return true}
    let reachIndex=0
    for(let i=0;i<nums.length && i<=reachIndex ;i++){
        reachIndex=Math.max(nums[i]+i,reachIndex)
    }
    if(reachIndex<nums.length-1){return false}
    return true
}
let nums3=[2,0,0]
console.log("jumpGame",jumpGame(nums3))
 */
/** 
56. Merge Intervals
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

function merges(nums){
    nums.sort((a,b)=>a[0]-b[0])
    console.log(nums)
    let res=[]
    for(let i=1;i<nums.length;i++){
        let pre=nums[i-1]
        let cur=nums[i]
        if(pre[1]>=cur[0]){
            cur[1]=Math.max(pre[1],cur[1]);
            nums[i]=[pre[0],cur[1]]
            console.log(nums[i])

        }
        else {
            res.push(nums[i-1])

        }
    }
    res.push(nums[nums.length - 1])
    console.log(1)
    return res
}
let Input=[[1,4],[2,3],[8,17],[15,18]]
console.log("mergeinterval", merges(Input))

*/

/**62. Unique Paths

A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
Above is a 7 x 3 grid. How many possible unique paths are there?

Note: m and n will be at most 100.

Example 1:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
Example 2:

Input: m = 7, n = 3
Output: 28 

function uniquePaths(m,n){
    let arr=new Array(m)
    for(let i=0;i<m;i++){
        arr[i]=new Array(n)
    }
    console.log('arr', arr)
    arr[0][0]=1
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){

            //如果最顶上i-1=0了说明就没有从上面治过来的,所以没有above
            //同理对于right\,如果靠边了j-1=0了 说明就没有right的路径
            if(i===0&& j===0){continue}
            let above=0;
            let right=0
            if(i-1>0){ above=arr[i-1][j]}
            if(j-1>0){ right=arr[i][j-1]}
            //因为到上一个点有多少种方式, 此点就上上面两条方式相加,如果到此点只有一条路,就是结果和上一条一样
            arr[i][j]=above+right
            console.log('arrii ', i,j,arr[i][j])

        }
        return arr[m-1][n-1]
    }

}
console.log("uniquePaths",uniquePaths(3,2))
*/
/**
66. Plus One
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321. 


var plusOne = function(digits) {
    for(let i=digits.length-1;i>=0;i--){
      if(digits[i]<9){
          digits[i]++
          return digits
      }
      digits[i]=0
      console.log('digit ', digits )
    }
    
digits.unshift(1)
    return digits

};
let nums=[9]
console.log('plusOne', plusOne(nums))
*/
/** 
67. Add Binary
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"*/
function binary(a,b){
    let lena=a.length
    let lenb=b.length
  let len=Math.max(a.length,b.length)
   helper(len-1,a,b,0,res)
   function helper(i,a,b,sum,res){
       if(a[i]==undefined ){
          b.slice(0,i)
          res=b+res
          return res

       }
        else if(a[i]+b[j]+sum>=2){
          b[j]=(a[i]+b[j]+sum)%2
          sum=1
          return helper(i-1,a,b,sum,res)
        }
       helper(i-1,a,b,a[i]+a[b]+sum,res)
    }
}