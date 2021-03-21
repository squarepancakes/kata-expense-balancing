const ExpenseNote = require("../src/ExpenseNote");

describe("ExpenseNot8e", () => {
	let expense;
	beforeEach(() => {
		expenseNote = new ExpenseNote();
	});

	it("should record nothing if there is no expense", () => {
		expenseNote.recordExpense();
		expect(expenseNote.expense).toStrictEqual({ amount: 0, payer: "" });
	});

	it("should record expense with payer's name and amount spent", () => {
		expenseNote.recordExpense("Ali", 10);
		expect(expenseNote.expense).toStrictEqual({ payer: "Ali", amount: 10 });
		expenseNote.recordExpense("Alice", 90);
		expect(expenseNote.expense).toStrictEqual({ payer: "Alice", amount: 90 });
	});
});
