// 31. Write a JavaScript program to remove a specific element from an array.
let arry =["hul","iiu","uuy","uui"]
let rem = arry.splice(1,1)
console.log(arry)



// 32. How to find an array containing a specific element
let ii= ["vvi","iio","yyu"]
let fin= ii.indexOf("iio")
console.log(fin)
console.log(ii[1])


// 33. How to find not common elements in two arrays. 

let a1 = [1, 2, 3];
let a2 =[2, 30, 1];
let nn =[]
if (a1==a2){

}else{
    nn.push()
}


// 34. How to get the current date.
// let d =new Date()
// console.log(d)

// 35. Write a JavaScript function to get the number of days in a month.

let dd =new Date
function monthss(){
  // let m =  dd.getMonth()
  let da =dd.getDate()
console.log(da)
}
monthss()

function getDaysInMonth(year, month) {
  // The month parameter is 0-based (0 = January, 1 = February, etc.)
  // To get the last day of the month, we set the day to 0 (which gives the last day of the previous month).
  const lastDayOfMonth = new Date(year, month+1, 0);
  return lastDayOfMonth.getDate();}
  
  const ddd= getDaysInMonth(2023,3)
  console.log(ddd)
