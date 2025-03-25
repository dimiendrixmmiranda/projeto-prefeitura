'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

interface SolicitacaoMaquinarioInfraestrutura {
    bairro: string
    concluido: boolean
    condicaoAtual: string
    cpf: string
    data: Date
    descricao: string
    endereco: string
    latitude: string
    longitude: string
    nome: string
    servicoSolicitado: string
    telefone: string
    imagem?: string
}

export default function Page() {
    const [solicitacoes, setSolicitacoes] = useState<SolicitacaoMaquinarioInfraestrutura[]>([]);
    console.log(solicitacoes)
    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "pedidosInfraestruturaEMaquinario"));
                const solicitacoesArray: SolicitacaoMaquinarioInfraestrutura[] = querySnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    data: doc.data().data.toDate(),
                })) as SolicitacaoMaquinarioInfraestrutura[]

                setSolicitacoes(solicitacoesArray)

            } catch (error) {
                console.error("Erro ao buscar solicitações:", error)
            }
        };

        fetchSolicitacoes();
    }, []);

    console.log(solicitacoes)

    return (
        <Template>
            <div className="text-black p-4 flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Solicitações de Maquinário e Infraestrutura</h1>
                <div className="overflow-auto">
                    <table className="w-full border-separate border-spacing-2 border-2 border-black">
                        <thead>
                            <tr className="bg-green-800 text-white">
                                <th>Nome</th>
                                <th>Endereço</th>
                                <th>Bairro</th>
                                <th>Serviço Solicitado</th>
                                <th>Condição Atual</th>
                                <th>Telefone</th>
                                <th>Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {solicitacoes.map((solicitacao, i) => (
                                <tr key={i} className={`whitespace-nowrap ${i % 2 === 0 ? 'bg-red-200 text-black': 'bg-red-400 text-white'}`}>
                                    <td>{solicitacao.nome}</td>
                                    <td>{solicitacao.endereco}</td>
                                    <td>{solicitacao.bairro}</td>
                                    <td>{solicitacao.servicoSolicitado}</td>
                                    <td>{solicitacao.condicaoAtual}</td>
                                    <td>{solicitacao.telefone}</td>
                                    <td>{solicitacao.concluido ? 'Concluído' : 'Não concluído'}</td>
                                    <td>
                                        <Image alt="Imagem do pedido" src={solicitacao.imagem? solicitacao.imagem : ''}width={100} height={100}></Image>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <AncoraContainer></AncoraContainer>
                {/* NECESSÁRIO REFATORAÇÃO NO COMPONENTE MAPA */}
                {/* <div>
                    Mapa
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Map latitude={solicitacaoTransformada[0].latitude} longitude={solicitacaoTransformada[0].longitude} zoom={15} arrayPontosGeral={solicitacaoTransformada} />
                    </div>
                </div> */}
            </div>
        </Template>
    )
}