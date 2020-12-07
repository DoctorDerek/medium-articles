// We can get Set to compare objects' key-value pairs using JSON
const duplicates = [{ hello: "🌞" }, { hello: "🌞" }]
const objectsJSON = duplicates.map((object) => JSON.stringify(object))
const objectsJSONSet = new Set(objectsJSON)
const uniqueJSONArray = Array.from(objectsJSONSet)
// Equivalent to: (using the spread operator)
// const uniqueJSONArray = [...objectsJSONSet]
const uniqueObjectsByContent = uniqueJSONArray.map((string) =>
  JSON.parse(string)
)

console.log(duplicates)
// Output: [ { hello: "🌞" }, { hello: "🌞" } ]
console.log(uniqueObjectsByContent)
// Output: [ { hello: "🌞" } ]

// Compare the behavior of the JSON-stringified objects with the
// default behavior of Set, which compares object references:
console.log([...new Set(duplicates)])
// Output: [ { hello: "🌞" }, { hello: "🌞" } ]

// One-liner to compare objects by content (their key-value pairs):
console.log(
  Array.from(
    new Set(duplicates.map((object) => JSON.stringify(object)))
  ).map((string) => JSON.parse(string))
)
// Output: [ { hello: "🌞" } ]
