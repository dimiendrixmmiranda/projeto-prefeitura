'use client'
import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { listaDeMenus } from "@/core/constants";

export default function Cabecalho() {
    return (
        <header className="h-20 bg-[--verde] flex p-2 cabecalho">
            <div className="flex-1">
                <Link href={'/'} className="flex h-full">
                    <img src="/logo-prefeitura.png" alt="" className="h-full py-2 px-1 sm:p-1" />
                    <div className="flex flex-col justify-center gap-1 sm:gap-3">
                        <h2 className="leading-3 text-[12px] font-medium sm:text-[18px]">Prefeitura Municipal</h2>
                        <h1 className="leading-3 text-[18px] font-black sm:text-[24px]">Joaquim Távora - PR</h1>
                    </div>
                </Link>
            </div>
            <div>
                <ul className="flex h-full justify-center items-center gap-1 menuCabecalho text-sm xl:text-lg">
                    {
                        listaDeMenus.map((objeto, i) => {
                            return (
                                <li key={i} className="relative">
                                    <p className="flex justify-center items-center gap-1 cursor-pointer p-2">
                                        {objeto.texto}
                                        <span><MdKeyboardArrowDown className="text-xl" /></span>
                                    </p>
                                    {objeto.subtitulo ?
                                        <ul className="hidden">
                                            {
                                                objeto.subtitulo.map((subtitulo, j) => {
                                                    return (
                                                        <li key={j} className="cursor-pointer p-2">
                                                            <Link href={subtitulo.link}>{subtitulo.texto}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                        : ''}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='hidden xl:flex mx-4'>
                <ul className="flex items-center gap-2 lista-redes-sociais">
                    <li className="" data-rede="facebook">
                        <Link href={'/'}><FaFacebookSquare className="text-2xl" /></Link>
                    </li>
                    <li className="" data-rede="instagram">
                        <Link href={'/'}><AiFillInstagram className="text-2xl" /></Link>
                    </li>
                    <li className="" data-rede="Email">
                        <Link href={'/'}><MdEmail className="text-2xl" /></Link>
                    </li>
                    <li className="" data-rede="SAC">
                        <Link href={'/'}><IoChatboxEllipses className="text-2xl" /></Link>
                    </li>
                </ul>
            </div>
            <Offcanvas />
        </header>
    )
}