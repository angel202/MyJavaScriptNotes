Creating and using objects 

How to write an object 
const object = {
  value: "NAMES", 
  num: 4}  //to call them simply do this: 
  obj.value or obj.num
// You can also do it this way for multiple entries 
const object (name, number) { 
  this.name = name
  this.number = number
}
//You would call the new function like this 
const obj = new object ('Angel', 8) 
console.log(obj.name) // Should display my name Angel 

// You can also add a function inside the obj for EX 
const object (name, number) { 
  this.name = name
  this.number = number
  this.PrintName = function() {
    console.log(name)
}
//You would call the new function like this 
const obj = new object ('Angel', 8) 
console.log(obj.name) // Should display my name Angel 
obj.PrintName() //It should display the name as well using the function in the object 

Describe what a prototype is and how it can be used.
  // Prototype is another obj that the original obj inherits from. The original obj has access to all of its prototype's methods and properties
  //You can check an obj prototype using Object.getPrototypeOf()
  //Any properties or methods defined will be avaialable for the created object. 
  function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`)
}

function Player(name, marker) {
  this.name = name
  this.marker = marker
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`)
}

// Object.getPrototypeOf(Player.prototype) should
// return the value of "Person.prototype" instead
// of "Object.prototype"
Object.getPrototypeOf(Player.prototype) // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype)
Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player1 = new Player('steve', 'X')
const player2 = new Player('also steve', 'O')

player1.sayName() // Hello, I'm steve!
player2.sayName() // Hello, I'm also steve!

player1.getMarker() // My marker is 'X'
player2.getMarker() // My marker is 'O'

Explain prototypal inheritance:
//Defining properties and functions in the prototype saves memory. It allows for an object created to inherit from that prototype.
Explain what Object.create does.
  //It uses an existing object as a prototype of the newly created object.
  const player =  {
    print: function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`)
    }
}
const myPlayer = Object.create(player); //myPlayer inherits from Player Object 
myPlayer.name = 'Angel'; 
myPlayer.age = 20; 

myPlayer.print(); // Displays my message in player with the name angel and age 20 
  
Explain what the this keyword is.
//It is used as a reference. It can be used inside an obj to refer to an obj 
  // Alone this will refer to a global obj. In a function it may also refer to a global obj. 
