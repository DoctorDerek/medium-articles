const object = { zero: "0️⃣" }
const array = ["⛳"]
console.log(object.zero) // 0️⃣
console.log(object["zero"]) // 0️⃣
console.log(array[0]) // ⛳
object["one"] = "1️⃣"
object.two = "2️⃣"
array[1] = "🏌️‍♂️"
array[2] = "🎱"
console.log(object.one) // 1️⃣
console.log(object["two"]) // 2️⃣
console.log(array[1]) // 🏌️‍♂️
console.log(array[2]) // 🎱
const symbol = Symbol("🍠")
object[symbol] = "😋"
console.log(object[symbol]) // 😋
