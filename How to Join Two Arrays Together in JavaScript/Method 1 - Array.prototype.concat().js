// Joining Two Strings with .concat()
const stringOne = "🎅🤶"
const stringTwo = "👩‍🚀👨‍🚀"

// Use .concat() to join the strings:
console.log(stringOne.concat(stringTwo))
// Output: 🎅🤶👩‍🚀👨‍🚀

// .concat() won't change the string:
console.log(stringOne) // 🎅🤶
console.log(stringTwo) // 👩‍🚀👨‍🚀

// We can use the plus sign + instead:
console.log(stringOne + stringTwo)
// Output: 🎅🤶👩‍🚀👨‍🚀
// The + won't change either string.

// Joining Two Arrays with .concat()
const arrayOne = ["🎅", "🤶"]
const arrayTwo = ["👩‍🚀", "👨‍🚀"]

// Use .concat() to join the arrays:
console.log(arrayOne.concat(arrayTwo))
// Output: ["🎅", "🤶", "👩‍🚀", "👨‍🚀"]

// .concat() doesn't change either array:
console.log(arrayOne) // ["🎅", "🤶"]
console.log(arrayTwo) // ["👩‍🚀", "👨‍🚀"]
