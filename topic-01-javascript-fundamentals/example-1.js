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