// 50. How to use replace and replace all on a string
let A = "vinay  is the boy vinay"
let re =A.replaceAll("vinay","sahil")
console.log (re)
let ree = A.replaceAll("vinay","sahil")
console.log(ree)


// 49. How to test whether a string starts with and ens with specified string.
let st ="in the way to home"
let end =st.endsWith("home")
// let str =st.startsWith("in")

// console.log(str)
console.log(end)


// 48. How to convert a string to lower case and upperCase
let noe ="i am done"
let noe2 ="WHY I AM DONE"
let up = noe.toUpperCase() 
let lo = noe2.toLowerCase() 
console.log(lo)
console.log(up)

// 47. Write a JavaScript function that checks whether a string ends with a specified suffix.

function stringendsup(string){
    if(string.endsWith("best")){
        console.log(true)

    } else {
        console.log(false)

    }
}
stringendsup("all the best")

// 46. Write a JavaScript function to find a word within a string.
function stringstartsup(a1){
    if(a1.startsWith("a")){
        console.log(true)

    } else {
        console.log(false)

    }
}
stringstartsup("all the best")