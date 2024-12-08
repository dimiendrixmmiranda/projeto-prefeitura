import RedesSociais from "@/components/redesSociais/RedesSociais";
import Image from "next/image";
import Link from "next/link";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";

export default function Rodape() {
    return (
        <footer className="flex flex-col w-full bg-[--verde] p-2 gap-2 md:grid md:grid-cols-2 xl:grid-cols-4">
            <Link href={'/'} className="flex gap-1 items-center md:gap-2">
                <div className="relative w-[60px] h-[60px] md:w-[40px]">
                    <Image src={'/logo-prefeitura.png'} alt="Brasão de Joaquim Távora - PR" className="object-contain" fill></Image>
                </div>
                <div className="flex flex-col whitespace-nowrap gap-1 ">
                    <h2 className="font-semibold text-[.8em] leading-5 sm:leading-5 sm:text-lg">Prefeitura Municipal de</h2>
                    <h1 className="font-black text-lg leading-5 sm:leading-5 sm:text-2xl ">Joaquim Távora - PR</h1>
                </div>
            </Link>
            <h2 className="uppercase leading-5 font-bold text-center text-lg self-center">Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h</h2>
            <div className="flex flex-col gap-1 leading-5">
                <Link href={'/'} className="flex leading-5 gap-2">
                    <IoLocation className="text-2xl" /> Endereço: João Rodrigues de Almeida nº 387 - São Lucas
                </Link>
                <Link href={'/'} className="flex leading-5 gap-2">
                    <FaPhoneVolume className="text-2xl" />Ovidoria: 0800 643 2560
                </Link>
                <h2></h2>
            </div>

            <RedesSociais estilo="flex justify-center items-center gap-3 text-3xl"></RedesSociais>
        </footer>
    )
}