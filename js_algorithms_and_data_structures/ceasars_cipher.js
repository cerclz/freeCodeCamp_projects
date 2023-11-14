function rot13(str) {
    // We will use ascii codes to shift characters
    // We should not that "A" character code is 65
    // And "Z" character code is 90
    // These are our boundaries for our characteres
    let newString = ""
  
    // Loop through every character on string
    for (let i = 0; i < str.length; i++) {
  
      // Check if string is "SPACE"
      // If it is leave it unchanges
      if (str.charCodeAt(i) == 32){
        newString += String.fromCharCode(32)  
      } 
      // Else check if character code exceeds boundaries
      else if (str.charCodeAt(i) + 13 > 90){
        newString += String.fromCharCode(str.charCodeAt(i) - 13)
      } 
      else if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 90) {
        newString += String.fromCharCode(str.charCodeAt(i) + 13)
      }
      else{
        newString += str[i]
      }
    }
    return newString
  }
  
  rot13("SERR PBQR PNZC");