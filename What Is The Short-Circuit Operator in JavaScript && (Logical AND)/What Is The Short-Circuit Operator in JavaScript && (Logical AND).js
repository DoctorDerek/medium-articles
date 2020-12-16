// Using && will prevent nonsense code from being executed.
false && console.log(NoNsEnSe_CoDE) // nothing happens

// You'll frequently see && used for type-checking.
const bananas = "🍌🍌🍌🍌🍌"
typeof bananas === "string" && console.log(bananas) // 🍌🍌🍌🍌🍌

// For example, you might be expecting an array, not a string.
Array.isArray(bananas) && bananas.push("🍌") // nothing happens

// Using an in-line && operator is the same as an if statement.
if (bananas && bananas.length && bananas.length > 1) {
  console.log(bananas) // 🍌🍌🍌🍌🍌
}
bananas && bananas.length && bananas.length > 1 && console.log(bananas)
// Output: 🍌🍌🍌🍌🍌

// && can be used to prevent errors, because the error won't be thrown.
const nullBanana = null
try {
  console.log(nullBanana.length)
} catch (e) {
  console.log(e)
}
// Output: "TypeError: null has no properties."

// Using && short-circuits the code, so the TypeError doesn't occur.
nullBanana && console.log(nullBanana.length)
// Nothing happens, since we never reach the nullBanana.length code.

// Both null and undefined are falsy values commmonly used with &&.
let banana // undefined
banana && "🍌" && console.log(banana.length) // nothing happens

// In comparison, strings are truthy, except for "" the empty string.
"🍌" && console.log("🍌") // 🍌
