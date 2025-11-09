import { FaMountainCity } from "react-icons/fa6";
import TituloSecao from "../base/tituloSecao/TituloSecao";
import { usePontosTuristicos } from "@/lib/hooks/usePontosTuristicos";
import Slider3dPontosTuristicos from "../base/slider3dPontosTuristicos/Slider3dPontosTuristicos";

export default function ConhecaNossaCidade() {
    const { pontosTuristicos } = usePontosTuristicos();
    return (
        <div>
            <TituloSecao icone={<FaMountainCity />} texto="Conheça Nossa Cidade" />
            <Slider3dPontosTuristicos slides={pontosTuristicos} />
        </div>
    )
}