
const regexp = /foo[a-z]*/g;
const str = "table football, foosball";
const matches = str.matchAll(regexp);
console.log(matches)
for(const value of matches){
    console.log(value)
}