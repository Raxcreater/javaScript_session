// 36. How to get the month name from a particular date.
const dd =new Date
let months =["January", "February", "March"," April", "May", "June", "July", "August", "September"," October", "November", "December"]
const monthnumber= dd.getMonth(months)
console.log(monthnumber)
const mionthname =months[monthnumber]
console.log(mionthname)

// 37. How to compare dates (i.e. greater than, less than or equal to).
// 38. how to get the last day of a month.

const ss = new Date()
let month =ss.getMonth()
console.log("last Date",month+1)

// 39. how to calculate 'yesterday's day.
const sss = new Date()
let monthh =ss.getMonth()
console.log("last Da",monthh)



// 40. Write a JavaScript function that returns the number of minutes in hours and minutes.

const yyu = new Date
function mhm (){
    let h = yyu.getHours()
    let m =yyu.getMinutes()
    console.log(h,m)
    return h & m
}
mhm()