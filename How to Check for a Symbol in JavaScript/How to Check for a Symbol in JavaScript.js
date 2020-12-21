// Every symbol created with Symbol() is unique.
console.log(Symbol() === Symbol()) // false
console.log(Symbol("✨") === Symbol("✨")) // false

// Calling Symbol.for() makes a global symbol.
console.log(Symbol.for("✨") === Symbol.for("✨")) // true

// You can check for a symbol using typeof.
console.log(typeof Symbol()) // "symbol"

const symbol1 = Symbol("🎉")
const symbol2 = Symbol("🎉")
// The symbol2 value is different from symbol1.
const symbol3 = Symbol.for("🎉")
const symbol4 = Symbol.for("🎉")
// The symbol4 value is the same as symbol3.
const object = {}
object[symbol1] = "1️⃣"
object[symbol2] = "2️⃣"
object[symbol3] = "3️⃣"
object[symbol4] = "🎊"
console.table(object)
// Symbol(🎉) "1️⃣"
// Symbol(🎉) "2️⃣"
// Symbol(🎉) "🎊"

// Symbols don't show up in Object.keys().
console.log(Object.keys(object).length) // 0
