import "./RenderCalculosLista.css";
import ItemCalculo from "../ItemCalculo/ItemCalculo";

function RenderCalculosLista(props) {
    return props.calculos.map((calculo) => {
        return <ItemCalculo key={calculo.id} calculo={calculo}></ItemCalculo>;
    });
}

export default RenderCalculosLista;