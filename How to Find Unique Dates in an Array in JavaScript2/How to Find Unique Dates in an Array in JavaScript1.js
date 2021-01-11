const date1 = new Date("3005-01-01 00:00") // Happy New Year! 🎉🎈🎊🥳
console.log(date1)
// Output: Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time)

// The date2 object will have a different object reference.
const date2 = new Date("3005-01-01 00:00") // Happy New Year! 🎉🎈🎊🥳

// The date3 variable will have the same object reference as date1.
const date3 = date1

// It's possible to add duplicate object references to an array:
const dateArray = [date1, date2, date3, date2]
const uniqueDates = Array.from(new Set(dateArray))
// Using Array.from() is the same as [...(new Set(dateArray)]

// We're left with the unique object references for the Date objects:
console.log(uniqueDates)
// Output: [Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time), Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time)]
// The uniqueDates array contains the date1 and date2 object references:
console.log(`date1: ${uniqueDates[0] === date1}`) // date1: true
console.log(`date2: ${uniqueDates[1] === date2}`) // date2: true
