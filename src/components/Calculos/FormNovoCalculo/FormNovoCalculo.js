import "./NewExpenseForm.css";
import {useState} from "react";

function NewExpenseForm(props) {
    const [expense, setExpense] = useState({id: 0.0, title: "", amount: "", date: ""});

    function expenseChangeHandler(event) {
        setExpense((prevState) => {
            return event.target.id === "new-expense-title" ? {
                ...prevState,
                title: event.target.value
            } : event.target.id === "new-expense-amount" ? {
                ...prevState, amount: event.target.value
            } : {
                ...prevState,
                date: event.target.value
            };
        });
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        if (expense.title && expense.amount && expense.date) {
            expense.amount = parseFloat(expense.amount);
            expense.date = new Date(expense.date + "T00:00:00");
            expense.id = Math.random().toString();

            props.addExpenseHandler(expense);
            setExpense({id: 0.0, title: "", amount: "", date: ""});
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Title</label>
                    <input type={"text"} value={expense.title} id={"new-expense-title"}
                           onChange={expenseChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Amount</label>
                    <input type={"number"} value={expense.amount} min={"0.01"} step={"0.01"} id={"new-expense-amount"}
                           onChange={expenseChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Date</label>
                    <input type={"date"} value={expense.date} min={"2019-01-01"} max={"2024-12-31"}
                           id={"new-expense-date"}
                           onChange={expenseChangeHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"reset"} onClick={props.onClickAddNewExpenseHandler}>Cancel</button>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    );
}

export default NewExpenseForm;