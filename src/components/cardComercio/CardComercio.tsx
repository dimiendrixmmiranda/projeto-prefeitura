'use client'

import Comercio from "@/core/comercio/Comercio";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBagShopping, FaClockRotateLeft } from "react-icons/fa6";
import { IoLocation, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

interface CardComercioProps {
    comercio: Comercio
}

export default function CardComercio({ comercio }: CardComercioProps) {
    return (
        <li className="flex justify-center items-center text-black" id={`${comercio.localizacao[0]}`}>
            <div className="w-full h-full border-2 border-[--verde] rounded-lg p-2 flex flex-col gap-3 max-w-[340px]">
                <div className="relative w-full h-[180px]">
                    <Image alt="image" src={comercio.imagem || '/wireframe.png'} fill className="object-cover"></Image>
                </div>
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="text-xl font-bold leading-5 text-center">{comercio.nome}</h2>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2 overflow-hidden lg:text-lg lg:gap-4">
                        <div className="leading-5 max-w-full text-[.75em] sm:text-[.9em]">
                            <p className="flex items-center leading-4">
                                <FaClockRotateLeft className="mr-1" /> Atendimento: - Aberto - {comercio.horarioDeAtendimento}
                            </p>
                        </div>
                        <Link href={`tel:+${comercio.telefone}`}>
                            <p className="leading-5 flex items-center gap-1">
                                <BsTelephoneFill />Telefone: {comercio.telefone}
                            </p>
                        </Link>
                        <Link href={'/'} className="leading-5 flex overflow-x-auto max-w-full">
                            <p className="flex items-center gap-1">
                                <IoLocation />Endereço: {comercio.endereco}
                            </p>
                        </Link>
                        <p className="leading-5 flex items-center gap-1">
                            <FaBagShopping /> Tipo:{comercio.categoriaComercio}
                        </p>
                    </div>
                    <ul className="w-full flex text-2xl lg:max-w-[85%] lg:mx-auto ">
                        {
                            comercio.redesSociais?.map((rede, index) =>
                                rede.link ? (
                                    <li key={index} className="flex-1 flex justify-center items-center">
                                        <Link href={rede.link} style={{ color: "#3F3F46" }}>
                                            {
                                                rede.nome.toLowerCase() == 'whatsapp' ? <IoLogoWhatsapp className="text-3xl" /> : ''
                                            }
                                            {
                                                rede.nome.toLowerCase() == 'instagram' ? <AiFillInstagram className="text-3xl" /> : ''
                                            }
                                            {
                                                rede.nome.toLowerCase() == 'facebook' ? <IoLogoFacebook className="text-3xl" /> : ''
                                            }
                                            {
                                                rede.nome.toLowerCase() == 'email' ? <MdEmail className="text-3xl" /> : ''
                                            }
                                        </Link>
                                    </li>
                                ) : null
                            )
                        }
                    </ul>
                </div>
            </div>
        </li>
    )
}