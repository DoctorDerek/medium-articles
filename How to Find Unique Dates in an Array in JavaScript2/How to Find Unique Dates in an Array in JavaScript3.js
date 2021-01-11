const date6 = new Date("3005-01-01 00:01") // Happy New Year! 🎉🎈🎊🥳
console.log(date6)
// Output: Date Tue Jan 01 3005 00:01:00 GMT-0500 (Eastern Standard Time)

// Now the date7 object is one minute ahead of the date6 object.
const date7 = new Date("3005-01-01 00:02") // Happy New Year! 🎉🎈🎊🥳
console.log(date7)
// Output: Date Tue Jan 01 3005 00:02:00 GMT-0500 (Eastern Standard Time)

const dateArray3 = [date6, date7]
// Calling .toDateString() on each Date object compares the calendar date.
const uniqueDates3 = Array.from(
  new Set(dateArray3.map((dateObject) => dateObject.toDateString()))
).map((dateString) => new Date(dateString))
// Using Array.from() is the same as [...(new Set(dateArray)]

// Just one Date remains, because they had the same human-readable date.
console.log(uniqueDates3)
// Output: [Date Tue Jan 01 3005 00:00:00 GMT-0500 (Eastern Standard Time)]

// Note that the time was lost for the new Date, so we're back to midnight.
console.log(`${uniqueDates3[0].valueOf() === date6.valueOf()}`) // false
