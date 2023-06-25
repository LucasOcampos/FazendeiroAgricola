import "./LoginFormSocials.css";
import {UserAuth} from "../../AuthContext/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function LoginFormSocials() {
    const GoogleLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png";
    const {user, googleLogin} = UserAuth();
    const navigateTo = useNavigate();

    async function onClickLoginHandler(event) {
        event.preventDefault();
        try {
            await googleLogin();
        } catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        if (user) {
            navigateTo("/new-expense");
        }
    }, [user]);

    return (
        <div className="social-container">
            <button onClick={onClickLoginHandler} className={"google-auth"}>
                <img
                    src={GoogleLogo}
                    alt={"Google 'G' Logo"}/>
                Login com o Google
            </button>
        </div>
    );
}

export default LoginFormSocials;