const myArray = [2, 1, "🎊", "✨", true, false, false, true, "✨", "🎊", 1, 2]
const mySet = new Set(myArray)
const uniqueValues = Array.from(mySet)
console.log(uniqueValues)
// Output: Array(6) [2, 1, "🎊", "✨", true, false]

// Using the ... spread operator is the same as Array.from():
console.log([...mySet])
// Output: Array(6) [2, 1, "🎊", "✨", true, false]

const duplicateCount = myArray.length - uniqueValues.length
console.log(`${duplicateCount} duplicates removed`)
// Output: 7 duplicates removed
