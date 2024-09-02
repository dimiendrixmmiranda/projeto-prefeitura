import Link from "next/link";
import Offcanvas from "./Offcanvas";
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";

export default function Cabecalho() {
    return (
        <header className="h-20 bg-[--verde] flex p-2">
            <div className="flex-1">
                <Link href={'/'} className="flex h-full">
                    <img src="logo-prefeitura.png" alt="" className="h-full py-2 px-1 sm:p-1" />
                    <div className="flex flex-col justify-center gap-1 sm:gap-3">
                        <h2 className="leading-3 text-[12px] font-medium sm:text-[18px]">Prefeitura Municipal</h2>
                        <h1 className="leading-3 text-[18px] font-black sm:text-[24px]">Joaquim Távora - PR</h1>
                    </div>
                </Link>
            </div>
            <div className="hidden lg:flex justify-center items-center mr-2">
                <ul className="flex flex-1 justify-center items-center h-fit gap-1 ">
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">Governo Atual <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">O Município <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">Secretarias <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">Serviços <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">Imprensa <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                    <li className="px-1 py-2 rounded-md font-semibold">
                        <p className="flex flex-wrap justify-center items-center rounded-md xl:text-lg xl:font-bold xl:p-2">Comércio <IoMdArrowDropright className="text-lg" /></p>
                    </li>
                </ul>
            </div>
            <div className='hidden xl:flex mx-4'>
                <ul className="flex items-center gap-2">
                    <li>
                        <Link href={'/'}><FaFacebookSquare className="text-2xl"/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><AiFillInstagram className="text-2xl"/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><MdEmail className="text-2xl"/></Link>
                    </li>
                    <li>
                        <Link href={'/'}><IoChatboxEllipses className="text-2xl"/></Link>
                    </li>
                </ul>
            </div>
            <Offcanvas />
        </header>
    )
}