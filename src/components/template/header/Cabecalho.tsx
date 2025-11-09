import Menu from "@/components/menu/Menu";
import Redes from "@/components/redes/Redes";
import SidebarComponent from "@/components/sidebarComponent/SidebarComponent";
import useAuth from "@/lib/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";

export default function Cabecalho() {
    const { usuario } = useAuth()
    return (
        <header className="flex items-center p-2 gap-2 bg-verde-escuro z-20 text-white lg:p-3 xl:gap-4">
            <Link href={'/'} className="flex gap-2 items-center flex-1 lg:flex-none">
                <div className="relative w-10 h-12">
                    <Image alt="Logo da prefeitura de Joaquim Távora - PR" src={'/logo/logo-prefeitura.png'} fill className="object-contain" />
                </div>
                <div style={{ textShadow: '1px 1px 2px black' }}>
                    <h2 className="font-secundaria font-bold text-xs leading-5">Prefeitura Municipal de</h2>
                    <h1 className="font-secundaria font-black text-xl leading-5">Joaquim Távora - PR</h1>
                </div>
            </Link>
            <Menu />
            <Redes posicao="hidden xl:flex xl:ml-auto" style="flex gap-2 text-2xl" />
            <div className="hidden p-2 xl:block 2xl:max-w-[120px] 2xl:w-full hover:text-verde-escuro hover:bg-white transition-all duration-300" style={{ borderRadius: '8px' }}>
                <Link href={usuario ? `${usuario.tipo === 'usuario' ? '/acesso/usuario' : '/acesso/administrador'}` : `/login`} className="flex items-center">
                    {
                        usuario ? (
                            <>
                                <p className="text-center leading-3 text-xs hidden 2xl:block">Bem vindo {usuario.nome.split(' ')[0]}</p>
                                <div className="w-7 h-7 bg-red-500 rounded-full relative overflow-hidden">
                                    <Image alt={usuario.nome} src={usuario.imagemURL} fill className="object-cover"/>
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="text-center leading-3 text-xs hidden 2xl:block">Entrar ou cadastre-se</p>
                                <FaUserCircle className="text-2xl" />
                            </>
                        )
                    }
                </Link>
            </div>
            <SidebarComponent />
        </header>
    )
}