const ExpenseLog = require("../src/ExpenseLog");

describe("ExpenseLog", () => {
	let expenseLog;
	beforeEach(() => {
		expenseLog = new ExpenseLog();
	});

	it("should return a list of expenses", () => {
		expenseLog.logExpenseNotes("Ali", 10);
		expect(expenseLog.log).toStrictEqual([{ payer: "Ali", amount: 10 }]);
		expenseLog.logExpenseNotes("Alice", 120);
		expect(expenseLog.log).toStrictEqual([
			{ payer: "Ali", amount: 10 },
			{ payer: "Alice", amount: 120 },
		]);
	});

	it("should not include expense notes that are empty", () => {
		expenseLog.logExpenseNotes();
		expect(expenseLog.log).toStrictEqual([]);
		expenseLog.logExpenseNotes("Alice", 120);
		expect(expenseLog.log).toStrictEqual([{ payer: "Alice", amount: 120 }]);
	});

	it("should be able to return total amount paid by an individual", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Alice", 120);
		let individualExpenses = expenseLog.getIndividualExpenses("Alice");
		expect(individualExpenses).toBe(240);
	});

	it("should be able to return total expenses list sorted by individuals", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Ali", 120);
		const list = expenseLog.getTotalExpensesByIndividualList();
		expect(list).toEqual({ Alice: 240, Ali: 120 });
	});
});
