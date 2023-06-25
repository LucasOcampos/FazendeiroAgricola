import "./LoginPanelLeft.css";

function LoginPanelLeft(props) {
    return (
        <div className="overlay-panel overlay-left">
            <h1>Bem vindo/a de volta!</h1>
            <p>Se você já tem uma conta, clique no botão abaixo e faça login!</p>
            <button onClick={props.onClickLoginSignUpHandler} className="ghost" id="signIn">Sign In</button>
        </div>
    );
}

export default LoginPanelLeft;