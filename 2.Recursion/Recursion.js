/*Objectives */
/*
 - define and how it can be used
 - understand the two essential components of recursion
 - Visulize the Call Stack to better debug and understand recursive functions 
 -helper method recursion and pure recusion 
*/

/*RECURSION :- 
                A process (a function in our case ) that calls itself                

*/
/*
CALL STACK :- 
            In all the program languages there is a build in data structures that manages 
            what happen when functions are invoked
            it is a data structure we will discuss it later section 

            functioning of callStack :-
           - Any time a function is invoked its is placed (pushed) on the 
            top of the call stack
            -when javascript sees the return keyword or when function ends the
            compiler will remove (pop) 

*/
/*
    How the Recursive function works?
    Invoke the same function with a different input until you reach your base case
    BaseCase:-
                The condition when the recursion ends 
                (This is an important concept to understand !)
    
    * Two essential parts of Base Case -
            1. Base Case
            2. Different Input

*/

/* EXAMPLES*/

// Example 1 

// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

// example 2
// Iterative Version
function factorial(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

// Recursive Version
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}



/*
    Where the things gone wrong :-
    - No base Case
    - Forgetting to return or returning wrong things
    - Stack Overflow
*/

/*
Helper Method Recursion :
                        Helper Method Recursion helps to reduce the complexity of recursive function 
                        basically in this we runs recursive function inside another function 
                        it helps in function which deals with array or somethig like storing output 

*/
//example 
function collectOddValues(arr){
    
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])
/*
Pure Recursion : 
                means only recursing function provides the required output in which no need of helper function 
                required or genrate output without using helper function
                and sometimes it increses the complexity of function also

                * Points to note while using pure recursing function
                -For arrays use method like slice ,spread operator and concat that makes copies of 
                arrays so you do not mutate them
                - Remember that strings are immutable so you will need to use methods like slice,substr,substing 
                to make copies of string 
                - To make copies of object use Object.assign or the spread operaator
*/
//example
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
              