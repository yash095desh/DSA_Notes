// Linear Search 
/*
 Given an array the simplest way to search for a value is to look at every element in the array and check its the 
 value wanted

 # Javascript has Search 
  there are many different search methods on arrays in Javascript 
  . indexOf()
  . includes()
  . find()
  . findIndex()

  But how do those functions work ? 

 #  lets search for 12 ! 

  [ 5 , 8 , 100 , 12 , 3 , 12 ]
                   ^
 # pseudocode for linear Search 
 a) This function accepts an array and a value 
 b) Loop through the array and check if the current array element is equal to the value 
 c) if it , return the  index at which the element is found 
 d) if the value is never found , return -1
*/
function linearSearch(arr,value){
    for(let index in arr){
        if(arr[index] === value ){ 
            return index
        }
    }
    return -1
}
console.log(linearSearch([5,6,,12,34],12))

/*
 # Big O of linear Search 
 a) Best Case - O(1): element at index 1
 b)Average Case - O(n) : element is at middle of array 
 c) Worst Case - O(n) : element is at last of array
*/