/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
*/

function reverse(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return reverse(arr.slice(1)) + arr[0];
}

reverse("awesome");

/*
isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

*/

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1])
    return isPalindrome(str.slice(1, str.length - 1));

  return false;
}

isPalindrome("awesome");

/*
  someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
// SAMPLE INPUT / OUTPUT

const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

  
  */
const isOdd = val => val % 2 !== 0;

function someRecursive(arr,callback){
  if(arr.length === 0){
    return false
  }
  if(callback(arr[0])){
    console.log(arr)
    return true
  }
  return someRecursive(arr.slice(1),callback)
}

someRecursive([4,6,8], isOdd)
/*

flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

*/

function flatten(arr){
  let newarr = []
 for(let i = 0;i<arr.length;i++){
  if(Array.isArray(arr[i])){
    newarr = newarr.concat(flatten(arr[i]))
  }else{
    newarr.push(arr[i])
  }
 }
 return newarr
}

flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])

/*
capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

function capitalizeFirst (arr) {
let newarr =[]
if(arr.length === 0){
  return newarr
}else{
  let word = arr[0]
  let fletter = word.substr(0,1)
  fletter = fletter.toUpperCase()
  word = word.slice(1)
  newarr.push(fletter.concat(word))
  arr = arr.slice(1)
}
  return newarr.concat(capitalizeFirst(arr))
}
capitalizeFirst(['car','taco','banana'])

/*
nestedEvenSum
Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

*/

function nestedEvenSum (obj) {

  let arr = Object.values(obj)
  let value = 0
  for(let i =0 ;i<arr.length;i++){
    if((typeof arr[i]) == "object"){
         value  = value + nestedEvenSum(arr[i])
    }
    else{
      if(arr[i]%2 == 0){
          value = value + arr[i]
      }
    }
  }
  return value
}
var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
}

nestedEvenSum(obj2)


/*
capitalizeWords
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

function capitalizeWords (arr) {
    let  newarr = []
    if(arr.length === 0){
      return newarr
    }else{
     let word = arr[0].toUpperCase()
     newarr.push(word)
     return newarr.concat(capitalizeWords(arr.slice(1)))
    }
}

capitalizeWords(['i', 'am', 'learning', 'recursion'])

/*
stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

*/