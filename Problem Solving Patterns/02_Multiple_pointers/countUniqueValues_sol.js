
function countUniqueValues(arr){
    let i= 0
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
        
    }
    return i+1 
}

console.log(countUniqueValues([1,2,4,4,5,7,7,12,13]))