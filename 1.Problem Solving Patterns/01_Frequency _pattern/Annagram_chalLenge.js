
function validAnnagram (str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    
    let frequencyCounter1={}
    let frequencyCounter2={}
    for(val of str1){
       frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(val of str2){
       frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1)  
    console.log(frequencyCounter2)  
    for(val in frequencyCounter1){
       if(!(val in frequencyCounter2)){
        return false
       }
       if(frequencyCounter1[val] !== frequencyCounter2[val]){
        return false
       }
    }
    return true
}

console.log(validAnnagram('tat','tta'))