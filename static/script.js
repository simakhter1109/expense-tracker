const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const remainingDisplay = document.getElementById('remaining');

const expenseTitle = document.getElementById('expenseTitle');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalSpentDisplay = document.getElementById('totalSpent');

let totalBudget = 0;
let totalSpent = 0;

function updateRemaining() {
    remainingDisplay.textContent = totalBudget - totalSpent;
}

setBudgetBtn.addEventListener('click', function() {
    totalBudget = Number(budgetInput.value);
    totalBudgetDisplay.textContent = totalBudget;
    updateRemaining();
});

addExpenseBtn.addEventListener('click', function() {
    const title = expenseTitle.value;
    const amount = Number(expenseAmount.value);

    const newItem = document.createElement('li');
    newItem.innerHTML = title + " - ₹<span class='stat-number'>" + amount + "</span>";
    expenseList.appendChild(newItem);
    

    totalSpent = totalSpent + amount;
    totalSpentDisplay.textContent = totalSpent;
    updateRemaining();

    expenseTitle.value = "";
    expenseAmount.value = "";
});