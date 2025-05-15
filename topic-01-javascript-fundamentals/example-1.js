x = 42;

function testScope() {
  var PI = 3.14159;
  x = [12,5];

  if (true) {
    //x = 2;
    console.log(x); // ?
  }
  console.log(x); // ?
}

testScope();
console.log(x)

function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

mycounter = makeCounter()

function makeMultiplier(factor) {
  return function(x) {
    return x * factor;
  };
}

triple = makeMultiplier(3)

function badPractice() {
  accidentalGlobal = 42; // Becomes a global variable
  console.log(accidentalGlobal)
}



