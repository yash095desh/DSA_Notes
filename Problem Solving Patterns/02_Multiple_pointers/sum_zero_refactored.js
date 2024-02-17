

function sumZero(arr){

    let i = 0
    let j = arr.length - 1 
    while (i<j) {
        sum = arr[i] + arr[j]
        if(sum === 0){
            return [arr[i],arr[j]]
        }
        else if(sum<0){
            i++
        }
        else{
            j--
        }
       
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))