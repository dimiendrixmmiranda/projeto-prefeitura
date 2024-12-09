import MenuSuperior from "@/components/menuSuperior/MenuSuperior";
import RedesSociais from "@/components/redesSociais/RedesSociais";
import SidebarComponent from "@/components/sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <header className="bg-[--verde] p-2 py-3 flex md:py-3 lg:gap-2 xl:gap-4" id="topo">
            <Link href={'/'} className="flex gap-1 items-center lg:mr-3 xl:mr-0">
                <div className="relative w-[40px] h-full md:w-[40px]">
                    <Image src={'/logo-prefeitura.png'} alt="Brasão de Joaquim Távora - PR" className="object-contain" fill></Image>
                </div>
                <div className="flex flex-col whitespace-nowrap">
                    <h2 className="font-semibold text-[.8em] leading-5 sm:leading-5 sm:text-md md:text-lg md:leading-6">Prefeitura Municipal de</h2>
                    <h1 className="font-black text-lg leading-5 sm:leading-5 sm:text-xl md:text-2xl md:leading-6">Joaquim Távora - PR</h1>
                </div>
            </Link>
            <SidebarComponent></SidebarComponent>
            <MenuSuperior></MenuSuperior>
            <RedesSociais estilo="hidden justify-center items-center gap-2 text-xl xl:flex mr-2"></RedesSociais>
        </header>
    )
}