import "../FormNovoCalculo/FormNovoCalculo.css";
import "./BotaoNovoCalculo.css";

function BotaoNovoCalculo(props) {
    return (
        <div>
            <button id={"add-new-expense"} onClick={props.onClickAddNovoCalculoHandler}>Fazer novo cálculo</button>
        </div>
    );
}

export default BotaoNovoCalculo;