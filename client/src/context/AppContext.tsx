import { createContext, useState } from "react";
import { Expense } from "../types/types";


// Exercise: Create add budget to the context

interface AppContextType {
  budget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>,
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
}

export const initialState: AppContextType = {
  budget: 1000,
  setBudget: () => {},
  expenses: [],
  setExpenses: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = (props: any) => {
  const [expenses, setExpenses] = useState<Expense[]>(initialState.expenses);
  const [curBudget, setCurBudget]  = useState(initialState.budget);
  
  return (
    <AppContext.Provider
      value={{
        budget: curBudget,
        setBudget: setCurBudget,
        expenses: expenses,
        setExpenses: setExpenses,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


