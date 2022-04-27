class APPUI {
constructor(){
    this.budgetVal = document.getElementById('budget');
    this.expVal = document.getElementById('expense-a');
    this.expTit = document.getElementById('expense-t');
    this.budgetHold = document.getElementById('budget-hold');
    this.expHold = document.getElementById('exp-hold');
    this.balHold = document.getElementById('bal-hold');
    this.tBody = document.getElementById('t-body');
    this.noVal = document.getElementById('noVal');
    this.tables = document.getElementById('tablea');
    this.expban = document.getElementById('expno');
    this.bals = document.getElementById('bals')


    this.allVal;
    this.budgetArr = [];
    this.allObj;
    this.totalExp;
    this.ids = 0;
    // this.myBalance; 
}
// get the value of budget
getBudgetVal (){
    const myBudget = this.budgetVal.value;
   if(myBudget < 0){
    this.noVal.style.visibility = "visible";
    this.noVal.textContent = "Please enter a budget";
   }
 else{
    this.noVal.style.visibility = 'hidden'
    this.budgetHold.textContent = myBudget;
    this.budgetVal.value = '';
    this.getBalance()
 }
}

// get expense details inputed by user
getExpDet (){
    const expTitle = this.expTit.value;
    const expValue = this.expVal.value;
    // populate object
    this.allObj = {
        expenseTitle: expTitle,
        expenseValue: expValue,
        id: this.ids
    }
    this.ids++
    // push obj to array
    this.budgetArr.push(this.allObj);
    // clear form input
    this.expTit.value = '';
    this.expVal.value = '';
    // 
    if(expTitle && expValue){
       if(expValue < 0){
           this.expban.textContent = "Enter a positive value";
           this.expban.style.visibility = 'visible';
       } else{
           this.expban.style.visibility = 'hidden';
            this.tables.style.visibility = 'visible'

        for(let i = 0; i < this.budgetArr.length; i++){
         this.allVal = document.createElement('tr');
                   this.allVal.innerHTML =   ` 
                    <td id="exp-title">${this.budgetArr[i].expenseTitle}</td>
                    <td id="exp-amt">&dollar; ${this.budgetArr[i].expenseValue}</td>
                    <td id=${this.budgetArr[i].id} class="edit"><i class="far fa-edit text-primary"></i></td>
                    <td id=${this.budgetArr[i].id} class="del">
                      <i class="fas fa-trash-alt text-danger"></i>
                    </td>
                    `;
                
         
              
        }
                  this.tBody.appendChild(this.allVal);
                //   get total exp
                //   this.getExpTotal()
                //   get balance
                this.getBalance()
       }
    }
    
} 


// get balance 
getBalance(){
    // get total
       let totalExp = 0
    // parseInt(this.budgetArr[i].expenseValue);
          totalExp = this.budgetArr.reduce((a, b)=>{
            a += parseInt(b.expenseValue);
            return a;
          }, 0)
      this.expHold.textContent = totalExp;
    let bal = parseInt(totalExp);
    let amt = parseInt(this.budgetHold.textContent);
    // get bal
    let myBalance;
    if(amt && bal){
       myBalance = amt - bal;
    }
    else if(amt && !bal){
        myBalance = amt;

    } else if(bal && !amt){
        myBalance = 0 - bal
    }
        this.balHold.textContent = myBalance;
        this.col(myBalance)

 
}

// color
col(myBalance){
if(myBalance > 0){
this.bals.style.color = 'green'
}
else if(myBalance < 0){
this.bals.style.color = 'red'
}
}

// delete exp
delExp (e){
        let id = parseInt(e.id)
        let parenElem = e.parentElement;
        this.tBody.removeChild(parenElem);

        let nwArr = this.budgetArr.filter((item)=>{
            return item.id !== id 
        })
        this.budgetArr = nwArr;
        this.getBalance();
        console.log(nwArr);


}
// edit 
editExp(e){
        let id = parseInt(e.id)
        let expList = this.budgetArr.filter((item) =>{
            return item.id === id 
        })

          this.expTit.value = expList[0].expenseTitle;
            this.expVal.value = expList[0].expenseValue;
    
}
}

// class ends here


    const budgetForm = document.getElementById('budget-form');
    const expForm = document.getElementById('expense-form');
    const tbod = document.getElementById('t-body');

// dom loaded event listener
document.addEventListener('DOMContentLoaded', function(){
    const appui = new APPUI();
    // event for budget submission
    budgetForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    appui.getBudgetVal()
    });
// event for expense submission
   expForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    appui.getExpDet()
    });
    // del event
    tbod.addEventListener('click', (e)=>{
        if(e.target.parentElement.classList.contains('del')){
      appui.delExp(e.target.parentElement)

        }
         if(e.target.parentElement.classList.contains('edit')){
      appui.editExp(e.target.parentElement)
      appui.delExp(e.target.parentElement)

         }
        
    })
})
