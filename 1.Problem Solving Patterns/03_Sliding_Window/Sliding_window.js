/*
Sliding Window Pattern :-
                            This pattern involves creating a window can either be an array or number from one 
                            one position to another 
                            Dependinig on a certain condition ,the window either increases or closes
                            (and a new window is created)
                            * Very Useful for Keeping track of a subsset of data in a array string etc . 

*/
/*
Question : 
            Write a Function called maxSubarraySum which accepts an array of integers and a number called n.
            The function Should Calculate the maximum sum of  n consecutive elements in the array

            maxSubarraySum([1,2,5,2,8,1,5],2) // 10
            maxSubarraySum([1,2,5,2,8,1,5],4) // 17
            maxSubarraySum([4,2,1,6],1) // 6
            maxSubarraySum([4,2,1,6,2],4) // 13
            maxSubarraySum([],4) // null

*/