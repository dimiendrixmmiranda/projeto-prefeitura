'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SolicitacaoConcertoIluminacaoPublica {
    nome: string
    endereco: string
    bairro: string
    localizacao: string[]
    data: string
    situacao: boolean
    imagem?: string
}

export default function Page() {
    const [solicitacoes, setSolicitacoes] = useState<SolicitacaoConcertoIluminacaoPublica[]>([])

    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "solicitacaoConcertoIluminacaoPublica"));
                const solicitacoesArray: SolicitacaoConcertoIluminacaoPublica[] = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    data: doc.data().data.toDate(),
                })) as SolicitacaoConcertoIluminacaoPublica[]

                setSolicitacoes(solicitacoesArray)

            } catch (error) {
                console.error("Erro ao buscar solicitações:", error)
            }
        };

        fetchSolicitacoes()
    }, [])

    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Solicitações de Coleta de Entulho</h1>
                <div className="overflow-auto">
                    <table className="w-full border-separate border-spacing-2 border-2 border-black">
                        <thead>
                            <tr className="bg-green-800 text-white whitespace-nowrap">
                                <th className="px-4 py-1">Nome</th>
                                <th className="px-4 py-1">Endereço</th>
                                <th className="px-4 py-1">Bairro</th>
                                <th className="px-4 py-1">Data da Solicitação</th>
                                <th className="px-4 py-1">Coordenadas</th>
                                <th className="px-4 py-1">Imagem</th>
                                <th className="px-4 py-1">Situação</th>
                                <th className="px-4 py-1">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitacoes.map((solicitacao, i) => (
                                <tr key={i} className={`whitespace-nowrap ${i % 2 === 0 ? 'bg-green-200 text-black' : 'bg-green-600 text-white'}`}>
                                    <td className="px-4 py-1">{solicitacao.nome}</td>
                                    <td className="px-4 py-1">{solicitacao.endereco}</td>
                                    <td className="px-4 py-1">{solicitacao.bairro}</td>
                                    <td className="px-4 py-1">{(solicitacao.data).toString()}</td>
                                    <td className="px-4 py-1">{solicitacao.localizacao[0]},{solicitacao.localizacao[1]}</td>
                                    <td className="px-4 py-1">
                                        <Image alt="imagem da solicitação" src={solicitacao.imagem ? solicitacao.imagem : ''} width={100} height={100}></Image>
                                    </td>
                                    <td className="px-4 py-1">{solicitacao.situacao ? 'Atendida' : 'Não foi Atendida'}</td>
                                    <td className="px-4 py-1"><button>Solicitação Atendida</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AncoraContainer linkVoltar="/servidores"></AncoraContainer>
                {/* NECESSÁRIO REFATORAÇÃO NO COMPONENTE MAPA */}
            </div>
        </Template>
    )
}