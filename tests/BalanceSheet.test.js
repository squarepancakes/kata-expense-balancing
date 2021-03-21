const BalanceSheet = require("../src/BalanceSheet");
const ExpenseLog = require("../src/ExpenseLog");

describe("BalanceSheet", () => {
	let balanceSheet, expenseLog;

	beforeEach(() => {
		balanceSheet = new BalanceSheet();
		expenseLog = new ExpenseLog();
	});

	it("should return a list of payers and the total amount they have paid", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Ali", 120);

		let individualExpenses = expenseLog.getTotalExpensesByIndividualList();
		balanceSheet.populateContent(individualExpenses);
		expect(balanceSheet.content).toStrictEqual([
			{ name: "Alice", totalExpense: 240 },
			{ name: "Ali", totalExpense: 120 },
		]);
	});

	it("should identify the people who paid the most and the amount paid", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Ali", 120);
		expenseLog.logExpenseNotes("Charlie", 12);

		let individualExpenses = expenseLog.getTotalExpensesByIndividualList();
		balanceSheet.populateContent(individualExpenses);
		const person = balanceSheet.getPeopleWhoPaidMost().sort();
		expect(person).toEqual(["Ali", "Alice"].sort());
	});

	it("should calculate the total expense spent by the group", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Ali", 120);
		expenseLog.logExpenseNotes("Charlie", 12);

		let individualExpenses = expenseLog.getTotalExpensesByIndividualList();
		balanceSheet.populateContent(individualExpenses);
		const totalExpensesOfGroup = balanceSheet.getTotalGroupExpenses();
		expect(totalExpensesOfGroup).toBe(252);
	});

	it("should calculate the required amount each person should have paid for the trip", () => {
		expenseLog.logExpenseNotes("Alice", 120);
		expenseLog.logExpenseNotes("Ali", 120);
		expenseLog.logExpenseNotes("Charlie", 12);

		let individualExpenses = expenseLog.getTotalExpensesByIndividualList();
		balanceSheet.populateContent(individualExpenses);
		const meanExpenseByPersonCount = balanceSheet.getMeanExpense();
		expect(meanExpenseByPersonCount).toBe(84);
	});

	it("should calculate the difference between the amount paid by the person and the amount required", () => {
		expenseLog.logExpenseNotes("Ali", 120);
		expenseLog.logExpenseNotes("Charlie", 10);

		let individualExpenses = expenseLog.getTotalExpensesByIndividualList();
		balanceSheet.populateContent(individualExpenses);
	});
});
