// Typically, you access key with . dot syntax.
const emptyObject = {}
const objectLiteral = { key: "value" }
emptyObject.key = "value"
// These two objects now have the same contents.

// With emojis, you need to use square brackets.
const emptyObject2 = new Object()
const emojiObject = { "⭐": "💫" }
emptyObject2["⭐"] = "💫"
// These two objects now have the same contents.

// Values can be variables in object literals.
const key = "🌟"
const value = "🌠"
const emptyObject3 = {}
// The literal used the string "key" as the key,
const objectLiteral2 = { key: value }
// but the square brackets use the key variable.
emptyObject3[key] = value
// These objects don't have the same contents:
console.log(objectLiteral2) // {key: "🌠"}
console.log(emptyObject3) // {🌟: "🌠"}
