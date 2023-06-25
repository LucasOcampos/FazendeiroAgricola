import Login from "./components/Login/LoginForm/Login";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthContextProvider} from "./components/Login/AuthContext/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import {useState} from "react";
import NovoCalculo from "./components/Calculos/NovoCalculo/NovoCalculo";
import RenderCalculos from "./components/Calculos/RenderCalculos/RenderCalculos";

function App() {
    const [calculos, setCalculos] = useState([
        {
            id: 1.0,
            produto: "Couve",
            valorDeCusto: "10",
            valorDeVenda: "20",
            status: "Viável",
        },
    ]);

    function addCalculoHandler(calculos) {
        setCalculos((prevState) => {
            return (
                [
                    calculos,
                    ...prevState,
                ]
            );
        })
    }

    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Routes>
                    <Route exact path={"/"} element={<Login/>}/>
                    <Route exact path={"/login"} element={<Login/>}/>
                    <Route exact path={"/novo-calculo"} element={<PrivateRoute/>}>
                        <Route path={"/novo-calculo"}
                               element={<NovoCalculo addCalculoHandler={addCalculoHandler}></NovoCalculo>}/>
                    </Route>
                    <Route exact path={"/calculos"} element={<PrivateRoute/>}>
                        <Route path={"/calculos"} element={<RenderCalculos calculos={calculos}></RenderCalculos>}/>
                    </Route>
                </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;