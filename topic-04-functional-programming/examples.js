x = function(a) { return a+a }

// Pure Function: 

add = function(x,y) { return x + y }

petname = "bob"

sayHi = function(greeting) {
    return `${greeting},${petname}`
    petname = "Suzy"
}

double = function(x,y) {
    return Math.add(x,y)
}

// IMMUTABILITY

double_head_array = function(x) {
    const y = [...x]
    y[0] = y[0] + y[0]
    return y
}

x = [1,2,3]
z=double_head_array(x)
console.log(x)
console.log(z)

function repeat(operation, n) {
    for (let i = 0; i < n; i++) {
      operation();
    }
}


function sayHello() {
    console.log("Hi");
}

console.log("xx")

repeat(sayHello, 3);


const numbers = [1, 2, 3, 4, 5];
const result = numbers
  .filter(function(n) {
    return n % 2 !== 0; // keep odd
  })
  .map(function(n) {
    return n * n; // square them
  })
  .reduce(function(acc, val) {
    return acc + val; // sum
  }, 0);
console.log(result)