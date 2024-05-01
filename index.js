// You are given an array representing a series of transactions in a small business.
// Each transaction is an array containing the transaction type ("income" or "expense") and the amount.
const transactions = [
  ["income", 1000],
  ["income", 1500],
  ["expense", 500],
  ["expense", 300],
  ["income", 700],
];

/*****************************************************************
Part 1: Transaction Analysis

Task 1) Create a new array containing only the income transactions.
       Output 1) [["income", 1000], ["income", 1500], ["income", 700]]

Task 2) Create a new array containing only the expense transactions.
       Output 2) [["expense", 500], ["expense", 300]]

******************************************************************/
//task 1)
const incomes = transactions.filter((inc) => {
  if (inc[0] === "income") {
    return true;
  } else {
    return false;
  }
});

console.log(incomes);

//task 2)
const expenses = transactions.filter((inc) => {
  if (inc[0] === "expense") {
    return true;
  } else {
    return false;
  }
});

// console.log(expenses);

/*****************************************************************
Part 2: Financial Summary

Task 3) Calculate the total income and return it.
       Output 3) 3200

Task 4) Calculate the total expenses and return it.
       Output 4) 800

******************************************************************/
// task 3)
const totalIncome = transactions
  .filter((inc) => inc[0] === "income")
  .reduce((total, inc) => total + inc[1], 0);

console.log(totalIncome);

// task 4)
const totalExpens = transactions
  .filter((inc) => inc[0] === "expense")
  .reduce((total, inc) => total + inc[1], 0);

console.log(totalExpens);

/*****************************************************************
Part 3: Net Analysis

Task 5) Calculate the net total (total income - total expenses) and return it.
       Output 5) 2400

Task 6) Identify and create a new array with transactions (both incomes and expenses) above $500.
       Output 6) [["income", 1000], ["income", 1500]]

******************************************************************/
//task 5)
let net = totalIncome - totalExpens;

console.log(net);

//task 6)
const above = transactions.filter((inc) => {
  if (inc[1] > 500) {
    return true;
  } else {
    return false;
  }
});
console.log(above);
// Note: Use appropriate JavaScript array iteration methods such as filter, reduce, etc., to achieve the desired output for each task.
