import "./LoginFormLogin.css";
import LoginFormSocials from "../LoginFormSocials/LoginFormSocials";

function LoginFormLogin(props) {
    return (
        <div className="form-container sign-in-container">
            <form>
                <h1>Login</h1>
                <LoginFormSocials></LoginFormSocials>
                <span>ou use sua conta</span>
                <input className={"email"} onChange={props.onChangeEmailHandler} type="email" placeholder="Email"/>
                <input className={"password"} onChange={props.onChangePasswordHandler} type="password"
                       placeholder="Password"/>
                <a onClick={props.onClickResetPasswordHandler} href="">Esqueceu sua senha?</a>
                <button type={"submit"} onClick={props.onClickLoginHandler} className={"login-signup-button"}>Sign In
                </button>
            </form>
        </div>
    );
}

export default LoginFormLogin;