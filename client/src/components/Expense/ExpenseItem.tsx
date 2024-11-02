import { useContext } from "react";
import { AppContext } from "../../context/AppContext"
import { Expense } from "../../types/types";

const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here

  const expenses = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    // Exercise: Remove expense from expenses context array
    expenses.setExpenses(expenses.expenses.filter(Expense => currentExpense.description !== Expense.description));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div data-testId="name">{currentExpense.description}</div>
      <div data-testId="cost">${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;
