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

// Creating own Queue from Scratch

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    
}
/*
   @ Methods Pseudocode
   1) Enqueue :
        a) This function Should accept some value
        b)Create a new node using that value passed to the function 
        c) If there are no nodes in the queue set the node to be first and last property of the Queue
        d)Otherwise set the next property on the current last to be that newNode,and then set the last 
        property to be that node
        e)Increment the size and return it 
    
    2)Dequeue :
        a) If there is no first property ,just return null
        b) Store the first property in a variable
        c) See if the first is the same as the last (check if there is only 1 node) if so,set the first and last 
        to be null
        d)If there is more than 1 node,set the first property to be the next property of the first 
        e)Decrement the size by 1
        f)Return the value of the node dequeued 

 */