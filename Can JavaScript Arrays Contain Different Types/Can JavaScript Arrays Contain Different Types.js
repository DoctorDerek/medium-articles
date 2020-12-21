// With no type checks, the code seems to work fine.
const user1 = { id: 1, name: "Erowyn" }
const user2 = { id: 2, name: "Lavendula" }
const user3 = { id: 3, name: "Fralia" }
const userArray = [user1, user2, user3]
for (const user of userArray) {
  console.log(`${user.id}: ${user.name}`)
}
// Output:
// 1: Erowyn
// 2: Lavendula
// 3: Fralia

// But if one object is a number, we have an issue.
userArray[1] = 2 // Swap user2 for the number 2.
for (const user of userArray) {
  console.log(`${user.id}: ${user.name}`)
}
// Output:
// 1: Erowyn
// undefined: undefined
// 3: Fralia

// You can get a TypeError with null or undefined.
userArray[1] = null // Swap user2 for the value null.
try {
  for (const user of userArray) {
    console.log(`${user.id}: ${user.name}`)
  }
} catch (e) {
  console.log(e)
}
// Output:
// 1: Erowyn
// TypeError: Cannot read property 'id' of null
// (We never reach user3 in this case.)

// Using some type checks makes the code better.
for (const user of userArray) {
  if (typeof user === "object" && user !== null) {
    // Make sure we have a JavaScript object.
    console.log(`${user.id} ${user.name}`)
    // We could check to see if we have an .id using &&:
    // user.id && console.log(`${user.id} ${user.name}`)
    // && (logical AND) is the "short-circuit" operator.
  }
}
