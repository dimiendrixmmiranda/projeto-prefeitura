'use client'
import { Escola } from "@/core/escola/Escola";
import Image from "next/image";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import RedeSocial from "../redesSociais/RedeSocial";
import { IoPersonSharp } from "react-icons/io5";
import { FaBook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useState } from "react";
import { Dialog } from "primereact/dialog";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });
import Link from "next/link";

interface CardEscolaProps {
    escola: Escola
}

export default function CardEscola({ escola }: CardEscolaProps) {
    const [escolaAtual, setEscolaAtual] = useState<Escola | null>(null)
    const [visible, setVisible] = useState(false)
    return (
        <div className="max-w-[380px] w-full p-3 gap-4 border-2 border-[--verde] relative text-[--verde]" style={{display: 'grid', gridTemplateRows: '140px 100px 125px 40px 200px auto'}}>
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mx-auto" style={{ boxShadow: '0px 0px 2px 3px var(--verde)' }}>
                <Image alt="escola" src={escola.imagem} fill className="object-cover"></Image>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h2 className="font-bold text-2xl leading-7">{escola.texto}</h2>
                <p>{escola.tipo}</p>
            </div>
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <IoPersonSharp />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Diretora: {escola.diretora}</span>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <FaBook />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Ensinos Oferecidos: {
                            escola.ensino.map((escolaItem, i) => {
                                return (
                                    escola.ensino.length - 1 <= i ? ` ${escolaItem}` : `${escolaItem} /`
                                )
                            })}</span>
                    </div>
                </div>
                <Link href={`https://www.google.com/maps?q=${escola.latitude},${escola.longitude}`} style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <IoLocationSharp />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Endereço: {escola.endereco}</span>
                    </div>
                </Link>
                <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <BsFillHouseDoorFill />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Bairro: {escola.bairro}</span>
                    </div>
                </div>
                <Link href={`tel:+${escola.telefone}`} style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <MdOutlinePermPhoneMsg />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Telefone: {escola.telefone}</span>
                    </div>
                </Link>
            </div>
            <button className="w-full flex justify-center items-center bg-[--verde] text-white uppercase font-bold text-2xl py-1">
                <Link href={`https://www.google.com/maps?q=${escola.latitude},${escola.longitude}`}>Me leve Até lá!</Link>
            </button>
            <div className="w-full h-[200px] bg-black border-2 border-[--verde] z-10">
                <Map latitude={escola.latitude} longitude={escola.longitude} texto={escola.texto} iconUrl="/icones/escola.png" />
            </div>
            <ul className="grid grid-cols-5 gap-2 justify-center items-end text-3xl h-[50px] z-20 w-full">
                {
                    escola.redesSociais.map((escola, i) => {
                        return (
                            <RedeSocial key={i} icone={escola.icone} link={escola.link} nome={escola.nome}></RedeSocial>
                        )
                    })
                }
            </ul>
            <div className="absolute top-2 right-2 text-4xl p-1 cursor-pointer"
                onClick={() => {
                    setVisible(true)
                    setEscolaAtual(escola)
                }}>
                <HiMagnifyingGlassCircle />
            </div>

            {
                escolaAtual != null ? (
                    <Dialog
                        visible={visible}
                        className='w-[90%] h-[90%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                        onHide={() => setVisible(false)}
                    >
                        <div className="flex flex-col gap-4 items-center text-[--verde]">
                            <div className="relative w-[180px] h-[180px] overflow-hidden rounded-full border-2 border-[--verde]">
                                <Image alt={escola.texto} src={escola.imagem} fill className="object-cover"></Image>
                            </div>
                            <div className="text-center">
                                <h1 className="font-black text-2xl">{escola.texto}</h1>
                                <h3 className="text-lg">{escola.bairro}</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h2 className="font-bold text-xl">Sobre a Escola:</h2>
                                <ul>
                                    {
                                        escola.descricaoEscola.map((paragrafo, i) => {
                                            return (
                                                <li key={i}>
                                                    <p style={{ textIndent: '2em' }}>{paragrafo}</p>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <p>{escola.descricaoEscola}</p>
                            </div>
                        </div>
                    </Dialog>
                ) : ''
            }
        </div >
    )
}