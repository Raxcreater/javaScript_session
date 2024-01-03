// 6. Write a JavaScript program to find the largest of three given integers. like a =430,b= 543, c = 246
let a =555
let b =500
let c =800
if(a>=b&a>=c){
    console.log("a is largest",a)
 } else if(b>=a&b>=c){
    console.log("b is largest",b)
     }else{ 
        console.log("c is largest",c)
}

// 7. Wbrite a JavaScript program to find the closest value to 100 from two numerical values. like a=34, b=48
let n1= 50;
let n2=55;
let clo1 =console.log(100-n1)
let clo2 =console.log(100-n2)
if (clo1>clo2){
    console.log("n1 is not cloest to 100")
}else{
    console.log("n2 is  cloest to 100")

}

// 8. Write a JavaScript program to reverse a given string.  

let tin = "reverse string"
// when split use krta hu to vo aray m split ho jatti haia and than reverse method use kr ke rervese kr do and join is vo join ho jaegi
let rev =console.log( tin.split("").reverse().join(""))
// console.log(tin.split(""))

// 9. Write a JavaScript program to test whether a string ends with "Script". if let string is 
let end = "i am writing a script"
if(end.endsWith("script")){
console.log("script is on ")
}else{
    console.log("not on")
}

// 10. Write a JavaScript program to concatenate two strings and return the result.
let first = "re";
let second ="sult";
let combine =console.log(first.concat(second) )