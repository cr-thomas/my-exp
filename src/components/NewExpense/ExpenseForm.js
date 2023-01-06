import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     newTitle: "",
  //     newAmount: "",
  //     newDate: "",
  //   });

  // Use this way when we want the state change to depend on the previous state
  //   const inputHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, newTitle: event.target.value };
  //     });
  //   };

  const inputHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setNewAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setNewDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newExpenseData = {
      title: newTitle,
      amount: newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(newExpenseData);

    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={inputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2023-12-31"
            value={newDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
