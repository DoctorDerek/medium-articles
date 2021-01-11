// Hyphens, like spaces, need quotes:
const myO = { "hello-Bill": "hi" }
console.log(myO["hello-Bill"]) // hi

// const myO = {hello Bill: "hi"}
// SyntaxError: Unexpected identifier

// const myO = {hello-Bill: "hi"}
// SyntaxError: Unexpected token '-'

// console.log(myO.hello-Bill)
// SyntaxError: Unexpected token '-'

// Underscores work without problems:
const myObj = { hello_Bill: "Yo!" }
console.log(myObj.hello_Bill) // Yo!
