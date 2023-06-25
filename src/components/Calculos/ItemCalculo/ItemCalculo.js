import './ItemCalculo.css'
import Card from "../../Card/Card";

function ItemCalculo(props) {
    return (
        <Card className="expense-item">
            <div className={"expense-item__description"}>
                <h2>{props.calculo.produto}</h2>
                <div className={"expense-item__price"}>
                    <p>Valor de Custo: </p>
                    {props.calculo.valorDeCusto}
                </div>
                <div className={"expense-item__price"}>
                    <p>Valor de Venda: </p>
                    {props.calculo.valorDeVenda}
                </div>
                <div className={"expense-item__price"}>
                    <p>Status: </p>
                    {props.calculo.status}
                </div>
            </div>
        </Card>
    );
}

export default ItemCalculo;