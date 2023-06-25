import "./RenderCalculos.css";
import Card from "../../Card/Card";
import RenderCalculosLista from "../RenderCalculosLista/RenderCalculosLista";
import Menu from "../../Menu/Menu";

function RenderCalculos(props) {
    let calculos = props.calculos;

    return (
        <div>
            <Menu/>
            <Card className={"expenses"}>
                <RenderCalculosLista calculos={calculos}></RenderCalculosLista>
            </Card>
        </div>
    );
}

export default RenderCalculos;