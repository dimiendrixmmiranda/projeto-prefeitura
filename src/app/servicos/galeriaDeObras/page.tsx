'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Slider3d from "@/components/slider3d/Slider3d";
import Template from "@/components/template/Template";
import { listaDeObras } from "@/core/constants/listaDeObras";

export default function Page() {
    return (
        <Template>
            <div className="w-full p-4 my-auto flex flex-col gap-4 md:p-8 lg:min-h-[80vh] lg:justify-center lg:gap-8">
                <h1 className="text-[--verde] uppercase font-black text-2xl text-center leading-7 md:text-4xl">Lista de Obras Concluídas de nossa Cidade!</h1>
                <Slider3d array={listaDeObras}></Slider3d>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}