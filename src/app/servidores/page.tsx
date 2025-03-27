'use client';

import AncoraContainer from "@/components/ancora/AncoraContainer";
import ForcarAutenticacao from "@/components/auth/Auth";
import Template from "@/components/template/Template";
import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import { IoLogOutSharp } from "react-icons/io5";

export default function Page() {
    const { logout } = useAuth()

    return (
        <ForcarAutenticacao>
            <Template>
                <div className="p-4 flex flex-col gap-4 max-w-[1200px] w-full mx-auto xl:gap-10">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 60px' }}>
                        <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Painel de serviço dos servidores</h1>
                        <button className="text-red-600 flex flex-col justify-center items-center" onClick={logout}>
                            <div className="text-2xl">
                                <IoLogOutSharp />
                            </div>
                            <p className="leading-4 font-bold">Logaut</p>
                        </button>
                    </div>
                    <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px] p-2">
                            <Link href={'/servidores/infraestruturaEMaquinario'}>
                                <p>Solicitações de Serviços de Maquinarios e Infraestrutura</p>
                            </Link>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px] p-2">
                            <Link href={'/servidores/solicitacaoCorteEPodaDeArvores'}>
                                <p>Solicitações de Corte e Poda de Árvores</p>
                            </Link>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px] p-2">
                            <Link href={'/servidores/solicitarColetaDeEntulho'}>
                                <p>Solicitações de Coleta de Entulho</p>
                            </Link>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px] p-2">
                            <Link href={'/servidores/solicitarConcertoIluminacaoPublica'}>
                                <p>Solicitações de Cencerto de Iluminação Pública</p>
                            </Link>
                        </li>
                    </ul>
                    <AncoraContainer></AncoraContainer>
                </div>
            </Template>
        </ForcarAutenticacao>
    )
}