import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../../../firebase-config";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithRedirect,
    signOut,
} from "firebase/auth";
import {toast} from "react-toastify";

const AuthContext = createContext();

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({});

    function googleLogin() {
        const provider = new GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });

        signInWithRedirect(auth, provider)
            .then()
            .catch(error => {
                throw error;
            });
    }

    function emailPasswordLogin(pressedButton, email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then()
            .catch(error => {
                treatCredentialErrors(pressedButton, error);
            });
    }

    function createUserEmailPassword(pressedButton, email, password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                signInWithEmailAndPassword(auth, email, password)
                    .then()
                    .catch(error => {
                        treatCredentialErrors(pressedButton, error);
                    });
            })
            .catch(error => {
                treatCredentialErrors(pressedButton, error);
            });
    }

    function logoutUser() {
        signOut(auth)
            .then()
            .catch(error => {
                throw error;
            });
    }

    function resetPassword(pressedButton, email) {
        let element = document.querySelector(".sign-in-container > form > .email");

        sendPasswordResetEmail(auth, email)
            .then(() => {
                element.value = "";
                toast.success(`Um email foi enviado para '${email}', e assim você pode redefinir sua senha.`,
                    {
                        theme: "dark",
                    });
            })
            .catch(error => {
                treatCredentialErrors(pressedButton, error);
            });
    }

    function treatCredentialErrors(pressedButton, error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let buttonParent = pressedButton.parentNode;
        let email = buttonParent.getElementsByClassName("email")[0];
        let password = buttonParent.getElementsByClassName("password")[0];

        if (errorCode === "auth/invalid-email") {
            email.classList.add("error");
            email.focus();
            email.select();
            toast.error("Por favor insira um email válido.", {
                theme: "dark",
            });
        } else if (errorCode === "auth/email-already-in-use") {
            email.classList.add("error");
            email.focus();
            email.select();
            toast.error(
                "Este email já está em uso, por favor cadastre um novo email ou tente redefinir a sua senha.",
                {
                    theme: "dark",
                });
        } else if (errorCode === "auth/missing-email") {
            email.classList.add("error");
            email.focus();
            email.select();
            toast.error("Por favor insira um email.",
                {
                    theme: "dark",
                });
        } else if (errorCode === "auth/wrong-password") {
            password.classList.add("error");
            password.focus();
            password.select();
            toast.error("Sua senha está incorreta.",
                {
                    theme: "dark",
                });
        } else if (errorCode === "auth/missing-password") {
            password.classList.add("error");
            password.focus();
            password.select();
            toast.error("Por favor insira sua email.",
                {
                    theme: "dark",
                });
        } else if (errorCode === "auth/user-not-found") {
            let current_email = email.value;
            let current_password = password.value;

            document.getElementById("signUp").click();
            let signUpForm = document.querySelector(".sign-up-container");

            signUpForm.getElementsByClassName("email")[0].value = current_email;
            signUpForm.getElementsByClassName("password")[0].value = current_password;
        } else {
            console.error(`Error Code ${errorCode}: ${errorMessage}`);
        }
    }

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    });

    return (
        <AuthContext.Provider
            value={{googleLogin, emailPasswordLogin, createUserEmailPassword, logoutUser, resetPassword, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth() {
    return useContext(AuthContext);
}