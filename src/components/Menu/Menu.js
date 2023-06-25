import "./Menu.css";
import {UserAuth} from "../Login/AuthContext/AuthContext";
import {useNavigate} from "react-router-dom";

function Menu() {
    const {logoutUser} = UserAuth();
    const navigateTo = useNavigate();

    async function onClickLogoutHandler() {
        try {
            await logoutUser();
        } catch (error) {
            throw error;
        }
    }

    function onClickNewExpenseRedirectHandler(event) {
        event.preventDefault();
        navigateTo("/novo-calculo");
    }

    function onClickExpensesRedirectHandler(event) {
        event.preventDefault();
        navigateTo("/calculos");
    }

    return (
        <header id="header-menu">
            <nav>
                <ul>
                    <li><a onClick={onClickNewExpenseRedirectHandler} href="">Novo Cálculo</a></li>
                    <li><a onClick={onClickExpensesRedirectHandler} href="">Cálculos Feitos</a></li>
                    <li><a onClick={onClickLogoutHandler} href="">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Menu;