const budgetInput = document.getElementById('budgetInput');
const setBudgetBtn = document.getElementById('setBudgetBtn');
const totalBudgetDisplay = document.getElementById('totalBudget');
const remainingDisplay = document.getElementById('remaining');

const expenseTitle = document.getElementById('expenseTitle');
const expenseAmount = document.getElementById('expenseAmount');
const expenseCategory = document.getElementById('expenseCategory');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalSpentDisplay = document.getElementById('totalSpent');

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

function getBudget() {
    return Number(localStorage.getItem('totalBudget')) || 0;
}

function getExpenses() {
    const stored = localStorage.getItem('expenses');
    return stored ? JSON.parse(stored) : [];
}

function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function calculateTotalSpent() {
    const expenses = getExpenses();
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total = total + expenses[i].amount;
    }
    return total;
}

function renderSummary() {
    const budget = getBudget();
    const spent = calculateTotalSpent();
    totalBudgetDisplay.textContent = budget;
    totalSpentDisplay.textContent = spent;
    remainingDisplay.textContent = budget - spent;
}

function renderExpenseList() {
    expenseList.innerHTML = "";
    const expenses = getExpenses();
    for (let i = 0; i < expenses.length; i++) {
        const exp = expenses[i];
        const icon = getIconForCategory(exp.category);
        const newItem = document.createElement('li');
        newItem.innerHTML = "<span class='expense-label'>" + icon + " " + exp.title + "</span><span class='expense-amount'>₹" + exp.amount + "</span>";
        expenseList.appendChild(newItem);
    }
}

setBudgetBtn.addEventListener('click', function() {
    const budget = Number(budgetInput.value);
    localStorage.setItem('totalBudget', budget);
    renderSummary();
});

addExpenseBtn.addEventListener('click', function() {
    const title = expenseTitle.value;
    const amount = Number(expenseAmount.value);

    const expenses = getExpenses();
    expenses.push({ title: title, amount: amount, category: "other" });
    saveExpenses(expenses);

    renderSummary();
    renderExpenseList();

    expenseTitle.value = "";
    expenseAmount.value = "";
});

renderSummary();
renderExpenseList();