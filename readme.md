# Expenses Accounts Balancing

This is my solution to the code assignment for Expenses Accounts Balancing

## Assumptions

1. The input data format is not fixed and the input structure can be designed as required by the solution.
2. Other scenarios and edge cases that might encountered in this problem can be added on.

## Question

You and a few friends are going on a holiday to Melbourne. For convenience sake, each friend takes turns to pay for expenses incurred, e.g. one friend pays for a group brunch at Top Paddock Cafe, and another pays for a car rental.

At the end of the trip, how would you determine how much each person has to pay so that the accounts are balanced in the least number of transactions?

## Example scenario 1:

Alice paid $60 for lunch at Top Paddock Cafe
Bob paid $120 for car rental.
Charlie paid $30 for some snacks they shared.

Example output 1:
Alice pays Bob $10.
Charlie pays Bob $40.
Number of transactions: 2

## Example scenario 2:

Ali paid $10.
Zack paid $30.

Example output 2:
Ali pays Zack $10.
Number of transactions: 1

The input data format is not fixed and you are free to design the input structure as required by your code. Feel free to add on other scenarios and edge cases you might encounter in this problem.

## Running the application

1. Unzip the code to a folder on your computer
2. You would need node.js installed on your computer to run this application. You can download it from https://nodejs.org/en/
3. You would need to change the file path in `src/index.js` for `tests/testData/testInput.txt` to the file path on your computer
4. To run the program for the Expenses Accounts Balance, go to the project's folder in your command line and run the command below

```
npm run start
```

## Run unit tests and linter

Before running any scripts, please install development dependencies:

```
npm install
```

You can now run the following scripts:

Run linter

```
npm run lint
```

Run unit tests

```
npm test
```

Run unit tests in watch mode

```
npm run test:watch
```

Run both linter and unit tests

```
npm run test:all
```

Run test coverage

```
npm run test:coverage
```

Open coverage report

```
npm run test:report
```
