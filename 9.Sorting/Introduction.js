/*
    -> Introduction to sorting 
        - What is Sorting
        Sorting is the process of rearranging the items in a collection ( eg  an array ) so that the 
        items are in some kind of order

        example : 
        1) Sorting numbers from smallest to largest 
        2) Sorting names alphabatically
        3) Sorting movies based on realese year
        4) Sorting movie based on revenue

        - Why do we learn this ? 
        1) Sorting is an incredibly common task ,so it's good to know how it works
        2) There are many different ways to sort things and different techniques have their 
            own advantages and disadvantages
        
        -Objectives

        a) Implement bubble sort 
        b) Implement selection sort 
        c) Implement insertion sort 
        d) understand why it is important to learn these simpler sorting algorithems

*/

/*
    Built in Javascript Sorting 
    - Javascript has a sort method 
    but doesn't always work the way you expect 
    Case 1 : 
    Input - ["Steele","Colt","Data Structure","Algorithem"].sort()
    Output - ["Algorithem","Colt","Data Structure","Steele"]  :)

    but for Numbers - 
    Case 2 : 
    Input - [6,4,15,10].sort()
    Output - [10,15,4,6]   :( 
*/

let arr = ["Steele","Colt","Data Structures","Algorithms"]
console.log(arr.sort())
// Output arr = [ 'Algorithms', 'Colt', 'Data Structures', 'Steele' ]

let arr2 = [6,4,15,10 ]
arr2.sort()

// Output arr2 = [ 10, 15, 4, 6 ]


/*

    This is because the default sort order works  according to string unicode points

    * Telling javascript how to sort : 
    a) The build in sort method accept and optional comparator function
    b) You can use this comparator function to tell javascript how you want it to sort 
    c) The comparator looks at pairs of element (a and b) determines their sort order based on the 
        return value
        - If it returns a  negative number , a should come before b
        - If it returns a positive number , a should come after b
        - If it returns 0 a and b are the same as far as the sort is concerned
*/

// sorting arr2 according to asecending order
arr2.sort((a,b)=>{
    return a-b
})
console.log(arr2)
// sorting according to descending order

arr2.sort((a,b)=>{
    return b - a 
})
console.log(arr2)

// Sorting arr according to length of string

arr.sort((a,b)=>{
    return a.length - b.length
})
console.log(arr)