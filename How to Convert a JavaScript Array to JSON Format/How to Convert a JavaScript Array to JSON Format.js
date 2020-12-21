// To convert the entire array to JSON:
const myArray = ["💝", 5, true]
console.log(myArray)
// Output: Array(3) [ "💝", 5, true ]

const myJSONString = JSON.stringify(myArray)
console.log(myJSONString)
// Output: ["💝",5,true]

const parsedArray = JSON.parse(myJSONString)
console.log(parsedArray)
// Output: Array(3) [ "💝", 5, true ]

// To convert each item in the array to JSON:
const strings = myArray.map((o) => JSON.stringify(o))
// This code maps each object o to its string.
// We still have an array, now of JSON strings
console.log(strings)
// Output: Array(3) [ "\"💝\"", "5", "true" ]

// You can use .map() to convert back from JSON:
const newArray = strings.map((s) => JSON.parse(s))
// This code maps each string s to its original.
console.log(newArray)
// Output: Array(3) [ "💝", 5, true ]
