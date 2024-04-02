/*
    # Bubble Sort : 
            A Sorting Algorithem where the longest values bubbles up to the top 
    [ 5 , 3 , 4 , 1 , 2 ]
      ^   ^
    [ 3 , 5 , 4 , 1 , 2 ]
          ^   ^ 
    [ 3 , 4 , 5 , 1 , 2]
              ^   ^     
    [ 3 , 4 , 1 , 5 , 2]
                  ^   ^ 
    [ 3 , 4 , 1 , 2 , 5]
                        ... this steps repeated until array gets sorted
    
*/

/*
    # Before we sort We must Swap ? 

*/

// ES5

function swap1 (arr,idx1,idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp; 
}

// ES2015

const swap2 = (arr,idx1,idx2)=>{
    [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
}

/*
    # Bubble Sort Psudocode : 
    - Start looping with a variable i from the end of array towards the beginning
    - Start an inner loop with a variable called j from the beginning until j < i-1
    - If arr[j] is greater than arr[j+1] swap those two values
    - Return the sorted array 

*/

function bubbleSort(arr){
    for (let i = arr.length; i > 0 ; i--) {
        for(let j = 0 ; j < i - 1 ; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp 
            }
        }
    }
    return arr
}

console.log(bubbleSort([ 5 , 3 , 4 , 1 , 2,-1 ]))