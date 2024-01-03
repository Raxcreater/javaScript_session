let array =["apple", "banana","mango","apple","mango","banana"]
const unique = []

// console.log(unique)


 let r=array.map((x,index,arr)=>{
    
    // console.log("x valiue ye hai",x)s

        if(unique.includes(x)){
            console.log('value in first',x)
    
        }else{
            unique.push(x)
            console.log("end value in  x", x)
        }

})

console.log(unique)
    










