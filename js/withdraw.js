// step-1:add event handler with the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:get amount from withdraw field 
    // 2.5:also convert the input into a number by using parse float
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withdrawField.value
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    // step-7: clear the input field 
    withdrawField.value = ''
    
    ////////////////////////////////
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number')
        return
    }

    // step-3:get previous value 
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)


    // step-5:get the previous balance total 
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)


    // step-8:validation check 

    if(newWithdrawAmount>previousBalanceTotal){
        alert('You have insufficient balance')
        return
    }
    // step-4:calculate total withdraw amount 

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawTotal

    // step-6: Calculate new balance 

    const  currentBalanceTotal = previousBalanceTotal - newWithdrawAmount

    balanceTotalElement.innerText = currentBalanceTotal

   
})