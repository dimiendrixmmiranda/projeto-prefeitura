'use client'
import Template from "@/components/template/Template"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import { db } from "@/lib/firebase/Firebase";
import useAuth from "@/lib/hooks/useAuth"
import handleImagemChange from "@/lib/utils/handleImageChange";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStore, FaTrashAlt, FaTractor, FaLightbulb, FaTree } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi"

export default function Page() {
    const { logout, usuario } = useAuth()

    const [, setErroImagemTamanho] = useState<string | null>()
    const [, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()

    const menuUsuario = [
        {
            icone: <FaStore style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Seu Comércio",
            descricao: "Cadastre seu comércio e destaque seu negócio em nossa cidade!",
            link: "/menu/cadastre-comercio-servico"
        },
        {
            icone: <FaTrashAlt style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitar Coleta de Entulho",
            descricao: "Solicite a coleta de entulhos de forma simples e rápida!",
            link: "/menu/solicitar-coleta-entulho"
        },
        {
            icone: <FaTractor style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitar Serviço Rural",
            descricao: "Peça serviços rurais e facilite o trabalho no campo!",
            link: "/menu/solicitar-servico-rural"
        },
        {
            icone: <FaTree style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Corte e Poda de Árvore",
            descricao: "Solicite corte ou poda de árvores em vias públicas e terrenos.",
            link: "/menu/solicitar-corte-poda-arvore"
        },
        {
            icone: <FaLightbulb style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Concerto de Iluminação Pública",
            descricao: "Informe problemas de iluminação em ruas e praças!",
            link: "/menu/concerto-iluminacao"
        },
        {
            icone: <FaMosquito style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Denunciar Foco de Dengue",
            descricao: "Ajude a combater a dengue denunciando possíveis focos!",
            link: "/menu/denunciar-foco-dengue"
        },
    ]

    return (
        <Template>
            <div className="p-4 flex flex-col gap-4 lg:min-h-[75vh] lg:p-8">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-2xl text-center">Bem Vindo {usuario?.nome}</h2>
                        <div className="relative w-fit mx-auto">
                            {usuario && (
                                <div className="w-[180px] h-[180px] rounded-full overflow-hidden relative mx-auto -mt-2">
                                    <Image
                                        alt="Imagem do Usuário"
                                        src={imagemPreview || usuario?.imagemURL}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Botão customizado */}
                            <button
                                type="button"
                                className="bg-verde-escuro text-white p-2 rounded-full absolute bottom-0 -right-4 flex items-center gap-1"
                                onClick={() => document.getElementById("imagens")?.click()}
                            >
                                <FiPlus />
                            </button>
                        </div>

                        <fieldset>
                            {/* Input escondido */}
                            <input
                                className="hidden"
                                type="file"
                                id="imagens"
                                accept="image/*"
                                onChange={async (e) => {
                                    // processa a imagem e pega o Base64
                                    const base64 = await handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview);
                                    console.log(base64)
                                    // só atualiza no Firebase se base64 existir
                                    if (base64 && usuario?.uid) {
                                        await updateDoc(doc(db, "usuarios", usuario.uid), {
                                            imagemURL: base64
                                        });
                                    }
                                }}
                            />
                        </fieldset>
                    </div>
                    <div className="flex flex-col lg:ml-10 2xl:ml-0">
                        <h3 className="text-xl font-bold">Seus dados:</h3>
                        <ul className="md:grid md:grid-cols-2 lg:flex lg:flex-col">
                            <li className="flex items-center gap-1">
                                <p className="font-bold line-clamp-1">Nome:</p>
                                <span>{usuario?.nome}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <p className="font-bold line-clamp-1">Email:</p>
                                <span>{usuario?.email}</span>
                            </li>
                            <li className="flex items-center gap-1">
                                <p className="font-bold line-clamp-1">Telefone:</p>
                                <span>{usuario?.telefone}</span>
                            </li>
                            <li className="flex items-center gap-1 mt-4">
                                <button className="bg-red-500 text-white uppercase font-bold py-1 px-4 rounded-full" onClick={() => logout && logout('/')}>sair</button>
                                <Link href={'/'} className="bg-green-500 text-white uppercase font-bold py-1 px-4 rounded-full">Voltar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto max-w-[1440px]">
                    <HoverEffect items={menuUsuario} className="md:grid-cols-2 lg:grid-cols-3" />
                </div>
            </div>
        </Template>
    )
}