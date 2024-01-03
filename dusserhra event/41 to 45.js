// 41. Write a JavaScript function to get the number of days in a year.

function getNumberOfDaysInYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 366; // Leap year
    } else {
      return 365; // Common year
    }
  }
  
  // Example usage:
  const year = 2023; // You can change the year as needed
  const daysInYear = getNumberOfDaysInYear(year);
  console.log(`There are ${daysInYear} days in ${year}.`);
  getNumberOfDaysInYear()

// 43. Write a JavaScript function to split a string and convert it into an array of words.
let stringg = "stackholfer"
// const splitof = spitthestring(stringg)
function spitthestring(){
     let iii =stringg.split("")
     
     console.log(iii)
}
// console.log ("string into array",splitof)
spitthestring()


// 44. Write a JavaScript function to extract a specified number of characters from a string.
function extractCharacters(inputString, numCharacters) {
    if (numCharacters < 0) {
      // Handle negative number of characters (optional)
      return "Invalid input";
    }
  
    // Use the slice() method to extract the specified number of characters
    const extractedCharacters = inputString.slice(0, numCharacters);
  
    return extractedCharacters;
  }
  
  // Example usage:
  const inputString = "This is a sample string";
  const numCharacters = 7; // Change this to the number of characters you want to extract
  const extractedText = extractCharacters(inputString, numCharacters);
  console.log(extractedText);

// 45. Write a JavaScript function to insert a string within a string at a particular position

function insertString(originalString, stringToInsert, position) {
    if (position < 0) {
      position = 0;
    } else if (position > originalString.length) {
      position = originalString.length;
    }
  
    const firstPart = originalString.slice(0, position);
    const secondPart = originalString.slice(position);
  
    return firstPart + stringToInsert + secondPart;
  }
  
  // Example usage:
  const originalString = "This is a sample string";
  const stringToInsert = "INSERTED";
  const position = 10; // Change this to the position where you want to insert the string
  const result = insertString(originalString, stringToInsert, position);
  console.log(result);
  