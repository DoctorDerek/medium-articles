const object = { "🔑key🔑": "💸value💸" }
console.log(typeof object) // "object"
console.log(object !== null) // true
console.log(object != null) // true

console.log(typeof null) // "object"
console.log(null !== null) // false
console.log(null != null) // false

console.log(typeof undefined) // "undefined"
console.log(undefined !== null) // true
console.log(undefined != null) // false

// To make sure you have an object, you also have to check for null:
console.log(typeof object === "object" && object !== null) // true

// Checking for undefined with != null or !== undefined is unnecessary:
console.log(typeof object === "object" && object != null) // true
console.log(
  typeof object === "object" && object !== null && object !== undefined
) // true
// These are unnecessary because the typeof undefined is "undefined".

const object2 = { "🔑key🔑": "💸value💸" }
// You can write the object / null check as a simple function, isObject:
const isObject = (value) => typeof value === "object" && value !== null
console.log(isObject(object2)) // true
console.log(isObject(null)) // false
console.log(isObject(undefined)) // false
console.log(isObject(37)) // false

// You can use the && short-circuit operator as an alternative to if:
if (isObject(object2)) {
  console.log(object2["🔑key🔑"]) // "💸value💸"
}
isObject(object2) && console.log(object2["🔑key🔑"]) // "💸value💸"
isObject(null) && console.log(null["🔑key🔑"]) // (No output)
