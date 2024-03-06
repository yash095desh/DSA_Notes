// INSERT NODE METHOD
/*
Insert : 
    Adding a node to the linked list at a specific position 

Pseudocode : 
 1) If the index is less than 0 or greater than list length return null 
 2) If the index is 0 , unshift new Node to the start of the list 
 3) If the index is 0 , push a new node to the end of the list 
 4) Otherwise using get method get the node at the index -1 
 5)set the next property on that node to the new node
 4) Set the next prooperty on the new node to be the previous next 
 7) Increment the length
 8) return true
*/