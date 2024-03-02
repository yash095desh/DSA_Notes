
// Introduction To DSA

/*
    What do they do?
    -Data Structures are the Collections of values the relationship among them and the functions or 
     operations that can be applied to the data

*/

/*
 # Why So Many ? 
    different data structures excel at different things .Some are highly specialized ,
    while others (like arrays) are more generally used

*/

/*
    # Why Should care 
        - The more you spend as a devloper ,the more likely you'll use need to use one 
        one of these data Structures

        - You're already worked with many of them unkowingly!
        - And also for The INTERVIEWS
*/

//ES2015 CLASS SYNTAX

//Objectives
/*
    - Explain what a class is 
    -to Understand how javascript implemnts the idea of classes
    - Define terms like abstraction ,encapsulation , and polymorphism 
    - use ES2015 classes to implement data structues
*/


/*
 # What is a Class ? 
    - A Blueprint for creating objects with pre-define properties
*/

/*
# Why do you need to learn this ? 
    - to implement data structues as classes
*/

// Syntax 

// class Student {
//     constructor (fName,lName){
//         this.firstName = fName,
//         this.lastName = lName
//     }
// }


/*
    The Method to create new object must be called 
    constructor
    The class Keyword creates a constant ,so you 
    can not redefine it .Watch out for syntax as well!

 */

    // Creating objects from classes
    /* We use new Keyword to define new object from classes */
    // let firstStudent = new Student("Yash","Deshmukh")
    // let SecondStudent = new Student("Neeraj","Chouhan")

    // console.log(firstStudent.firstName , firstStudent.lastName)
    // console.log(SecondStudent.firstName,SecondStudent.lastName)

    // 

    // Instance Methods 

   /*
    class Student {
        constructor(fName,lName){
            this.firstName = fName,
            this.lastName = lName
        }
        fullName(){
            return `Your Full Name is ${this.firstName} ${this.lastName}`
        }
    }

    let firstStudent = new Student("Yash","Deshmukh")
    console.log(firstStudent.fullName())
   
   */

    // Class methods

    class Student {
        constructor(fName,lName) { 
            this.firstName = fName
            this.lastName = lName
        }
        static enrollStudent (...students){
            // may be send an email
        }
    }
    let firstStudent = new Student('Yash',"deshmukh")
    let SecondStudent = new Student ('Neeraj','Walia')

    console.log(Student.enrollStudent(firstStudent,SecondStudent))

    // One gotcha with 'this' KeyWord
        /*
        Inside all of our Instances methods and constructor
        the keyword 'this' refers to the object created from that class
        (also knows as an instance)
        */


    //Recap 

    /*
        -Classes are blueprints that when created make objects known as instances
        -Classes are created with the new keyword
        - the Constructor function is a special function that gets run when the 
        class is initialized
        - Instance Methods can be added to classes similar to methods in objects
        -Class method can be added using the static Keyword
    */