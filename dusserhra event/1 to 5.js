// 1. Write a JavaScript function that reverses a number.Example x = 32243;Expected Output : 34223 
const no = (a)=>{
    let c =a.toString().split("").reverse().join("")
    return c
}
 let rev =no(3456)
 console.log(rev)

//   Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
function triangle(b,h){
    
 const A = 1/2 * b * h
console.log(A)
return A
}
triangle(5,6)
// console.log(area)


// 3. Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

let p="thon"
let nn =`py${p}`
console.log(nn)










// 4. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
let a ="vibe on"
let re =a.replace("on","")
console.log(re)



// 5. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

let num = 21
if (num/3 && num/7){
    console.log("num is multiple of 3 and 7" )
}else{
    console.log("num is not divisible")
}
