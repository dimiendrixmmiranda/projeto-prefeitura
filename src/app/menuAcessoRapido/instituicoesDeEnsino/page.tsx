import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardEscola from "@/components/cardEscola/CardEscola";
import Template from "@/components/template/Template";
import { listaDeEscolas } from "@/core/constants/listaDeEscolas";

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
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}