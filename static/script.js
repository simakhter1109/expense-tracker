const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const remainingDisplay = document.getElementById('remaining');

const expenseTitle = document.getElementById('expenseTitle');
const expenseAmount = document.getElementById('expenseAmount');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseCategory = document.getElementById('expenseCategory');
const expenseList = document.getElementById('expenseList');
const totalSpentDisplay = document.getElementById('totalSpent');

let totalBudget = 0;
let totalSpent = 0;

const categoryIcons = {
    "rent": "🏠",
    "groceries": "🛒",
    "food": "🍔",
    "transport": "🚗",
    "entertainment": "🎬",
    "shopping": "🛍️",
    "other": "💸"
};

function getIconForCategory(category) {
    const key = category.toLowerCase();
    return categoryIcons[key] || "💸";
}

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
    const category = expenseCategory.value;
    const icon = getIconForCategory(category);

    const newItem = document.createElement('li');
    newItem.innerHTML = "<span class='expense-icon'>" + icon + "</span><span class='expense-title'>" + title + "</span><span class='stat-number expense-amount'>₹" + amount + "</span>";
    expenseList.appendChild(newItem);

    totalSpent = totalSpent + amount;
    totalSpentDisplay.textContent = totalSpent;
    updateRemaining();

    expenseTitle.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";
});