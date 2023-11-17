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
    return {status: "CLOSED", change: cid}
  } else if (totalCash < changeDue){
    return {status: "INSUFFICIENT_FUNDS", change: Object.entries(change)}
  } else {
    // Find the change due in coins and bills and save it in change array in reverse order

    for (let unit of cid.reverse()){
    // Starting from the hightest unit in CID
    // Keep getting the amount of the unit
    // As long as change due is higher than the unit amount
    // And there the amount is not zero in the drawer
      while (changeDue >= unitAmount[unit[0]] && unit[1] > 0){
        if (change[unit[0]]){
          change[unit[0]] += unitAmount[unit[0]]
        } else{
          change[unit[0]] = unitAmount[unit[0]]
        }
        changeDue -= unitAmount[unit[0]];
        console.log(changeDue.toFixed(2))
        unit[1] - unitAmount[unit[0]];
        changeDue = changeDue.toFixed(2)
      }
    }
    console.log(Object.entries(change), changeDue.toFixed(2))

    // Case 3: You cannot return the exact change
    if (changeDue != 0){
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else {
      console.log({status: "OPEN", change: Object.entries(change)})
      return {status: "OPEN", change: Object.entries(change)}
    }
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])