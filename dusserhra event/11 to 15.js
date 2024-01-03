// 11. Write a JavaScript program to compute the sum of elements of a given array of integers.
let aray =[4,6,7,8,,7,7]
const sum= aray.reduce((a,b)=>{
   return a+b
})
console.log("sum is ",sum)


// 12. Write a JavaScript program to check whether the first and last elements are the same in a given array of integers.

let ff =[4,4,5,5,5,6,4]
console.log(ff.length) 
let fi =ff[0]
let la = ff[6] 
if( fi==la){
    console.log("they are similar")

}else{
  console.log  ("they are not")
}

// 13. Write a JavaScript program to reverse the elements of a given array of integers.

let arin =[4,2,6,9,7,12,8]
let re =console.log( "reversed array",arin.reverse())


//14. Write a JavaScript function to generate a random integer of length 6.


 function fun(){
for (i=0;i<6;i++){
    console.log( "random number",i)
}
}
fun()




// 15. Write a JavaScript function to format a number up to specified decimal places.

let de =5.9998080
let fore = console.log(de.toFixed(4))

function IIRFilterNode(n1){
 console.log(n1.toFixed(2))

}
IIRFilterNode(6.778)