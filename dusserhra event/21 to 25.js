// 21. Write a JavaScript function to clone an array.
function clone(){
    const clonedArray = originalArray.slice();
    console.log(clonedArray);
}
const originalArray = [1, 2, 3];
clone()


// 22. how get the first element of an array.
let aaa =[4,,9,9,9,7]
console.log(aaa[0])


// 22. how get the last element of an array.
let aaaa =[4,9,9,9,7]
console.log(aaaa[4])

// 23. Write a simple JavaScript program to join all elements of the following array into a string.
let aar =[5,5,7,3,3,8,77,8]
let con =aar.toString()
let str ="n1,n2,n3,n4,n5,n6,n7"
console.log(aar.concat(str))

// 24. Write a JavaScript program to sort the items of an array.
let sorr=[ "vegi", "peg" ,"meg", "meat","sea"," animal"]
console.log(sorr.sort())



// 25. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

let dup = [2,5,67,9,9,0,0,0,3,5,8,9,9]
function dupli(){
    let ext=[]
    let ini= dup.filter((x)=>{
if(ext.includes(x)){
    console.log( "first vALUE",ext)
    
}else{
    ext.push(x)
    console.log("2nd value",ext)
}   
 })
}

dupli()
