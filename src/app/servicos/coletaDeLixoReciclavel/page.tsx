'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import ColetaDeLixo from "@/core/coletaDeLixo/ColetaDeLixo";
import { listaDeColetaDeLixo } from "@/core/constants/listaDeColetaDeLixo";
import dynamic from "next/dynamic";
import { useState } from "react";

const MapRoute = dynamic(() => import("@/components/mapRoute"), { ssr: false });
export default function Page() {

    const [dia, setDia] = useState<ColetaDeLixo>(listaDeColetaDeLixo[0])

    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4 z-10 max-w-[1000px] mx-auto lg:gap-10">
                <h2 className="text-[--verde] uppercase font-bold text-3xl text-center leading-8 lg:text-4xl">Rotas da coleta do Caminhão de Lixo Recíclavel</h2>
                <ul className="w-full grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-x-4">
                    {
                        listaDeColetaDeLixo.map((rota, i) => {
                            return (
                                <li key={i} className="flex w-full bg-[--verde] justify-center items-center uppercase font-bold text-white py-1">
                                    <button onClick={() => setDia(rota)}>{rota.diaDaSemana}</button>
                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    {
                        <div>
                            <div>
                                <h3 className="text-xl font-bold uppercase">{dia.diaDaSemana}</h3>
                                <p>{dia.horario}</p>
                                <div>
                                    <div className="flex items-center gap-1 text-sm leading-5">
                                        <p>Caminhao 1</p>
                                        <span className="w-4 h-3 bg-green-500 border border-black"></span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm leading-5">
                                        <p>Caminhao 2</p>
                                        <span className="w-4 h-3 bg-red-500 border border-black"></span>
                                    </div>
                                </div>
                                <div className="w-full h-[300px] border-2 border-[--verde] mt-3 lg:h-[500px] teste">
                                    <MapRoute latitude={-23.55052} longitude={-46.633308} arrayPontosGeral1={dia.pontosCaminhao1} arrayPontosGeral2={dia.pontosCaminhao2} />
                                </div>
                            </div>
                        </div>

                    }
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}