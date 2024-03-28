// Binary Search 
/*
    Bianry search : 
        - Binary search is a much faster form of a search 
        - Rather than eliminating one elemnet at a time you can eliminate half of the remaining elements at a time
        - Binary search only works on a sorted arrays!

    pseudocode: 
    - this function should accept a sorted array and a value 
    - Create a left pointer at the start of the array and at the right of the array 
    - While the left pointer comes before the right 
        a) Create a pointer in the middle 
        b) If you find the value you want , return the index
        c) If the value is too small move the pointer up 
        d) If the values is too large,move the right pointer down 
    - If you not find the required values return 1
*/
function binarySearch(arr,value){
    let left = 0 
    let right = arr.length -1 
    let middle ; 
    while(left<right-1 ){
        middle = Math.round((left+right)/2)
        if(arr[middle] === value)return middle
        else if(arr[right] === value)return right
        else if(arr[middle]>value){
            right = middle 
        }
        else if(arr[middle]<value){
            left = middle 
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5],5))
                                                                                                   