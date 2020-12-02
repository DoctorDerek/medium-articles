const myObject2 = { hello: "🌞" }
const objectsArray2 = [{ hello: "🌞" }, { hello: "🌞" }]
const objectsJSON = objectsArray2.map((object) => JSON.stringify(object))
const objectsSet2 = new Set(objectsJSON)
const uniqueObjectsArray2 = Array.from(objectsSet2).map((object) =>
  JSON.parse(object)
)
// Equivalent to: (using the spread operator)
// const uniqueObjectsArray = [...objectsSet]

console.log(objectsArray2)
// Output: [ { hello: "🌞" }, { hello: "🌞" } ]

console.log(uniqueObjectsArray2)
// Output: [ { hello: "🌞" } ]

// One-liner:
console.log([...new Set([myObject2, myObject2])])
// Output: [ { hello: "🌞" } ]

// Compare to different objects with same contents:
console.log([...new Set([{ id: 1 }, { id: 1 }])])
// Output: [ { id: 1 }, { id: 1 } ]
