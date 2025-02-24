'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Page() {
    const listaDePontos = [
        {
            id: 1,
            texto: 'Ponto 1',
            latitude: -23.503220216808884,
            longitude: -49.924274284449446,
            horarios: '06h:00 - 11h:00 - 17h:00',
            referencia: 'Atrás do Colégio Miguel Dias'
        },
        {
            id: 2,
            texto: 'Ponto 2',
            latitude: -23.50087678307749,
            longitude: -49.92511955789726,
            horarios: '06h:10 - 11h:10 - 17h:10',
            referencia: 'Próximo ao CATT'
        },
        {
            id: 3,
            texto: 'Ponto 3',
            latitude: -23.497880797364324,
            longitude: -49.92280212931018,
            horarios: '06h:20 - 11h:15 - 17h:20',
            referencia: 'Em frente aos Correios'
        },
        {
            id: 4,
            texto: 'Ponto 4',
            latitude: -23.496670378331714,
            longitude:  -49.918623290016626,
            horarios: '06h:20 - 11h:15 - 17h:20',
            referencia: 'Próximo ao Posto Maranata'
        },
    ]
    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-2 md:gap-4 lg:gap-8 xl:gap-10">
                <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Lista de pontos onde passa a Circular</h1>
                <ul className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        listaDePontos.map((ponto) => {
                            return (
                                <li key={ponto.id} className="flex flex-col justify-center items-center">
                                    <h2 className="text-2xl text-center">{ponto.texto}</h2>
                                    <p className="text-center">Horários: {ponto.horarios}</p>
                                    <p className="text-center leading-5">Referência: {ponto.referencia}</p>
                                    <div className="w-[300px] h-[300px] bg-red-400 relative overflow-hidden rounded-full border-2 border-[--verde] mt-2">
                                        <Map latitude={ponto.latitude} longitude={ponto.longitude} texto={ponto.texto} />
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                {/* Arrumar depois */}
                <div className="flex flex-col gap-4 lg:gap-8 lg:my-4">
                    <h2 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Visão Geral de todos os pontos</h2>
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Map latitude={-23.497880797364324} longitude={-49.92280212931018} zoom={15} arrayPontosGeral={listaDePontos} />
                    </div>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    );
}
