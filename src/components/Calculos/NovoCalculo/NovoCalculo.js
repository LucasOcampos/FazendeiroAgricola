import "./NovoCalculo.css";
import {useState} from "react";
import BotaoNovoCalculo from "../BotaoNovoCalculo/BotaoNovoCalculo";
import FormNovoCalculo from "../FormNovoCalculo/FormNovoCalculo";
import Menu from "../../Menu/Menu";

function NovoCalculo(props) {
    const [inForm, setInForm] = useState(false);

    function onClickAddNovoCalculoHandler() {
        setInForm(!inForm);
    }

    return (
        <div>
            <Menu/>
            <div className={"new-expense"}>
                {!inForm &&
                    <BotaoNovoCalculo onClickAddNovoCalculoHandler={onClickAddNovoCalculoHandler}></BotaoNovoCalculo>}
                {inForm && <FormNovoCalculo addCalculoHandler={props.addCalculoHandler}
                                            onClickAddNovoCalculoHandler={onClickAddNovoCalculoHandler}></FormNovoCalculo>}
            </div>
        </div>
    );
}

export default NovoCalculo;