import LoginFormSocials from "../LoginFormSocials/LoginFormSocials";
import "./LoginFormSignUp.css";

function LoginFormSignUp(props) {
    return (
        <div className="form-container sign-up-container">
            <form>
                <h1>Crie sua conta</h1>
                <LoginFormSocials></LoginFormSocials>
                <span>ou use seus dados para registro</span>
                <input className={"email"} onChange={props.onChangeEmailHandler} type="email" placeholder="Email"/>
                <input className={"password"} onChange={props.onChangePasswordHandler} type="password"
                       placeholder="Password"/>
                <button onClick={props.onClickSignUpHandler} className={"login-signup-button"}>Sign In</button>
            </form>
        </div>
    );
}

export default LoginFormSignUp;