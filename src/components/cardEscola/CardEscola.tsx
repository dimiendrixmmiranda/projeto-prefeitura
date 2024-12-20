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
import Link from "next/link";

interface CardEscolaProps {
    escola: Escola
}

export default function CardEscola({ escola }: CardEscolaProps) {
    const [escolaAtual, setEscolaAtual] = useState<Escola | null>(null)
    const [visible, setVisible] = useState(false)
    return (
        <div className="w-[95%] max-w-[380px] flex flex-col p-3 gap-4 border-2 border-[--verde] relative text-[--verde]">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mx-auto" style={{ boxShadow: '0px 0px 2px 3px var(--verde)' }}>
                <Image alt="escola" src={escola.imagem} fill className="object-cover"></Image>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h2 className="font-bold text-2xl leading-7">{escola.nome}</h2>
                <p>{escola.tipo}</p>
            </div>
            <div>
                <p className="flex items-center gap-1"><b className="flex items-center gap-1"><IoPersonSharp /> Diretora:</b> {escola.diretora}</p>
                <div className="flex gap-1 items-start">
                    <b className="flex gap-1 items-center whitespace-nowrap"><FaBook />Ensinos Oferecidos:</b>
                    <p>{escola.ensino.map((escolaItem, i) => {
                        return (
                            escola.ensino.length -1 <= i ? ` ${escolaItem}` : `${escolaItem} /`
                        )
                    })}</p>
                </div>
                <Link href={'/'}>
                    <p className="flex gap-1 items-center"><b className="flex gap-1 items-center"><IoLocationSharp />Endereço:</b> {escola.endereco}</p>
                </Link>
                <p className="flex gap-1 items-center"><b className="flex gap-1 items-center"><BsFillHouseDoorFill />Bairro:</b> {escola.bairro}</p>
                <Link href={`tel:+${escola.telefone}`}>
                    <p className="flex gap-1 items-center"><b className="flex gap-1 items-center"><MdOutlinePermPhoneMsg />Telefone:</b> {escola.telefone}</p>
                </Link>
            </div>
            <div className="flex-1"></div>
            <ul className="flex gap-2 justify-center items-end text-3xl h-[50px] -mt-4">
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
                                <Image alt={escola.nome} src={escola.imagem} fill className="object-cover"></Image>
                            </div>
                            <div className="text-center">
                                <h1 className="font-black text-2xl">{escola.nome}</h1>
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