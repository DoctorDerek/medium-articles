const myObject = { "hello Bill": "👋" }
myObject.helloWorld = "🌎"
console.table(myObject)
// (index)    Value
// hello Bill "👋"
// helloWorld "🌎"
try {
  // console.log(myObject.hello Bill)
} catch (e) {
  console.log(e)
} // SyntaxError: Unexpected identifier
console.log(myObject.hello_Bill) // undefined
console.log(myObject["hello Bill"]) // 👋
const keyAsVariable = "hello Bill"
console.log(myObject[keyAsVariable]) // 👋
console.log(myObject.keyAsVariable) // undefined
console.log(myObject.helloWorld) // 🌎
console.log(myObject["helloWorld"]) // 🌎
