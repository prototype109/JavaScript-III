/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" keyword is bound to the forest which is whatever the root is of the environment being used.
* 2. "this" keyword is bound to whatever is on the left of the dot operator. It is implicitely known what "this" refers to.
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

// Principle 2

function Person(greet, name){
    this.greeting = this.greet;
    this.myName = this.name;
    this.sayHi = function(){
        console.log(`${this.greeting} ${this.myName}`);
    };
}

matilda.sayHi('Hi my name is', 'Matilda');
Fred.sayHi('Hello there', 'General Kenobi');
// code example for Implicit Binding

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding