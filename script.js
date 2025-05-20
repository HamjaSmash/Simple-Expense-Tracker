let totalDeposit = 0;
let = totalWithdraw = 0;
let totalBalance = 0;


function handleTransaction(type) {
  const amountField = document.getElementById("amountInput");
  const amount = parseFloat(amountField.value);


  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }


  if (type === 'deposit') {
    totalDeposit += amount;
    totalBalance += amount;
  }
  
  else if (type === 'withdraw') {
    if (amount > totalBalance) {
      alert("Insufficient Balance");
      return;
    }
    totalWithdraw += amount;
    totalBalance -= amount;
  }


  // Update UI

  document.getElementById("totalDeposit").innerText = totalDeposit ;
  document.getElementById("totalWithdraw").innerText = totalWithdraw ;
  document.getElementById("totalBalance").innerText  = totalBalance ;


}
