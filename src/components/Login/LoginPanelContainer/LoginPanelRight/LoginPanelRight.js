import "./LoginPanelRight.css";

function LoginPanelRight(props) {
    return (
        <div className="overlay-panel overlay-right">
            <h1>Oi, tudo bem?</h1>
            <p>Se você não tem uma conta, clique no botão abaixo e crie uma agora mesmo!</p>
            <button onClick={props.onClickLoginSignUpHandler} className="ghost" id="signUp">Sign Up</button>
        </div>
    );
}

export default LoginPanelRight;