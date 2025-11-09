'use client'
import { FaHardHat } from "react-icons/fa";
import TituloSecao from "../base/tituloSecao/TituloSecao";
import { useListaDeObras } from "@/lib/hooks/useListaDeObras";
import Slider3DObras from "../base/slider3dObras/Slider3dObras";

export default function GaleriaDeObras() {
    const { obras } = useListaDeObras();
    return (
        <div>
            <TituloSecao icone={<FaHardHat />} texto="Galeria de Obras" />
            <Slider3DObras slides={obras} />
        </div>
    )
}