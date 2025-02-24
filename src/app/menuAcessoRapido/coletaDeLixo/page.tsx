'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import dynamic from "next/dynamic";

const MapRoute = dynamic(() => import("@/components/mapRoute"), { ssr: false });

export default function Page() {
    const pontosCaminhao1 = [
        { latitude: -23.498142960606415, longitude: -49.92419467221324, texto: "Início" },
        { latitude: -23.49629230249419, longitude: -49.92492296974667, texto: "Rua A" },
        { latitude: -23.49389893166386, longitude: -49.925742304471775, texto: "Rua B" },
        { latitude: -23.491922976483995, longitude: -49.925438847166184, texto: "Rua B" },
    ];
    const pontosCaminhao2 = [
        { latitude: -23.49682173520575, longitude: -49.919483907383196, texto: "Início" },
        { latitude: -23.497433983419356, longitude: -49.91775420074131, texto: "Rua A" },
        { latitude: -23.501636155760306, longitude: -49.91647968005781, texto: "Rua B" },
        { latitude: -23.501636155760306, longitude: -49.91390029296026, texto: "Rua B" },
    ];


    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4">
                <h2 className="text-[--verde] uppercase font-bold text-2xl text-center leading-6 lg:text-3xl xl:text-4xl">Rotas da coleta do Caminhão de Lixo</h2>
                <ul className="flex flex-col gap-2 md:grid md:grid-cols-2 xl:grid-cols-3">
                    <li>
                        <div>
                            <h3 className="text-xl font-bold uppercase">Segunda-Feira</h3>
                            <p>06h ás 11h:00 e das 13h:00 as 15h:00</p>
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
                            <div className="w-full h-[300px] border-2 border-[--verde] mt-3 teste">
                                <MapRoute latitude={-23.55052} longitude={-46.633308} arrayPontosGeral1={pontosCaminhao1} arrayPontosGeral2={pontosCaminhao2} />
                            </div>
                        </div>
                    </li>
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}