import "./FormNovoCalculo.css";
import {useState} from "react";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../../firebase-config";
import {toast} from "react-toastify";

function FormNovoCalculo(props) {
    const [calculo, setCalculo] = useState(
        {produto: "", valorDeCusto: "", valorDeVenda: "", status: ""}
    );

    function calculoChangeHandler(event) {
        setCalculo((prevState) => {
            return event.target.id === "new-expense-produto" ? {
                ...prevState,
                produto: event.target.value
            } : event.target.id === "new-expense-valorDeCusto" ? {
                ...prevState,
                valorDeCusto: event.target.value
            } : {
                ...prevState,
                valorDeVenda: event.target.value
            };
        });
    }

    async function addToFirestore(data) {
        await addDoc(collection(db, "calculos"), data);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        if (calculo.produto && calculo.valorDeCusto && calculo.valorDeVenda) {
            calculo.valorDeCusto = parseFloat(calculo.valorDeCusto);
            calculo.valorDeVenda = parseFloat(calculo.valorDeVenda);
            calculo.status = calculo.valorDeCusto < calculo.valorDeVenda ? "Viável" : "Inviável";

            addToFirestore(calculo).then();
            toast.success("Cálculo realizado.",
                {
                    theme: "dark",
                });

            setCalculo({produto: "", valorDeCusto: "", valorDeVenda: "", status: ""});
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={"new-expense__controls"}>
                <div className={"new-expense__control"}>
                    <label>Produto</label>
                    <input type={"text"} value={calculo.produto} id={"new-expense-produto"}
                           onChange={calculoChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Custo de Plantação</label>
                    <input type={"number"} value={calculo.valorDeCusto} min={"0.01"} step={"0.01"}
                           id={"new-expense-valorDeCusto"}
                           onChange={calculoChangeHandler}/>
                </div>
                <div className={"new-expense__control"}>
                    <label>Valor de Venda</label>
                    <input type={"number"} value={calculo.valorDeVenda} min={"0.01"} step={"0.01"}
                           id={"new-expense-valorDeVenda"}
                           onChange={calculoChangeHandler}/>
                </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"reset"} onClick={props.onClickAddNovoCalculoHandler}>Cancelar</button>
                <button type={"submit"}>Adicionar Cálculo</button>
            </div>
        </form>
    );
}

export default FormNovoCalculo;