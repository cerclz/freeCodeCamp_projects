// Define an object with numeric - arabic numerals
const numerals = {1000: "M", 900: "CM", 500: "D", 400: "CD", 100: "C", 90: "XC", 50: "L", 40: "XL", 10: "X", 9: "IX", 5: "V", 4: "IV", 1: "I"}

function convertToRoman(num) {
  // Define a base case for recursion
  if (num < 1){
    return ""
  }

  // Find the next roman symbol to add to the string
  let lastKey = 0

  for (const key of Object.keys(numerals)){
    if (key <= num){
      lastKey = key
    }
  }

  // Recursive calling the function adding the next symbol
  return numerals[lastKey] + convertToRoman(num - lastKey)


}

convertToRoman(29);