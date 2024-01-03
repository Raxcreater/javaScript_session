// write program t0 print even no 1 to 100
let even =0 
 for (let i =2;i<=100;i++){
    if (i%2){
        console.log("even no:",i+1)
    }else{
    }

 }
//  2. program to convert temprature to degree to celcies, farhrnite

function celcToFahr( n ) { 
    return ((n * 9.0 / 5.0) + 32.0); 
} 
  let f =celcToFahr(33)
  
console.log("temp is ",f);


// 3 program to display to current date time 
let d = new Date
let sayy =["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let day = d.getDay(sayy)
console.log(day)
let day_name = sayy[day];
console.log(day_name)






// ("sunday","monday","tuesday","wednesday","thursday","friday","saturday")

