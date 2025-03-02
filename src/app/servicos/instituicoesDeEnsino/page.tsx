'use client';

import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardEscola from "@/components/cardEscola/CardEscola";
import Template from "@/components/template/Template";
import { listaDeEscolas } from "@/core/constants/listaDeEscolas";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Page() {
    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4">
                <h2 className="uppercase font-bold text-2xl text-center text-[--verde] md:text-3xl lg:text-4xl">Lista de Instituições de ensino de nossa cidade</h2>
                <ul className="flex flex-col gap-4 max-w-[1200px] mx-auto md:grid md:grid-cols-2 xl:grid-cols-3">
                    {
                        listaDeEscolas.map((escola, i) => {
                            return (
                                <li key={i} className="flex justify-center">
                                    <CardEscola escola={escola}></CardEscola>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-4 lg:gap-8 lg:my-4">
                    <h2 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Visão Geral de todos os Hospitais e postos Da cidade</h2>
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Map latitude={listaDeEscolas[0].latitude} longitude={listaDeEscolas[0].longitude} zoom={15} arrayPontosGeral={listaDeEscolas}/>
                    </div>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}