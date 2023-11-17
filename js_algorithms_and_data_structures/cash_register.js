function checkCashRegister(price, cash, cid) {
    // Define the value of each unit
    const unitAmount = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100}
  
    // Define an array to track of the change and find the change due
    let change = {}
    let changeDue = cash - price
  
    // Find total amount of money on the register
    let totalCash = 0;
    for (let unit of cid) {
      totalCash += unit[1];
    }
    totalCash = totalCash.toFixed(2);
  
    // Case 1: Check if total cash in drawer is equal to change due
    // Case 2: Check if total cash in drawer is less than the change due
    if (totalCash == changeDue){
      console.log({status: "CLOSED", change: cid})
      return {status: "CLOSED", change: cid}
    } else if (totalCash < changeDue){
      console.log("1", {status: "INSUFFICIENT_FUNDS", change: []})
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      // Iterate each unit in CID in reverse order
      for (let unit of cid.reverse()){
        // Keep removing amount of units for CID while adding them in change if the amount is sufficient 
        while (changeDue >= unitAmount[unit[0]] && unit[1] > 0){
          if (change[unit[0]]){
            change[unit[0]] += unitAmount[unit[0]]
          } else{
            change[unit[0]] = unitAmount[unit[0]]
          }
          changeDue -= unitAmount[unit[0]]
          changeDue = changeDue.toFixed(2)
          unit[1] -= unitAmount[unit[0]]
        }
      }
    }
    // Check 3: Cannot return the exact change
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    // Return the change due in coins and bills
    return {status: "OPEN", change: Object.entries(change)}
  
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  
  