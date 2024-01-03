let array =[ {
    name: "rahul",
    eduaction : ["course","cgpa","rollno"]

},
  {
    name:"vinay",
    eduaction: ["course1", "cgpa2"]
  }
 ]
//  for (let first of array){
// //  console.log(first)
// for(let second of first.eduaction){
//     console.log("thatis",second)
// }
// }
let m= array.map((first)=>{
// console.log(first)
first.eduaction.map((second)=> {
    console.log( "ye hai",second)

})
})