
document.getElementById('btn-donate').addEventListener('click',function(event){
    event.preventDefault();
    const inputBalance=document.getElementById('input-add-money').value;
    console.log(inputBalance);
    if(inputBalance>0){
     
        const currentBalance=document.getElementById('account-balance').innerText;
        const inputBalanceNumber=parseFloat(inputBalance);
        const modal = document.getElementById("myModal");
        modal.classList.remove('hidden');
        const currentBalanceNumber=parseFloat(currentBalance);
        const availableBalance=document.getElementById('Total-balance').innerText;
        const availableBalanceNumber=parseFloat(availableBalance);
        const newBalance=inputBalanceNumber+currentBalanceNumber;
        const newTotalBalance=availableBalanceNumber-inputBalanceNumber;
        document.getElementById('account-balance').innerText=newBalance;
        document.getElementById('Total-balance').innerText=newTotalBalance;
        localStorage.setItem('')


  const closeModalBtn = document.getElementById("closeModalBtn");
  closeModalBtn.onclick = function() {
    modal.classList.add("hidden");
  }
    }
    else{
        alert('Please Enter positive value');
    }

})

//code for feni
document.getElementById('btn-donate-feni').addEventListener('click',function(event){
    event.preventDefault();
    const inputBalance=document.getElementById('input-add-money-feni').value;
    if(inputBalance>0)
    {
        const currentBalance=document.getElementById('account-balance-feni').innerText;
        const inputBalanceNumber=parseFloat(inputBalance);
        const modal = document.getElementById("myModal");
        modal.classList.remove('hidden');
        const currentBalanceNumber=parseFloat(currentBalance);
        const availableBalance=document.getElementById('Total-balance').innerText;
        const availableBalanceNumber=parseFloat(availableBalance);
        const newBalance=inputBalanceNumber+currentBalanceNumber;
        const newTotalBalance=availableBalanceNumber-inputBalanceNumber;
        document.getElementById('account-balance-feni').innerText=newBalance;
        document.getElementById('Total-balance').innerText=newTotalBalance;
        const closeModalBtn = document.getElementById("closeModalBtn");
       closeModalBtn.onclick = function() {
    modal.classList.add("hidden");
  }
    
    }
    else{
        alert("Enter positive value");
    }
    
    })
//code for student

document.getElementById('btn-donate-st').addEventListener('click',function(event){
    event.preventDefault();
    const inputBalance=document.getElementById('input-add-money-st').value;
    if(inputBalance>0)
    {
        const currentBalance=document.getElementById('account-balance-st').innerText;
        const inputBalanceNumber=parseFloat(inputBalance);
        console.log(inputBalance);
        const modal=getElementById("myModal");
        modal.classList.remove("hidden");
        //const modal=getElementById("myModal");
        //modal.classList.remove("hidden");
        const currentBalanceNumber=parseFloat(currentBalance);
        const availableBalance=document.getElementById('Total-balance').innerText;
        const availableBalanceNumber=parseFloat(availableBalance);
        const newBalance=inputBalanceNumber+currentBalanceNumber;
        const newTotalBalance=availableBalanceNumber-inputBalanceNumber;
        document.getElementById('account-balance-st').innerText=newBalance;
        document.getElementById('Total-balance').innerText=newTotalBalance;
        const closeModalBtn = document.getElementById("closeModalBtn");
      // closeModalBtn.onclick = function() {
  //  modal.classList.add("hidden");
  //}
    
    }
    else{
        alert("Enter positive value");
    }
    
    })




