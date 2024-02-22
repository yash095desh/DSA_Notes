// Frequency Counter

/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/
function sameFrequency(n1, n2) {
  let num1 = n1.toString();
  let num2 = n2.toString();
  if (num1.length !== num2.length) return false;
  let Counter1 = {};
  for (val of num1) {
    Counter1[val] = (Counter1[val] || 0) + 1;
  }
  let Counter2 = {};
  for (val of num2) {
    Counter2[val] = (Counter2[val] || 0) + 1;
  }

  for (keys in Counter1) {
    if (keys in Counter2) {
      if (Counter1[keys] === Counter2[keys]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

sameFrequency(4141, 1411)




/*

Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true 
areThereDuplicates('a', 'b', 'c', 'a') // true 
Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

Space - O(1)
*/
function areThereDuplicates(...args) {
    const Counter = {}
    for(let val of args){
        Counter[val] = (Counter[val] || 0) + 1;
    }
    for(let keys in Counter){
        if(Counter[keys] !== 1){
            return false
        }
    }
    return true
  }

  areThereDuplicates(1,2,3,4)




// Multiple Pointers

  /*
  
  Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
  
  */

function averagePair(arr,val){
    let start = 0 ;
    let end = arr.length -1 ; 
    while(start<end){
        let average = (arr[start]+arr[end])/2
        if( average === val){
            return true
        }
        if(average<val){
            start++
        }
        else{
            end--
        }
    }
    return false
 }

  averagePair([1,3,3,5,6,7,10,12,19],8)



/*
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

function isSubsequence(arr1,arr2) {
    let j =0
    for(let i = 0;i<arr2.length;i++){
       if(arr2[i] === arr1[j]){
        j++
       }
       if(j === arr1.length){
        return true
       }
    }
    return false
  }
  
  isSubsequence('hello', 'hoell w')

  /*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
  */
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}