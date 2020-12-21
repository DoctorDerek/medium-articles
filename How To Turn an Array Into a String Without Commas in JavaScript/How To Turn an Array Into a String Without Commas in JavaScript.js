///// Example 1 of 3 (using emoji) /////
const string = "🍌,B,A,N,A,N,A,S"
// .split() searches for a separator
const array = string.split(",")
// Here, "," is the separator string.
console.log(array)
// Array(8) ["🍌","B","A","N","A","N","A","S"]

// .join() is the same as .join(",")
console.log(array.join()) // 🍌,B,A,N,A,N,A,S

// Use the empty string "" for no commas.
console.log(array.join("")) // 🍌BANANAS

// You can use any separator string.
console.log(array.join("🃏"))
// 🍌🃏B🃏A🃏N🃏A🃏N🃏A🃏S

// We can remake the original string.
console.log(array.join() === string) // true

///// Example 2 of 3 (using emoji) /////
const string2 = "😏,🤩,😎,😋,😉"
const array2 = string2.split(",")
// Here, "," is the separator string
console.log(array2)
// Array(5) [ "😏", "🤩", "😎", "😋", "😉" ]

// .join() is the same as .join(",")
console.log(array2.join()) // 😏,🤩,😎,😋,😉
// This is the original string
console.log(array2.join() === string2) // true

// Use the empty string "" for no commas.
console.log(array2.join("")) // 😏🤩😎😋😉

// You can use any separator string:
console.log(array2.join("🃏"))
// 😏🃏🤩🃏😎🃏😋🃏😉

///// Example 3 of 3 (no emoji) /////
const string3 = "The quick brown dog"
// Here, "" is the separator string
const array3 = string3.split("")
// Calling .split("") splits every character.
console.log(array3)
// Array(19) ["T","h","e"," ","q","u","i", ...]

// In comparison, .split() doesn't split at all.
console.log(string3.split())
// Array["The quick brown dog"]
const string3_again = string3.split()[0]
console.log(string3 === string3_again) // true

// .join() is the same as .join(",")
console.log(array3.join())
// Use the empty string "" for no commas.
console.log(array3.join(""))
// Output: true

// Since we used .split(""), .join("")
// creates the original string.
console.log(array3.join("") === string3)
// Output: true

// You can use any separator string:
console.log(array3.join("🃏"))
// Output: [etc.]
