const object1 = { "💐": "🌹" }
Object.defineProperty(object1, "👟", { enumerable: false })
object1["👟"] = "🆒"
object1[Symbol("🥞")] = "😋"
console.log(Object.keys(object1).length) // 1
console.log(Object.keys({}).length) // 0

const object2 = { "💐": "🌹" }
Object.defineProperty(object2, "👟", { enumerable: false })
object2["👟"] = "🆒"
object2[Symbol("🥞")] = "😋"
console.log(Object.getOwnPropertyNames(object2).length) // 2
console.log(Object.getOwnPropertyNames({}).length) // 0

const object3 = { "💐": "🌹" }
Object.defineProperty(object3, "👟", { enumerable: false })
object3["👟"] = "🆒"
object3[Symbol("🥞")] = "😋"
let count = 0
for (const key in object3) {
  object3.hasOwnProperty(key) && count++
}
console.log(count) // 1

const object4 = { "💐": "🌹" }
Object.defineProperty(object4, "👟", { enumerable: false })
object4["👟"] = "🆒"
object4[Symbol("🥞")] = "😋"
console.log(Object.getOwnPropertySymbols(object4).length) // 1
console.log(Object.getOwnPropertySymbols({}).length) // 0
