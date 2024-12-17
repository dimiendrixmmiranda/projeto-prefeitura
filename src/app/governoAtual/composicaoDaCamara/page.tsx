'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { listaDeVereadores } from "@/core/constants/listaDeVereadores";
import Vereador from "@/core/vereador/Vereador";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

export default function Page() {
    const [vereadorSelecionado, setVereadorSelecionado] = useState<Vereador | null>(null)
    const [visible, setVisible] = useState(false)
    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4 xl:gap-8">
                <h2 className="text-center text-[--verde] uppercase font-black text-2xl md:text-3xl lg:text-4xl">Vereadores em Exercício</h2>
                <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 max-w-[1000px] mx-auto">
                    {
                        listaDeVereadores.map((vereador, i) => {
                            return (
                                <li key={i}
                                    onClick={() => {
                                        setVisible(true)
                                        setVereadorSelecionado(vereador)
                                    }}
                                    className="flex flex-col p-2 border-2 border-[--verde] cursor-pointer md:gap-2">
                                    <div className="relative w-full h-[140px] overflow-hidden rounded-xl sm:h-[180px] md:h-[230px]">
                                        <Image alt="image" src={'/wireframe.png'} fill className="object-cover"></Image>
                                    </div>
                                    <div className="flex flex-col items-center text-center h-[160px] leading-5 sm:h-[120px]">
                                        <h2 className="font-black text-lg">{vereador.nome}</h2>
                                        <p className="font-semibold">{vereador.cargo}</p>
                                        <div className="flex-1"></div>
                                        <p>{vereador.partido}</p>
                                    </div>
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
                        vereadorSelecionado != null ? (
                            <div className="flex flex-col items-center gap-3">
                                <div className="relative w-[200px] h-[250px] overflow-hidden rounded-lg border-2 border-[--verde]">
                                    <Image alt={vereadorSelecionado?.nome} src={vereadorSelecionado.imagem} fill className="object-cover"></Image>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">{vereadorSelecionado.nome}</h3>
                                </div>
                                <div>
                                    <p>{vereadorSelecionado.descricao}</p>
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