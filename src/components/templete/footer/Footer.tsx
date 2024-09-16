import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <footer className="bg-[--verde] flex flex-col mt-8 md:flex-row md:flex-wrap pb-6 lg:mt-14 xl:mt-10">
            <h3 className="text-center leading-5 text-xl font-bold w-full p-2 py-3 lg:text-2xl bg-[#236D45]">Horário de Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h</h3>
            <div className="mx-auto md:mx-0 md:w-[45%] p-2 flex items-center">
                <Link href={'/'} className="flex items-center">
                    <img src="/logo-prefeitura.png" alt="" className="w-14 py-2 px-1 md:h-fit lg:w-[90px]" />
                    <div className="flex flex-col justify-center gap-2 md:h-fit">
                        <h2 className="leading-3 text-[20px] font-medium lg:text-[24px] xl:text-[30px]">Prefeitura Municipal</h2>
                        <h1 className="leading-5 text-[24px] font-black lg:text-[28px] lg:leading-7 xl:text-[40px] xl:mt-2">Joaquim Távora - PR</h1>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col md:max-w-[55%] justify-center p-2 gap-2 lg:mt-3">
                <div className="flex gap-1 items-center">
                    <Link href={'/'} className="text-4xl"><FaLocationDot /></Link>
                    <h3 className="leading-5 font-medium">Rua:João Rodrigues de Almeida nº 387 - São Lucas - 86455-000 - JOAQUIM TAVORA - Paraná</h3>
                </div>
                <div className="flex gap-1 items-center">
                    <Link href={'/'} className="text-2xl ml-1"><FaPhoneAlt /></Link>
                    <span className="leading-5 font-medium text-xl ml-2">Telefone: (43) 3559-1122</span>
                </div>
                <div className="flex gap-1 items-center">
                    <Link href={'/'} className="text-2xl ml-1"><FaHeadphones /></Link>
                    <span className="leading-5 font-medium ml-2">Ouvidoria Geral: 0800 643 2560 </span>
                </div>
                <div className="flex gap-1 items-center">
                    <Link href={'/'} className="text-2xl ml-1"><MdEmail /></Link>
                    <span className="font-medium break-all leading-4 ml-2">Email:portaltransparencia@joaquimtavora.pr.gov.br</span>
                </div>
            </div>
        </footer>
    )
}