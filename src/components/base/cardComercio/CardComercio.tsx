import Comercio from "@/interfaces/Comercio"
import Image from "next/image"
import HorarioDeFuncionamento from "../horarioDeFuncionamento/HorarioDeFuncionamento"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaPhone, FaTiktok, FaWhatsapp } from "react-icons/fa"

interface CardComercioProps{
    comercio: Comercio
    key: number
}

export default function CardComercio({comercio, key}:CardComercioProps) {
    return (
        <li key={key} className="w-full border-2 border-verde-escuro rounded-[8px] max-w-[350px] p-4 flex flex-col gap-4 mx-auto">
            <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden mx-auto sm:w-[170px] sm:h-[170px]">
                <Image alt={comercio.nome} src={comercio.imagemBase64} fill className="object-cover" />
            </div>
            <h2 className="font-bold text-center text-2xl leading-6 sm:text-3xl">{comercio.nome}</h2>
            <p className="text-center sm:text-lg">{comercio.endereco.rua} - {comercio.endereco.numero}, {comercio.endereco.complemento}</p>

            <HorarioDeFuncionamento horarios={comercio.horarios} />

            <div className="w-full mt-auto">
                <ul className="flex items-center">
                    <li className="flex-1 flex justify-center items-center text-2xl 2xl:text-3xl">
                        <Link href={'/'}><FaFacebook /></Link>
                    </li>
                    <li className="flex-1 flex justify-center items-center text-2xl 2xl:text-3xl">
                        <Link href={'/'}><FaInstagram /></Link>
                    </li>
                    <li className="flex-1 flex justify-center items-center text-2xl 2xl:text-3xl">
                        <Link href={'/'}><FaWhatsapp /></Link>
                    </li>
                    <li className="flex-1 flex justify-center items-center text-2xl 2xl:text-3xl">
                        <Link href={'/'}><FaTiktok /></Link>
                    </li>
                    <li className="flex-1 flex justify-center items-center text-2xl 2xl:text-3xl">
                        <Link href={'/'}><FaPhone /></Link>
                    </li>
                </ul>
            </div>
        </li>
    )
}