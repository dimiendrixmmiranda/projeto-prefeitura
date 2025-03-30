'use client'
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
                        <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center self-center justify-self-center md:text-3xl lg:text-4xl">Painel de serviço dos administradores</h1>
                        <button className="text-red-600 flex flex-col justify-center items-center" onClick={logout}>
                            <div className="text-2xl">
                                <IoLogOutSharp />
                            </div>
                            <p className="leading-4 font-bold">Logaut</p>
                        </button>
                    </div>
                    <div className="text-black p-4">
                        <ul className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                            <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                                <Link href={'/adm/adicionarNoticia'} className="w-full h-full flex justify-center items-center cursor-pointer p-2 font-bold text-xl leading-6 text-white">
                                    <p>Adicionar Noticia</p>
                                </Link>
                            </li>
                            <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                                <Link href={'/adm/adicionarObra'} className="w-full h-full flex justify-center items-center cursor-pointer p-2 font-bold text-xl leading-6 text-white">
                                    <p>Adicionar Nova Obra Concluída</p>
                                </Link>
                            </li>
                            <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                                <Link href={'/adm/adicionarEvento'} className="w-full h-full flex justify-center items-center cursor-pointer p-2 font-bold text-xl leading-6 text-white">
                                    <p>Adicionar Novo Evento</p>
                                </Link>
                            </li>
                            <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                                <Link href={'/adm/adicionarPontoTuristico'} className="w-full h-full flex justify-center items-center cursor-pointer p-2 font-bold text-xl leading-6 text-white">
                                    <p>Adicionar Novo Ponto Turístico</p>
                                </Link>
                            </li>
                            <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                                <Link href={'/adm/adicionarNovoComercio'} className="w-full h-full flex justify-center items-center cursor-pointer p-2 font-bold text-xl leading-6 text-white">
                                    <p>Solicitação de Cadastro de Comércio</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <AncoraContainer></AncoraContainer>
                </div>
            </Template>
        </ForcarAutenticacao>
    )
}