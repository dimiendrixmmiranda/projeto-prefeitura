import Image from "next/image";
import Link from "next/link";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdHeadsetMic, MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";

export default function Rodape() {
    return (
        <footer>
            <div className="bg-verde-claro p-4 text-white text-center text-xl" style={{ textShadow: '1px 1px 2px black' }}>
                Horário de Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h
            </div>
            <div className="bg-verde-escuro text-white p-4 flex flex-col gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
                <Link href={'/'} className="flex gap-2 items-center mx-auto">
                    <div className="relative w-10 h-12 sm:w-12 sm:h-16 2xl:w-14 2xl:h-20">
                        <Image alt="Logo da prefeitura de Joaquim Távora - PR" src={'/logo/logo-prefeitura.png'} fill className="object-contain" />
                    </div>
                    <div style={{ textShadow: '1px 1px 2px black' }}>
                        <h2 className="font-secundaria font-bold text-xs leading-5 sm:text-base 2xl:text-lg">Prefeitura Municipal de</h2>
                        <h1 className="font-secundaria font-black text-xl leading-5 sm:text-2xl 2xl:text-3xl">Joaquim Távora - PR</h1>
                    </div>
                    <div className="relative w-10 h-12 sm:w-12 sm:h-16 2xl:w-14 2xl:h-20">
                        <Image alt="Logo da prefeitura de Joaquim Távora - PR" src={'/logo/logo-parana.png'} fill className="object-contain" />
                    </div>
                </Link>
                <div className="font-cursiva text-2xl text-center font-bold flex justify-center items-center">
                    <p>Joaquim Távora: O coração do Norte Pioneiro!</p>
                </div>
                <div className="md:col-start-1 md:col-end-3 xl:col-start-3 xl:col-end-4">
                    <ul className="flex flex-col gap-1 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
                        <li>
                            <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                                <FaMapLocationDot className="justify-self-center" />
                                <p className="truncate">Endereço:Rua:João Rodrigues de Almeida nº 387 - São Lucas</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                                <MdOutlineLocalPhone className="justify-self-center" />
                                <p className="truncate">Telefone: 3559-1122</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                                <IoLogoWhatsapp className="justify-self-center" />
                                <p className="truncate">Whatsapp: (43)988333750</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                                <MdHeadsetMic className="justify-self-center" />
                                <p className="truncate">Ouvidoria: (43) 3559-1810</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'} className="grid grid-cols-[25px_1fr] items-center gap-1">
                                <MdOutlineEmail className="justify-self-center" />
                                <p className="truncate">Email: portaltransparencia@joaquimtavora.pr.gov.br</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="bg-black text-white text-center py-1">Produzido por Dimi Endrix Martins Miranda</p>
        </footer>
    )
}