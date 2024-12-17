'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import CardDetalhes from "@/components/cardDetalhes/CardDetalhes";
import Template from "@/components/template/Template";
import { listaDePrefeitos } from "@/core/constants/listaDePrefeitos";
import Prefeito from "@/core/prefeito/Prefeito";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function Page() {
    const [prefeitoSelecionado, setPrefeitoSelecionado] = useState<Prefeito | null>(null)
    const [visible, setVisible] = useState(false)

    return (
        <Template>
            <div className="text-black p-4 max-w-[1100px] mx-auto flex flex-col gap-4">
                <h2 className="text-2xl font-black leading-7 uppercase text-[--verde] xl:text-3xl xl:my-4">Lista de Prefeitos que já governaram nossa Cidade:</h2>
                <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {
                        listaDePrefeitos.map((prefeito, i) => {
                            return (
                                <li key={i} className="cursor-pointer"
                                    onClick={() => {
                                        setVisible(true)
                                        setPrefeitoSelecionado(prefeito)
                                    }}>
                                    <CardDetalhes prefeito={prefeito}></CardDetalhes>
                                </li>
                            )
                        })
                    }
                </ul>

                <Dialog
                    visible={visible}
                    className='w-[90%] h-[90%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                    onHide={() => setVisible(false)}
                >
                    {
                        prefeitoSelecionado != null ? (
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative w-[200px] h-[250px] overflow-hidden rounded-lg border-2 border-[--verde]">
                                    <Image alt={prefeitoSelecionado?.nome} src={prefeitoSelecionado.imagem} fill className="object-cover"></Image>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{prefeitoSelecionado.nome}</h3>
                                    <p className="text-center">{prefeitoSelecionado.ano}</p>
                                </div>
                                <div>
                                    <p>{prefeitoSelecionado.descricao}</p>
                                </div>
                            </div>
                        ) : ''
                    }
                </Dialog>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}