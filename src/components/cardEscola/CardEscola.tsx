'use client'
import { Escola } from "@/core/escola/Escola";
import Image from "next/image";
import Link from "next/link";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";

interface CardEscolaProps {
    escola: Escola
}

export default function CardEscola({ escola }: CardEscolaProps) {
    return (
        <div className="w-[95%] max-w-[380px] flex flex-col p-3 gap-4 border-2 border-[--verde] relative text-[--verde]">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mx-auto" style={{boxShadow: '0px 0px 2px 3px var(--verde)'}}>
                <Image alt="escola" src={escola.imagem} fill className="object-cover"></Image>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h2 className="font-bold text-2xl leading-7">{escola.nome}</h2>
                <p>{escola.tipo}</p>
            </div>
            <div>
                <p><b>Diretora:</b> {escola.diretora}</p>
                <p><b>Ensinos Oferecidos:</b> {escola.ensino.map((ensino, i) => escola.ensino.length - 2 >= i ? `${ensino} | ` : ensino)}</p>
                <p><b>Endereço:</b> {escola.endereco}</p>
                <p><b>Bairro:</b> {escola.bairro}</p>
                <p><b>Telefone:</b> {escola.telefone}</p>
            </div>
            <div className="flex-1"></div>
            <ul className="flex gap-2 justify-center text-3xl">
                {
                    escola.redesSociais.map((escola, i) => {
                        return (
                            <li className='' key={i}>
                                <Link href={escola.link}>
                                    {escola.icone}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="absolute top-2 right-2 text-2xl p-1 cursor-pointer">
                <HiDocumentMagnifyingGlass />
            </div>
        </div>
    )
}