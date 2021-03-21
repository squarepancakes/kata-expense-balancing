// const ExpenseLog = require("../src/ExpenseLog");

class BalanceSheet {
	constructor() {
		this.content = [];
		this.peopleWhoPaidTheMost = [];
		this.totalTripExpenses = null;
	}

	populateContent(totalExpenseList) {
		this.content = Object.keys(totalExpenseList).map((person) => ({
			name: person,
			totalExpense: totalExpenseList[person],
		}));
	}

	getPeopleWhoPaidMost() {
		let highestSpent = 0;
		this.content.map((personObj) => {
			if (personObj.totalExpense >= highestSpent) {
				highestSpent = personObj.totalExpense;
				this.peopleWhoPaidTheMost.push(personObj);
			}
		});
		const nameOfPeopleWhoPaidMost = this.peopleWhoPaidTheMost.map(
			(person) => person.name
		);
		return nameOfPeopleWhoPaidMost;
	}

	getTotalGroupExpenses() {
		this.totalTripExpenses = this.content.reduce((acc, curr) => {
			return acc + curr.totalExpense;
		}, 0);
		return this.totalTripExpenses;
	}

	getMeanExpense() {
		this.getTotalGroupExpenses();
		return this.totalTripExpenses / this.content.length;
	}
}

module.exports = BalanceSheet;
