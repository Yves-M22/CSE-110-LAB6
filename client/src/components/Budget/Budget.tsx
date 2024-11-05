import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { updateBudget } from "../../utils/budget-utils";

const Budget = () => {
  const expenses = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(expenses.budget);

  const editBudget = (input: number) => {
    console.log("budget: ", input)
    expenses.setBudget(input);
    console.log("newbudget: ", input);
    updateBudget(input);
 }

  return (
    <div className="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      <div> Budget: $</div>
      <div contentEditable="true" onInput={(event : React.FormEvent<HTMLParagraphElement>) => setNewBudget(event.currentTarget.innerText as unknown as number)}>{expenses.budget}</div>
      <button type="button" onClick={() => editBudget(newBudget)} className="btn btn-primary mt-3">
            Change
          </button>
    </div>
  );
};

export default Budget;