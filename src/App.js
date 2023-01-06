import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import AddExpense from "./components/NewExpense/AddExpense";

const initial_expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300.55,
    date: new Date(2022, 2, 26),
  },
  {
    id: "e2",
    title: "Utility Payment",
    amount: 55.67,
    date: new Date(2022, 2, 26),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 421.3,
    date: new Date(2022, 2, 26),
  },
  {
    id: "e4",
    title: "Netflix",
    amount: 12.3,
    date: new Date(2022, 2, 26),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      console.log(newExpense);
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <AddExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
