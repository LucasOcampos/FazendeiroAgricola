import "./RenderExpensesList.css";
import ItemCalculo from "../ItemCalculo/ItemCalculo";

function RenderExpensesList(props) {
    let expenseItems = <h2 className={"expenses-list__fallback"}>Found no expenses.</h2>;
    if (props.expenses.length > 0) {
        expenseItems = props.expenses.map((expense) => {
            return <ItemCalculo key={expense.id} expense={expense}></ItemCalculo>;
        });
    }

    return expenseItems;
}

export default RenderExpensesList;