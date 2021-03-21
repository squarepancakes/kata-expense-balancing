const ExpenseNote = require("./ExpenseNote");

class ExpenseLog {
	constructor() {
		this.log = [];
	}

	logExpenseNotes(payer, amount) {
		const newExpense = this.initialiseNote(payer, amount);
		const isValidExpense = Object.values(newExpense).every((item) => !!item);
		if (isValidExpense) {
			this.log.push(newExpense);
		}
	}

	initialiseNote(payer, amount) {
		const newExpenseNote = new ExpenseNote();
		newExpenseNote.recordExpense(payer, amount);
		return newExpenseNote.expense;
	}

	getIndividualExpenses(payer) {
		const totalIndividualExpenses = this.log.filter(
			(itemLine) => itemLine.payer === payer
		);
		const totalAmount = totalIndividualExpenses.reduce((acc, cur) => {
			return acc + cur.amount;
		}, 0);
		return totalAmount;
	}

	getTotalExpensesByIndividualList() {
		const list = this.log.reduce((acc, curr) => {
			acc[curr.payer] = (acc[curr.payer] || 0) + curr.amount;
			return acc;
		}, {});
		return list;
	}
}

module.exports = ExpenseLog;
