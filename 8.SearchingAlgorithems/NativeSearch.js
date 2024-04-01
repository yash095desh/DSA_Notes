/*
* Native String search : 
                    - Suppose you want to count the number of times a smaller string appears in  a longer string 
                    - A straight forwards approach involves checking pairs of characters individualy 
*/

/*
    # Pseudocode : 
    1) Loop over the longer string
    2) Loop over the shorter string 
    3) If the characters dont match break out the inner loop 
    4) If the characters do match keep going 
    5) If you complete the inner loop and find a match increment the count of matches 
    6) Return the count 
*/


function nativeSearch(long,short){
    let count = 0
    for(let i = 0 ; i<long.length;i++){
        for(let j = 0; j<short.length;j++){
            if(long[i+j]!==short[j])break;
            if(j === short.length -1 ) count++
        }
    }
    return count
}
console.log(nativeSearch("lorie loled","lol"))