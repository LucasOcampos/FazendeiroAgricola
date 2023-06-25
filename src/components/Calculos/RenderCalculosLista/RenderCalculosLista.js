import "./RenderCalculosLista.css";
import ItemCalculo from "../ItemCalculo/ItemCalculo";
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../../firebase-config";
import {useEffect, useState} from "react";

function RenderCalculosLista(props) {
    const [itens, setItens] = useState([]);

    async function getCalculosFirestore() {
        let aux = [];
        const querySnapshot = await getDocs(collection(db, "calculos"));
        querySnapshot.forEach((doc) => {
            aux.push(<ItemCalculo key={doc.id} calculo={doc.data()}></ItemCalculo>);
        });
        setItens(aux);
    }

    useEffect(() => {
        if (!itens.length) {
            getCalculosFirestore().then();
        }
    }, [itens]);

    return itens;
}

export default RenderCalculosLista;