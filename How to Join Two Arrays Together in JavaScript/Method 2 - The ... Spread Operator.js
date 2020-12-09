// Joining Two Arrays with ... Spread
const array1 = ["🎅", "🤶"]
const array2 = ["👩‍🚀", "👨‍🚀"]

// Use ... spread to join the arrays:
console.log([...array1, ...array2])

// Spread won't change either array:
console.log(array1)
console.log(array2)
