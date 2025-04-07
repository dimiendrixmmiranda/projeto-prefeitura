'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Item from "@/core/ItemMapa/ItemMapa";
import CaixaImagem from "@/components/caixaImagem/CaixaImagem";


interface SolicitacaoMaquinarioInfraestrutura {
    id: string
    bairro: string
    situacao: boolean
    condicaoAtual: string
    cpf: string
    data: Date
    descricao: string
    endereco: string
    localizacao: string[]
    nome: string
    servicoSolicitado: string
    telefone: string
    imagem?: string
}

const Mapa = dynamic(() => import("@/components/mapaSolicitacao"), { ssr: false });

export default function Page() {
    const [solicitacoes, setSolicitacoes] = useState<SolicitacaoMaquinarioInfraestrutura[]>([]);
    const [solicitacoesMapa, setSolicitacoesMapa] = useState<Item[]>([]);
    const [imagemAtual, setImagemAtual] = useState('')
    const [mostrarImagem, setMostrarImagem] = useState(false)

    function concluido(id: string) {
        const solicitacaoRef = doc(db, "pedidosInfraestruturaEMaquinario", id);

        updateDoc(solicitacaoRef, { situacao: true })
            .then(() => {
                console.log(`Solicitação ${id} marcada como concluída.`);

                // Atualizar o estado local para refletir a mudança
                setSolicitacoes((prevSolicitacoes) =>
                    prevSolicitacoes.map((sol) =>
                        sol.id === id ? { ...sol, situacao: true } : sol
                    )
                );
            })
            .then(() => {
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((error) => {
                console.error("Erro ao atualizar a solicitação:", error);
            });

        console.log(solicitacoes, solicitacoesMapa)
    }

    console.log(solicitacoes)
    console.log(solicitacoesMapa)

    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "pedidosInfraestruturaEMaquinario"));
                const solicitacoesArray: SolicitacaoMaquinarioInfraestrutura[] = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id, // Adiciona o ID do documento do Firestore
                    data: doc.data().data.toDate(),
                })) as SolicitacaoMaquinarioInfraestrutura[];

                solicitacoesArray.sort((a, b) => {
                    const dateA = new Date(a.data).getTime()
                    const dateB = new Date(b.data).getTime()
                    return dateB - dateA
                })

                setSolicitacoes(solicitacoesArray)

                const solicitacoesFormatadas = solicitacoesArray
                    .filter(s => s.localizacao?.length === 2) // Filtra somente as que têm coordenadas
                    .filter(s => s.situacao === false)
                    .map((s) => ({
                        nome: s.nome,
                        latitude: parseFloat(s.localizacao[0]),
                        longitude: parseFloat(s.localizacao[1]),
                        servicoSolicitado: s.servicoSolicitado ? s.servicoSolicitado : '',
                        id: s.id,
                        icone: '/icones/icone-infraestrutura-maquinario.png', // Defina um ícone padrão
                        telefone: s.telefone,
                        condicaoAtual: s.condicaoAtual,
                        imagem: s.imagem
                    }));

                setSolicitacoesMapa(solicitacoesFormatadas);

            } catch (error) {
                console.error("Erro ao buscar solicitações:", error)
            }
        }

        fetchSolicitacoes()
    }, [])

    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Solicitações de Serviços de Maquinário e Infraestrutura</h1>
                <div className="overflow-auto">
                    <table className="w-full border-separate border-spacing-2 border-2 border-black">
                        <thead>
                            <tr className="bg-green-800 text-white whitespace-nowrap">
                                <th className="px-4 py-1">Nome</th>
                                <th className="px-4 py-1">CPF</th>
                                <th className="px-4 py-1">Endereço</th>
                                <th className="px-4 py-1">Bairro</th>
                                <th className="px-4 py-1">Telefone</th>
                                <th className="px-4 py-1">Condição Atual</th>
                                <th className="px-4 py-1">Serviço Solicitado</th>
                                <th className="px-4 py-1">Data da Solicitação</th>
                                <th className="px-4 py-1">Coordenadas</th>
                                <th className="px-4 py-1">Imagem</th>
                                <th className="px-4 py-1">Situação</th>
                                <th className="px-4 py-1">Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitacoes.map((solicitacao, i) => (
                                <tr key={i} className={`whitespace-nowrap text-white ${solicitacao.situacao ? 'bg-green-600' : 'bg-red-600'}`}>
                                    <td className="px-4 py-1">{solicitacao.nome}</td>
                                    <td className="px-4 py-1">{solicitacao.cpf}</td>
                                    <td className="px-4 py-1">{solicitacao.endereco}</td>
                                    <td className="px-4 py-1">{solicitacao.bairro}</td>
                                    <td className="px-4 py-1">{solicitacao.telefone}</td>
                                    <td className="px-4 py-1">{solicitacao.condicaoAtual}</td>
                                    <td className="px-4 py-1">{solicitacao.servicoSolicitado}</td>
                                    <td className="px-4 py-1">{(solicitacao.data).toString()}</td>
                                    <td className="px-4 py-1">{solicitacao.localizacao[0]}, {solicitacao.localizacao[1]}</td>
                                    <td
                                        className="px-4 py-1 cursor-pointer"
                                        onClick={() => {
                                            if (solicitacao.imagem) {
                                                setImagemAtual(solicitacao.imagem)
                                                setMostrarImagem(true)
                                            }
                                        }}
                                    >
                                        <Image alt="imagem da solicitação" src={solicitacao.imagem ? solicitacao.imagem : ''} width={100} height={100}></Image>
                                    </td>
                                    <td className="px-4 py-1">{solicitacao.situacao ? 'Atendida' : 'Não foi Atendida'}</td>
                                    <td className="px-4 py-1 bg-[--cinza]">
                                        <button className="bg-green-500 p-2 rounded-md" onClick={() => concluido(solicitacao.id)}>Solicitação Atendida</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <CaixaImagem imagem={imagemAtual} visivel={mostrarImagem} onFechar={() => setMostrarImagem(false)} />
                <div className="flex flex-col gap-4 lg:gap-8 lg:my-4">
                    <h2 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Visão Geral de todos os pontos</h2>
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Mapa latitude={-23.49783040582745} longitude={-49.92295585808861} zoom={15} arrayPontosGeral={solicitacoesMapa} concluido={concluido} />
                    </div>
                </div>
                <AncoraContainer linkVoltar="/servidores"></AncoraContainer>
            </div>
        </Template>
    )
}