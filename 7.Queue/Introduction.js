// Queues 

/*
    Objectives
        - Define What a queue is 
        - Understand use Cases for queues
        - Implement operations on a queue data
    
    * What is a Queue ? 
        => Queue is a FIFO Data Structure 
            FIFO(first in first out)
            Opposite of Stack In Queue first Element which is inserted removed first 
            
    * Where we have seen before ? 
            Queue are everywhere ! Think about the last time you waited in a line

            # How used in programming 
                -Background Tasks 
                -Uploading resources
                -Printing /Task processing
    
    * Creating Queue from Array 
                Using Array 
                    -We Can use two combination for insertion and removal in array 
                    1} Using Push && Shift Method
                    2} Using Unshift && Pop Method 
    
        But Creating Queue from Array is Easy but not a good approch 
         because 
            1) In First Combination (Push,shift) every time you remove elements using shift the indexes are rearranged
            2) Same In Second Combination (Unshift,Pop) every time you insert elements using Unshift the indexes are rearranged 
        
        So it is good to Create own Queue Structure just like linked list 
*/