console.log("ES6 Feature Demo")

// s = f"the sum of {x} and {y} is {x+y}"  <-- python "f-string"

// "<html><body>Hello {{name}}!</body></html>"

// name = "Greg"
// greeting = `Hello, ${name}!`
// console.log(greeting)

// greeting = "Hello,  + name" + "..." + "!"
// console.log(greeting)

// const a = 5, b = 10;
// console.log("The sum is: " + (a + b));

function sayHi() {
    console.log("Hi!");
    return function() {console.log("Yo!")}
}

// function x(a,b) {foo}

// x = function(a,b) {foo}

sayHi();
sayHi.message = "Hello, there!"
console.log(sayHi.message)

x = sayHi

x();

function callTwice(func) {
    func();
    func();
}

callTwice(sayHi());

z = sayHi();
z();

function add(a,b) {
    return a+b;
}

console.log(add(3,4));

const sub1 = (a,b) => a - b;

const sub = (a,b) => {
    console.log("subtracting")
    return a - b;
}

console.log(sub(7,4));

const double = x => x + x;

console.log(double(6))

// "this" <--- refers to the calling object

const dog = {
    name: "Fido",
    speak() {
      console.log(this.name); // 'this' refers to 'dog'
    }
  };
dog.speak(); // Fido

// in an object when calling a method, "this" refers to the _object_. 

// In a standalone function: 


petname = "Dorothy";

// function speak() {
//     console.log(this.petname);
//     petname = "Suzy";
//     function speak2() {
//         console.log(this.petname);
//     }
//     speak2();
//   }
// speak(); // 'this' is the global object (or undefined in strict mode)
  
function speak3() {
    console.log(this.petname);
    // function speak2() {
    //     console.log(this.petname);
    // }
    let petname = "Suzy";
    speak4 = () => {
        console.log(this.petname)
        console.log(petname)
    }
    speak4();
  }
speak3(); // 'this' is the global object (or undefined in strict mode)

// ARROW FUNCTIONS DO NOT REDEFINE "this"

console.log(petname)

function Timer() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++;
    }, 1000);
  }

const myTimer = new Timer();

//Without arrow functions:

function Timer() {
    this.seconds = 0;
    const self = this;
    setInterval(function() {
      self.seconds++;
    }, 1000);
  }
  
  // Question: 

    //   Multiple-Choice:

    // What is one key difference between arrow functions and regular functions?
    // A. Arrow functions can only return strings.
    // B. Arrow functions require `bind` to access `this`.
    // C. Arrow functions inherit `this` from the surrounding scope.
    // D. Arrow functions are deprecated.

class MathTools {
    static double(x) {
        return x * 2;
    }

    square(x) {
        return x * x;
    }
}
      
console.log(MathTools.double(4))

const tool = new MathTools();
console.log(tool.square(4))

// Identify which of these should be static:

// A. A method to calculate the average of two numbers.
// B. A method that logs the object's internal state.


function greet(name = "neighbor") {
    console.log(`Hello, ${name}!`)
}

greet("Santa");
greet("Mrs. Claus");

greet();


const x = 10;
const obj = { x }; // shorthand for { x: x }
console.log(obj); // { x: 10 }

const math = {
    add(a, b) {
      return a + b;
    }
  };