import "./NewExpense.css";
import {useState} from "react";
import NewExpenseButton from "../NewExpenseButton/NewExpenseButton";
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import Menu from "../../Menu/Menu";

function NewExpense(props) {
    const [inForm, setInForm] = useState(false);

    function onClickAddNewExpenseHandler() {
        setInForm(!inForm);
    }

    return (
        <div>
            <Menu/>
            <div className={"new-expense"}>
                {!inForm &&
                    <NewExpenseButton onClickAddNewExpenseHandler={onClickAddNewExpenseHandler}></NewExpenseButton>}
                {inForm && <NewExpenseForm addExpenseHandler={props.addExpenseHandler}
                                           onClickAddNewExpenseHandler={onClickAddNewExpenseHandler}></NewExpenseForm>}
            </div>
        </div>
    );
}

export default NewExpense;