class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  submitBudgetForm() {
    const value = this.budgetForm.value;
    if (value === 0 || value < 0) {
      this.budgetFeedback.classList.add("Show Item");
      this.budgetFeedback.innerHTML = "<p>value is invalid</p>";
      const self = this;
      setTimeout(function () {
        self.budgetFeedback.classList.remove("Show Item");
      }, 3000);
    } else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = "";
      this.showBalance();
    }
  }

  showBalance() {
    const expense = this.totalExpense();
  }
}

function eventListeners() {
  const budgetForm = document.getElementById("budget-form");
  const expenseForm = document.getElementById("expense-form");
  const expenseList = document.getElementById("expense-list");

  //new instance of UI class
  const ui = new UI();

  // budget form submit
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // expense form submit
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // expense list click
  expenseList.addEventListener("click", function (event) {
    event.preventDefault();
  });
}
