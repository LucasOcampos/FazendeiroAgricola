import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';
import LoginFormSignUp from "./LoginFormSignUp/LoginFormSignUp";
import LoginFormLogin from "./LoginFormLogin/LoginFormLogin";
import LoginPanelContainer from "../LoginPanelContainer/LoginPanelContainer";
import {ToastContainer} from 'react-toastify';
import {UserAuth} from "../AuthContext/AuthContext";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const {user, emailPasswordLogin, resetPassword, createUserEmailPassword} = UserAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigateTo = useNavigate();

    function onChangeEmailHandler(event) {
        event.target.classList.remove("error");
        setEmail(event.target.value);
    }

    function onChangePasswordHandler(event) {
        event.target.classList.remove("error");
        setPassword(event.target.value);
    }

    async function onClickLoginHandler(event) {
        event.preventDefault();
        try {
            await emailPasswordLogin(event.target, email, password);
        } catch (error) {
            throw error;
        }
    }

    async function onClickSignUpHandler(event) {
        event.preventDefault();
        try {
            await createUserEmailPassword(event.target, email, password);
        } catch (error) {
            throw error;
        }
    }

    async function onClickResetPasswordHandler(event) {
        event.preventDefault();
        try {
            await resetPassword(event.target, email);
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (user) {
            navigateTo("/novo-calculo");
        }
    }, [user]);

    return (
        <div id={"login"}>
            <div className="container" id="login-container">
                <LoginFormSignUp
                    onChangeEmailHandler={onChangeEmailHandler}
                    onChangePasswordHandler={onChangePasswordHandler}
                    onClickSignUpHandler={onClickSignUpHandler}/>
                <LoginFormLogin
                    onChangeEmailHandler={onChangeEmailHandler}
                    onChangePasswordHandler={onChangePasswordHandler}
                    onClickLoginHandler={onClickLoginHandler}
                    onClickResetPasswordHandler={onClickResetPasswordHandler}/>
                <LoginPanelContainer/>
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

export default Login;