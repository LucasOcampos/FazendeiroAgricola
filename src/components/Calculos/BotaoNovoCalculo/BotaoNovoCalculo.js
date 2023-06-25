import "../NewExpenseForm/NewExpenseForm.css";
import "./NewExpenseButton.css";

function NewExpenseButton(props) {
    return (
        <div>
            <button id={"add-new-expense"} onClick={props.onClickAddNewExpenseHandler}>Add New Expense</button>
        </div>
    );
}

export default NewExpenseButton;