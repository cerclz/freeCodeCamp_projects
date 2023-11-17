function telephoneCheck(str) {
    // Create a regex to match the possible patterns
    let regex = /^(1|1\s)?([0-9]{3}(\s|-)*[0-9]{3}(\s|-)[0-9]{4}|(1|1\s|$)?[0-9]{10}$|(1|1\s|$)?[(][0-9]{3}[)](\s|-)*[0-9]{3}(\s|-)[0-9]{4})/
    // Check if the number matches the regex we created
    if (regex.test(str)){
      return true
    }
    return false
  }
  
  telephoneCheck(" 555)555-5555");
  