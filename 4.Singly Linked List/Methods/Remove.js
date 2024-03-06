// REMOVE METHOD
/*
 : Removing a node from a linked List  at a specific position 

 # Pseudocode 
 1) If the index is less than zero or greater than the length ,return undefined 
 2) If the index is the same as the length-1 ,pop 
 3) If the index is 0 ,shift 
 4) Otherwise , using the get method , access the node at the index -1 
 5) Set the next property on that node to be the next of the next node 
 6) Decrement the length 
 7) Return the value of the node removed  
*/