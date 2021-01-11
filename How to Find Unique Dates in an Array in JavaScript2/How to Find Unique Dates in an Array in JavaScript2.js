const date4 = new Date("3005-01-01 00:00") // Happy New Year! 🎉🎈🎊🥳
console.log(date4)
// Output: Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time)

// The date5 object will have a different object reference
const date5 = new Date("3005-01-01 00:00") // Happy New Year! 🎉🎈🎊🥳

// This array has 2 different object references.
const dateArray2 = [date4, date5]
// Use JSON.stringify() and JSON.parse() in a .map() call with new Date():
const uniqueDates2 = Array.from(
  new Set(dateArray2.map((dateObject) => JSON.stringify(dateObject)))
).map((dateString) => new Date(JSON.parse(dateString)))
// Using Array.from() is the same as [...(new Set(dateArray)]

// Just one Date remains, because they had the same timestamp.
console.log(uniqueDates2)
// Output: [Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time)]

// The uniqueDates array contains a new Date, neither date4 nor date5.
console.log(`date4: ${uniqueDates2[0] === date4}`) // date4: true
console.log(`date5: ${uniqueDates2[0] === date5}`) // date5: false
// The new date has the same timestamp in milliseconds as date4 or date5.
console.log(`${uniqueDates2[0].valueOf() === date4.valueOf()}`) // true
