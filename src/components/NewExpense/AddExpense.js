import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm";

const AddExpense = (props) => {
  const saveExpenseHandler = (savedExpenseData) => {
    const newExpenseData = {
      ...savedExpenseData,
      id: Math.ceil(Math.random()).toString(),
    };
    props.onAddExpense(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseHandler} />
    </div>
  );
};

export default AddExpense;
