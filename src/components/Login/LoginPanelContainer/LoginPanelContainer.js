import "./LoginPanelContainer.css";
import LoginPanelLeft from "./LoginPanelLeft/LoginPanelLeft";
import LoginPanelRight from "./LoginPanelRight/LoginPanelRight";

function LoginPanelContainer() {
    function onClickLoginSignUpHandler(event) {
        let panelClass = "right-panel-active";
        let container = document.getElementById("login-container");
        let inputs = document.querySelectorAll(".form-container > form > input");
        for (let input of inputs) {
            input.value = "";
        }

        if (event.target.id === "signUp") {
            container.classList.add(panelClass);
            // clear login form
        } else {
            container.classList.remove(panelClass);
            // clear signup form
        }
    }

    return (
        <div className="overlay-container">
            <div className="overlay">
                <LoginPanelLeft onClickLoginSignUpHandler={onClickLoginSignUpHandler}></LoginPanelLeft>
                <LoginPanelRight onClickLoginSignUpHandler={onClickLoginSignUpHandler}></LoginPanelRight>
            </div>
        </div>
    );
}

export default LoginPanelContainer