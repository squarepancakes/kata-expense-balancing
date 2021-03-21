class ExpenseNote {
	constructor() {
		this.expense = { payer: "", amount: 0 };
	}
	recordExpense(payer = "", amount = 0) {
		this.expense = { payer, amount };
	}
}

module.exports = ExpenseNote;
