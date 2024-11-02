import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect } from "react";
import { Expense } from "../../types/types";
import { fetchExpenses } from "../../utils/expense-utils";

const ExpenseList = () => {
  const expenses = useContext(AppContext);

  // Fetch expenses on component mount
  useEffect(() => {
	loadExpenses();
  }, []);

  // Function to load expenses and handle errors
  const loadExpenses = async () => {
	try {
  	const expenseList = await fetchExpenses();
  	expenses.setExpenses(expenseList);
	} catch (err: any) {
  	console.log(err.message);
	}
  };

  return (
    <ul data-testId="list" className="list-group">
      {expenses.expenses.map((expense: Expense) => (
        <ExpenseItem id={expense.id} description={expense.description} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
