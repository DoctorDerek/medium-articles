// Read in old localStorage
const pizza = JSON.parse(localStorage.getItem("pizza"))
if (!pizza) {
  console.log("No pizza was found in localStorage.")
  console.log("Let's save {pizza: '🍕'} to localStorage.")
  console.log("Your slice of pizza will be waiting for you!")
  // You can't save the object directly to localStorage:
  // window.localStorage.setItem('pizza', {pizza: "🍕"})
  // Instead, call JSON.stringify() on the object first:
  const freshPizza = JSON.stringify({ pizza: "🍕" })
  window.localStorage.setItem("pizza", freshPizza) // Yum!
} else {
  console.log("Here's your fresh slice of pizza!")
  console.log(pizza) // Output: Object { pizza: "🍕" }
  console.log("It was waiting for you in localStorage.")
  console.log("I'll remove it from localStorage now.")
  window.localStorage.removeItem("pizza")
  // Or you could clear localStorage completely with:
  // window.localStorage.clear() // Remove all items
}
