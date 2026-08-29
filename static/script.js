const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const remainingDisplay = document.getElementById('remaining');

setBudgetBtn.addEventListener('click', function() {
    const budgetAmount = budgetInput.value;
    totalBudgetDisplay.textContent = budgetAmount;
    remainingDisplay.textContent = budgetAmount;
});