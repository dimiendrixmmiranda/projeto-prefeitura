'use client'

import Comercio from "@/core/comercio/Comercio";
import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBagShopping, FaClockRotateLeft } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";

interface CardComercioProps {
    comercio: Comercio
}

export default function CardComercio({ comercio }: CardComercioProps) {
    return (
        <li className="flex justify-center items-center text-black">
            <div className="w-full h-full border-2 border-[--verde] rounded-lg p-2 flex flex-col gap-3 max-w-[340px]">
                <div className="relative w-full h-[180px]">
                    <Image alt="image" src={comercio.imagem} fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="text-xl font-bold leading-5 text-center">{comercio.nome}</h2>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 overflow-hidden lg:text-lg lg:gap-4">
                        <div className="leading-5 flex overflow-x-auto max-w-full">
                            <b className="flex gap-1">
                                <FaClockRotateLeft /> Atendimento:
                            </b>
                            <p className="whitespace-nowrap">
                                - Aberto - {comercio.atendimento}
                            </p>
                        </div>
                        <Link href={`tel:+${comercio.telefone}`}>
                            <p className="leading-5 flex overflow-x-auto max-w-full">
                                <b className="flex items-center gap-1">
                                    <BsTelephoneFill className="text-[.9em]" />Telefone:
                                </b>
                                {comercio.telefone}
                            </p>
                        </Link>
                        <Link href={'/'} className="leading-5 flex overflow-x-auto max-w-full">
                            <b className="flex gap-1">
                                <IoLocation />Endereço:
                            </b>
                            <p className="whitespace-nowrap">
                                {comercio.endereco}
                            </p>
                        </Link>
                        <p className="leading-5 flex flex-col sm:flex-row">
                            <b className="flex gap-1">
                                <FaBagShopping /> Tipo:
                            </b>
                            {comercio.tipo}
                        </p>
                    </div>
                    <ul className="w-full flex text-2xl lg:max-w-[85%] lg:mx-auto ">
                        {
                            comercio.redesSociais.map((rede, i) => {
                                return (
                                    <li key={i} className="flex-1 flex justify-center">
                                        <Link href={rede.link}>
                                            {rede.icone}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}