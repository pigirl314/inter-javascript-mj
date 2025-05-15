function print(x) {
    console.log(x)
}

const numbers=[1,2,3]
const [a,b,c] = numbers
print(a)
print(b)
print(c)

const [d,e] = numbers
print([d,e])

const [f,,g] = numbers
print([f,g])

let person = {name:"Greg", age:65};

const { name, age } = person;

// const name = person.name
// const age = person.age

print(name)
print(age)

const { name: firstname, age: current_age } = person

// const firstname = person.name
// const current_age = person.age

print(firstname)

// Spread operators
const aa = [1, 2];
const bb = [3, 4];
const combined = [...aa, ...bb];
console.log(combined); // [1, 2, 3, 4]

const original = { x: 1, y: 2 };
const copy = { ...original, z:5}
console.log(copy)

const nums = [1,2,3,4]

const [head, ...tail] = nums

print(head)
print(tail)

function double(x) { return x+x; }

doubled = nums.map(double)
print(doubled)

function is_even(x) { return x % 2 === 0 }

print(nums.map(is_even))
print(nums.filter(is_even))

function sum(acc,x) {
    return acc + x;
}

print(nums.reduce(sum, 0))

nums.forEach(function(n, index, content) {
    console.log(n, index, content)
})

t = nums.map(function(n) {
    console.log(n)
})
print(t)

const numbers2 = [1, 2, 3, 4, 5];
const result = numbers2
  .filter(function(n) { return n % 2 !== 0; })
  .map(function(n) { return n * n; });

console.log(result); // [1, 9, 25]

// Which method would you use to compute the total of an array?
// A. map
// B. reduce
// C. filter
// D. join