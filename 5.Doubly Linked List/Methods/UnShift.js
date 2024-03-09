// Unshift Method

/*
    Adding a new node to the beginnig of the Doubly Linked list 

    #pseudocode:
    1)Create a New Node with the value passed in the function 
    2)If the length of the list is 0
        - Set the head to the newNode 
        - Set tail to the new Node
    3) Otherwise 
        - Set the prev property of the head to be the newNode 
        - Set the next property of the newNode to be the head 
        -update the head of the list to newNode 
    4) Increment the length
    5) Return the List 
*/

