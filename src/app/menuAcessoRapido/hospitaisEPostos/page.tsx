import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardHospitaisEPostos from "@/components/cardHospitaisEPostos/cardHospitaisEPostos";
import Template from "@/components/template/Template";
import { listaDeHospitaisEPostos } from "@/core/constants/listaDeHospitaisEPostos";

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
                <h2 className="text-[--verde] uppercase font-bold text-3xl text-center leading-8 lg:text-4xl">Visão Geral de todos os Hospitais e postos Da cidade</h2>
                {/* VAMOS TER QUE TROCAR O MAP PARA TS MESMO */}
                {/* <div>
                    {
                        <Map latitude={listaDeHospitaisEPostos[0].latitude} longitude={listaDeHospitaisEPostos[0].longitude} arrayPontosGeral={arrayPontosFiltrado}/>
                    }
                </div> */}
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}