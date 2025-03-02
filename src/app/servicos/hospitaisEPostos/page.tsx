'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardHospitaisEPostos from "@/components/cardHospitaisEPostos/cardHospitaisEPostos";
import Template from "@/components/template/Template";
import { listaDeHospitaisEPostos } from "@/core/constants/listaDeHospitaisEPostos";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });


export default function Page() {

    return (
        <Template>
            <div className="flex flex-col gap-4 text-black p-4 lg:gap-8">
                <h2 className="text-[--verde] uppercase font-bold text-3xl text-center leading-8 lg:text-4xl">Lista de Hospitais e Postos</h2>
                <ul className="flex flex-col gap-2 max-w-[1200px] mx-auto md:grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        listaDeHospitaisEPostos.map((hospitalEPosto, i) => {
                            return (
                                <li key={i}>
                                    <CardHospitaisEPostos hospitalEPosto={hospitalEPosto}></CardHospitaisEPostos>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="flex flex-col gap-4 lg:gap-8 lg:my-4">
                    <h2 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Visão Geral de todos os Hospitais e postos Da cidade</h2>
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Map latitude={listaDeHospitaisEPostos[0].latitude} longitude={listaDeHospitaisEPostos[0].longitude} zoom={15} arrayPontosGeral={listaDeHospitaisEPostos} iconUrl={'/icones/hospital.png'}/>
                    </div>
                </div>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}