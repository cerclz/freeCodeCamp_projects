// Palindrome Checker solution for freeCodeCamp palindrome checker project

function palindrome(str) {
    // Remove all non-alphanumeric characters using regex
    // And create a new string to store it in all lowercase
    let strCheck = ''
    for (let i = 0; i < str.length; i++){
      if (str.charAt(i).match(/^[a-z0-9]+$/i)){
        strCheck += str.charAt(i).toLowerCase()
      }
    }
  
    // Reverse String
    let checkReverse = strCheck.split('').reverse().join('')
  
    // Check if palindrome
    if (strCheck == checkReverse){
      return true
    }
  
    return false
  
  }
palindrome("race car");