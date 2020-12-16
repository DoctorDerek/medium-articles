// Typical object declared with object literal notation
const myObject = { zap: "⚡" }
myObject.boom = "💣"
// ES5 version using for...in loop
for (const key in myObject) {
  if (myObject.hasOwnProperty(key)) {
    console.log(`myObject["${key}"] is ${myObject[key]}`)
  }
}
// Output:
// myObject["zap"] is ⚡
// myObject["boom"] is 💣

// ES6 version using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
  console.log(`myObject["${key}"] is ${value}`)
}
// Output:
// myObject["zap"] is ⚡
// myObject["boom"] is 💣

// Compare to using an ES6 Map object:
const myOrderedMap = new Map()
myOrderedMap.set("zap", "⚡")
myOrderedMap.set("boom", "💣")
for (const [key, value] of myOrderedMap) {
  console.log(`myOrderedMap.get("${key}") is ${value}`)
}
// Output:
// myOrderedMap.get("zap") is ⚡
// myOrderedMap.get("boom") is 💣
