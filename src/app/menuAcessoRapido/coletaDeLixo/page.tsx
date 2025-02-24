'use client';
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
            <div className="w-full h-[300px]">
                <MapRoute latitude={-23.55052} longitude={-46.633308} arrayPontosGeral1={pontosCaminhao1} arrayPontosGeral2={pontosCaminhao2} />
            </div>
            <h2>Aqui</h2>
        </Template>
    )
}