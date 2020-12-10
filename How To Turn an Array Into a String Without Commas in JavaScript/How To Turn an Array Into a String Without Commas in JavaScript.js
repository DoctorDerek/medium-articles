const string = "🍌,B,A,N,A,N,A,S"
// .split() searches for a pattern
const array = string.split(",")
// Here, "," is the separator string
console.log(array)
// Output: true

// .join() is the same as .join(",")
console.log(array.join())

// Use the empty string "" for no commas
console.log(array.join(""))
// Output: true

// You can use any separator string:
console.log(array.join("🃏"))
// Output: [etc.]

// We can remake the original string
console.log(array.join() === string)
// Output: true

///////////////////////////////////////
// Here's a second example with emoji
const string2 = "😏,🤩,😎,😋,😉"
const array2 = string2.split(",")
// Here, "," is the separator string
console.log(array2)
// Output: true

// .join() is the same as .join(",")
console.log(array2.join())
// Use the empty string "" for no commas
console.log(array2.join(""))
// Output: true

// This is the original string
console.log(array2.join("") === string2)
// Output: true

// You can use any separator string:
console.log(array2.join("🃏"))
// Output: [etc.]

///////////////////////////////////////
// Here's a third example, no emoji:
const string3 = "The quick brown dog"
// Here, "" is the separator string
const array3 = string3.split("")
console.log(array3)
// Output: true

// .join() is the same as .join(",")
console.log(array3.join())
// Use the empty string "" for no commas
console.log(array3.join(""))
// Output: true

// This is the original string
console.log(array3.join("") === string3)
// Output: true

// You can use any separator string:
console.log(array3.join("🃏"))
// Output: [etc.]
