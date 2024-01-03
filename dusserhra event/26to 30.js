// 25. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let dup = [2,5,67,9,9,,0,0,0,3,5,8,]
// let uni =[]



// 26. Write a JavaScript program to find duplicate values in a JavaScript array.
const dupp =[5,6,8,9,9,0,0,0,1,0,7,5,4]
let finddup =[] 
let pther =[] 

 let tdt=dupp.forEach ((value)=>{
  if(!finddup.includes(value)){
    finddup.push(value)

    
  }else {
    pther.push(value)
  }
  console.log("oooo",finddup)
  console.log("ye hai shyd",pther)
  }
  
)
// review hai krne 




// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
function merges(){
let array3 =array1.concat(array2)
let result =new Set(array3)
console.log(result)
}
merges()