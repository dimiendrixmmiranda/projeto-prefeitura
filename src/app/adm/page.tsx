'use client'
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
                <div className="text-black min-h-[80vh] p-4">
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <Link href={'/adm/adicionarNoticia'}>
                                <p>Adicionar Noticia</p>
                            </Link>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <Link href={'/adm/adicionarObra'}>
                                <p>Adicionar Nova Obra Concluída</p>
                            </Link>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <p>Adicionar Novo Evento</p>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <p>Relatos de Concerto de iluminação pública</p>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <p>Solicitação de Corte e Poda de Árvore</p>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <p>Solicitação de Serviços de Infraestrutura e Maquinário</p>
                        </li>
                        <li className="bg-[--verde] self-center justify-self-center flex justify-center items-center text-center w-full max-w-[300px] h-[100px]">
                            <p>Solicitação de Cadastro de Comércio</p>
                        </li>
                    </ul>
                    <button className="text-red-600 flex flex-col justify-center items-center" onClick={logout}>
                        <div className="text-2xl">
                            <IoLogOutSharp />
                        </div>
                        <p className="leading-4 font-bold">Logaut</p>
                    </button>
                </div>
            </Template>
        </ForcarAutenticacao>
    )
}