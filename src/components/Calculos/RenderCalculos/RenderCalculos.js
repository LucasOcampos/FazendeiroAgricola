import "./RenderExpenses.css";
import Card from "../../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {useState} from "react";
import RenderExpensesList from "../RenderExpensesList/RenderExpensesList";
import ChartCalculo from "../ChartCalculo/ChartCalculo";
import Menu from "../../Menu/Menu";

function RenderExpenses(props) {
    const [filterYear, setFilterYear] = useState("");

    let expenses = props.expenses;
    if (filterYear) {
        expenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(filterYear));
    }

    function onChangeExpensesFilterHandler(event) {
        setFilterYear(event.target.value);
    }

    return (
        <div>
            <Menu/>
            <Card className={"expenses"}>
                <ExpensesFilter initialSelected={filterYear}
                                onChangeExpensesFilterHandler={onChangeExpensesFilterHandler}></ExpensesFilter>
                <ChartCalculo expenses={expenses}></ChartCalculo>
                <RenderExpensesList expenses={expenses}></RenderExpensesList>
            </Card>
        </div>
    );
}

export default RenderExpenses;