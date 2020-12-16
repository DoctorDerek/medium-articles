// The typeof null is "object" in JavaScript.
console.log(typeof null === "object") // true

// Let's look at type checking a Date object.
const date = new Date()
console.log(typeof date) // "object"
console.log(Object.prototype.toString.call(date)) // [object Date]
console.log(date.constructor) // function Date()
console.log(date.constructor.name) // "Date"
console.log(date instanceof Date) // true
console.log(Object.getPrototypeOf(date)) // Date.prototype {...}

// The type checking behavior changes if we pass an existing object
// to Object.create(), creating a new object with that prototype.
const weirdDate = Object.create(date)
console.log(typeof weirdDate) // "object"
console.log(Object.prototype.toString.call(weirdDate)) // [object Object]
console.log(weirdDate.constructor) // function Date()
console.log(weirdDate.constructor.name) // "Date"
console.log(weirdDate instanceof Date) // true
console.log(Object.getPrototypeOf(weirdDate))
// Output: Date Mon Dec 14 2020 19:54:23 GMT-0500 (Eastern Standard Time)
console.log(Object.getPrototypeOf(weirdDate) === date) // true

// It is also possible to create a truly empty object with null prototype.
const objectWithoutPrototype = Object.create(null)
console.log(typeof objectWithoutPrototype) // "object"
console.log(objectWithoutPrototype.constructor) // undefined
console.log(objectWithoutPrototype instanceof Object) // false
console.log(Object.getPrototypeOf(objectWithoutPrototype)) // null
