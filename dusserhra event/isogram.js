
// program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = (2023);

// checkLeapYear(year);
// check string is isogram or not

function isograamm(string){
     let len =string.toLowerCase()
    for(let i= 0;i<len;i++){
       for(let j =i+1;j<len;j++){
        if(len[i]===len[j])
        return false
        console.log("i ki value ",i)
        console.log("j ki value ",j)
        }
    }
    return true
    }


let string ="rammu"
console.log (isograamm(string))


