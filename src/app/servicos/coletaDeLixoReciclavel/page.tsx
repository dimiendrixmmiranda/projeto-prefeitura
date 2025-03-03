'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { listaDeColetaDeLixo } from "@/core/constants/listaDeColetaDeLixo";
import dynamic from "next/dynamic";

const MapRoute = dynamic(() => import("@/components/mapRoute"), { ssr: false });

export default function Page() {
    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4 z-10 lg:gap-10">
                <h2 className="text-[--verde] uppercase font-bold text-3xl text-center leading-8 lg:text-4xl">Rotas da coleta do Caminhão de Lixo Reciclável</h2>
                <ul className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
                    {
                        listaDeColetaDeLixo.map((item, i) => {
                            return (
                                <li key={i}>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase">{item.diaDaSemana}</h3>
                                        <p>{item.horario}</p>
                                        <div>
                                            <div className="flex items-center gap-1 text-sm leading-5">
                                                <p>Caminhao 1</p>
                                                <span className="w-4 h-3 bg-green-500 border border-black"></span>
                                            </div>
                                        </div>
                                        <div className="w-full h-[300px] border-2 border-[--verde] mt-3 teste">
                                            <MapRoute latitude={-23.55052} longitude={-46.633308} arrayPontosGeral1={item.pontosCaminhao1}/>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}