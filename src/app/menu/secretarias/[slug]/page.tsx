'use client'
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";
import Template from "@/components/template/Template";
import { secretarias } from "@/constants/listaDeSecretarias";
import Secretaria from "@/interfaces/Secretaria";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

export default function Page() {
    const { slug } = useParams()
    const [secretaria, setSecretaria] = useState<Secretaria | null>(null)

    useEffect(() => {
        const secretariaAtual = secretarias.filter(secretaria => secretaria.id === slug)[0]
        setSecretaria(secretariaAtual)
    }, [secretarias, slug])

    console.log(slug)
    console.log(secretarias)
    console.log(secretaria)

    return (
        <Template>
            <div className="flex flex-col p-4 gap-4 max-w-[1600px] mx-auto lg:p-8 lg:gap-6">
                <div className="border-b-2 border-verde-escuro w-full overflow-hidden">
                    <div className="w-[220px] h-[220px] bg-red-600 rounded-full mx-auto -mb-6"></div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold text-center leading-7 lg:text-4xl">{secretaria?.nome}</h2>
                    <p>{secretaria?.responsavel}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl">Sobre a Secretaria:</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate nisl ac odio vulputate auctor. Nullam in facilisis arcu. Donec at dolor scelerisque, euismod lacus et, tincidunt libero. Curabitur mauris ex, eleifend at sem dictum, sollicitudin cursus diam. Donec et euismod magna. Duis laoreet maximus neque, in posuere mauris ullamcorper a. Quisque nunc turpis, auctor in metus nec, tincidunt condimentum felis. Etiam ac tellus at ligula imperdiet iaculis. Suspendisse vel massa pellentesque, placerat orci in, scelerisque erat. Donec consequat fringilla nisi nec sodales.
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl">Sobre o Encarregado:</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate nisl ac odio vulputate auctor. Nullam in facilisis arcu. Donec at dolor scelerisque, euismod lacus et, tincidunt libero. Curabitur mauris ex, eleifend at sem dictum, sollicitudin cursus diam. Donec et euismod magna. Duis laoreet maximus neque, in posuere mauris ullamcorper a. Quisque nunc turpis, auctor in metus nec, tincidunt condimentum felis. Etiam ac tellus at ligula imperdiet iaculis. Suspendisse vel massa pellentesque, placerat orci in, scelerisque erat. Donec consequat fringilla nisi nec sodales.
                    </p>
                </div>
                <ul className="flex flex-col gap-1 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-2 3xl:mx-auto 3xl:text-lg 3xl:gap-6">
                    <li className="flex lg:justify-center">
                        <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                            <FaMapLocationDot className="justify-self-center" />
                            <p className="truncate">Endereço:{secretaria?.endereco}</p>
                        </Link>
                    </li>
                    <li className="flex lg:justify-center">
                        <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                            <MdOutlineLocalPhone className="justify-self-center" />
                            <p className="truncate">Telefone: {secretaria?.telefone}</p>
                        </Link>
                    </li>
                    <li className="flex lg:justify-center">
                        <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                            <MdOutlineEmail className="justify-self-center" />
                            <p className="truncate">Email: {secretaria?.email}</p>
                        </Link>
                    </li>
                    <li className="flex lg:justify-center">
                        <div className="grid grid-cols-[25px_1fr] items-center gap-1">
                            <FaRegClock className="justify-self-center" />
                            <p className="truncate">Atendimento: {secretaria?.atendimento.manha} e {secretaria?.atendimento.manha}</p>
                        </div>
                    </li>
                </ul>
                <BotaoVoltar />
            </div>
        </Template>
    )
}