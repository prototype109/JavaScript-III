/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. "this" keyword is bound to the forest which is whatever the root is of the environment being used.
* 2. "this" keyword is bound to whatever is on the left of the dot operator. It is implicitely known what "this" refers to.
* 3. "this" keyword is bound to the variable that it is assigned to with the "new" keyword creating an instance of the class.
* 4. "this" keyword can be bound to anything you want it to as long as you use obj.call()/obj.apply()/obj.bind() on it.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this);

function Person(newPerson){
    this.greeting = newPerson.greeting;
    this.myName = newPerson.name;
}

Person.prototype.sayHi = function(){
    console.log(`${this.greeting} ${this.myName}`);
};

// Principle 2
// code example for Implicit Binding
Matilda.sayHi();
Fred.sayHi();

// Principle 3

// code example for New Binding
const Matilda = new Person({
    greeting: 'Hi my name is',
    name: 'Matilda'
})

const Fred = new Person({
    greeting: 'Hello there',
    name: 'General Kenobi'
})

// Principle 4

function Alien(attr){
    Person.call(this, attr); // code example for Explicit Binding
    this.species = attr.species;
    this.galaxy = attr.galaxy;
    this.planet = attr.planet;
    this.transformState = false;
}

Alien.prototype = Object.create(Person.prototype);

Alien.prototype.transform = function(){
    if(this.transformState)
        return false;
    else
        return true;
};

const tracoris = new Alien({
    name: 'Tracoris',
    greeting: 'Zip zop zippity',
    species: 'Gorian',
    galaxy: 'Sorian Circa 9',
    planet: 'Vorex'
});

tracoris.transform();
tracoris.sayHi();