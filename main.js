let budget = document.getElementById('Budgetinp')

let budgetbtn = document.getElementById('Budgetbtn')

let budgetpara = document.getElementById('totalbudget')

let balanceInput = document.getElementById('balance-inpt');

let totalExpense = document.getElementById('total-expense')

budgetbtn.addEventListener('click', function () {
    let budgetinp = parseInt(budget.value)
    budgetpara.textContent = budgetinp
    balanceInput.textContent = budgetinp
});


let checkamountbtn = document.getElementById('CheckAmountbtn');

checkamountbtn.addEventListener('click', function () {
    let productTitle = document.getElementById('Expensesinp1')
    let productAmount = document.getElementById('Expensesinp2')

    let tabelContent = document.getElementById('tbl-content')

    if (budgetpara.textContent == 0) {
        alert('Enter budget')
        return
    }

    if (productTitle.value !== '' && productAmount.value !== '') {
        let totalExpenseCard = parseInt(totalExpense.textContent) + parseInt(productAmount.value);
        
        let totalBalanceCard = parseInt(balanceInput.textContent) - parseInt(productAmount.value);

        if(totalBalanceCard < 0) {
            alert('increase budget');
            return
        }

        totalExpense.textContent = totalExpenseCard
        balanceInput.textContent = totalBalanceCard
        
        tabelContent.innerHTML += `
        <tr>
            <td>${productTitle.value}</td>
            <td>${productAmount.value}</td>
            <td><button id='del-row' onclick="deleteRow()">Del</button></td>
        </tr>
        `
    } else {
        alert('Please fill in both fields')
    }
});


function deleteRow(e) {
   let deleteTableRow = document.getElementById('del-row');
   deleteTableRow.closest('tr').remove();
//    let totalExpenseCard = parseInt(totalExpense.textContent) - parseInt(deleteTableRow.previousElementSibling.textContent);

console.log(deleteTableRow.lastElementChild);
    
//    totalExpense.textContent = totalExpenseCard
//    balanceInput.textContent = totalBalanceCard
}
