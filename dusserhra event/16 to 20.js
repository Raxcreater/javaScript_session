// 16. Write a JavaScript function to find the highest value in an array.
function findmax(array){
    
    let maxi= Math.max(...array,)
    console.log(maxi)
}
let array1 =[4,6,8,3,9]
findmax(array1)

// (...array is syantax h use krna hi pdega)

// 17. Write a JavaScript function to find the lowest value in an array.

function findmin(){
    let array2 =[4,6,8,3,9]
    
    let mini= Math.min(...array2,)
    console.log(mini)
}
findmin()


// 18. Write a JavaScript function to check whether a variable is numerical or not.



// 19. Write a JavaScript function to calculate the sum of values in an array.
let array12 =[4,6,7,8,,7,7]

function sumofvalue(){
 let sum = array12.reduce((a,b)=>{
     return  a+b
})
console.log(sum)
}
sumofvalue()



// 20. Write a JavaScript function to check whether an input is an array or not.


    function isArray(input) {
      let it=   Array.isArray(input);
      console.log(it)
      }
      
isArray(123)

