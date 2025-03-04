import MenuSuperior from "@/components/menuSuperior/MenuSuperior";
import RedeSocial from "@/components/redesSociais/RedeSocial";
import SidebarComponent from "@/components/sidebar/Sidebar";
import { listaDeRedesSociais } from "@/core/constants/listaDeRedesSociais";
import Image from "next/image";
import Link from "next/link";
import { IoLogInSharp } from "react-icons/io5";

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
            <ul className="hidden items-center gap-[1px] lg:grid lg:grid-cols-3 lg:w-full lg:gap-x-2 xl:flex xl:text-xl xl:w-fit xl:mx-auto">
                {
                    listaDeRedesSociais.map(((rede, i) => {
                        return (
                            <RedeSocial icone={rede.icone} key={i} link={rede.link} nome={rede.nome}></RedeSocial>
                        )
                    }))
                }
            </ul>
            <div className="hidden w-full justify-center items-center text-2xl lg:flex xl:w-fit xl:-ml-3 2xl:-ml-0">
                <Link href={'/login'} className="cursor-pointer">
                    <IoLogInSharp />
                </Link>
            </div>
        </header>
    )
}