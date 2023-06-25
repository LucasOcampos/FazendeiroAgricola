import "./NovoCalculo.css";
import 'react-toastify/dist/ReactToastify.css';
import {useState} from "react";
import BotaoNovoCalculo from "../BotaoNovoCalculo/BotaoNovoCalculo";
import FormNovoCalculo from "../FormNovoCalculo/FormNovoCalculo";
import Menu from "../../Menu/Menu";
import {ToastContainer} from "react-toastify";

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
                    <BotaoNovoCalculo onClickAddNovoCalculoHandler={onClickAddNovoCalculoHandler}/>}
                {inForm && <FormNovoCalculo onClickAddNovoCalculoHandler={onClickAddNovoCalculoHandler}/>}
            </div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default NovoCalculo;