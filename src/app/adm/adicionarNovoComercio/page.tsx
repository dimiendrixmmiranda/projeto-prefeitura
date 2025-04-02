'use client';

import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Comercio from "@/core/comercio/Comercio";
import { db } from "@/lib/firebase";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {

    const [solicitacoes, setSolicitacoes] = useState<Comercio[]>([]);

    console.log(solicitacoes)

    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "solicitacacaoDeCadastroDeComercio"));
                const solicitacoesArray: Comercio[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        localizacao: data.localizacao,
                        nome: data.nome ?? '',
                        imagem: data.imagem,
                        horarioDeAtendimento: data.horarioDeAtendimento,
                        telefone: data.telefone,
                        endereco: data.endereco,
                        categoriaComercio: data.categoriaComercio,
                        redesSociais: data.redesSociais,
                        data: data.data ? data.data.toDate() : null,
                        situacao: data.situacao,
                    }
                })

                solicitacoesArray.sort((a, b) => {
                    const dateA = new Date(a.data).getTime()
                    const dateB = new Date(b.data).getTime()
                    return dateB - dateA
                })

                setSolicitacoes(solicitacoesArray)
            } catch (error) {
                console.error("Erro ao buscar solicitações:", error)
            }
        }

        fetchSolicitacoes()
    }, [])


    async function aprovarComercio(solicitacao: Comercio) {
        try {
            const comercioRef = doc(db, "solicitacacaoDeCadastroDeComercio", solicitacao.id);
            await updateDoc(comercioRef, { situacao: true });

            // Atualiza o estado localmente sem precisar buscar de novo no Firestore
            setSolicitacoes((prev) =>
                prev.map((item) =>
                    item.id === solicitacao.id ? { ...item, situacao: true } : item
                )
            );
        } catch (error) {
            console.error("Erro ao aprovar comércio:", error);
        }
    }

    async function reprovarComercio(solicitacao: Comercio) {
        try {
            const comercioRef = doc(db, "solicitacacaoDeCadastroDeComercio", solicitacao.id);
            await updateDoc(comercioRef, { situacao: false });

            // Atualiza o estado localmente
            setSolicitacoes((prev) =>
                prev.map((item) =>
                    item.id === solicitacao.id ? { ...item, situacao: false } : item
                )
            );
        } catch (error) {
            console.error("Erro ao reprovar comércio:", error);
        }
    }


    return (
        <Template>
            <div className="overflow-auto">
                <table className="w-full border-separate border-spacing-2 border-2 border-black">
                    <thead>
                        <tr className="bg-green-800 text-white whitespace-nowrap">
                            <th className="px-4 py-1">Nome</th>
                            <th className="px-4 py-1">Horário de Atendimento</th>
                            <th className="px-4 py-1">Telefone</th>
                            <th className="px-4 py-1">Endereço</th>
                            <th className="px-4 py-1">Categoria</th>
                            <th className="px-4 py-1">Localizaço</th>
                            <th className="px-4 py-1">Imagem</th>
                            <th className="px-4 py-1">Situação</th>
                            <th className="px-4 py-1">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solicitacoes.map((solicitacao, i) => (
                            <tr key={i} className={`whitespace-nowrap ${i % 2 === 0 ? 'bg-green-200 text-black' : 'bg-green-600 text-white'}`}>
                                <td className="px-4 py-1">{solicitacao.nome}</td>
                                <td className="px-4 py-1">{solicitacao.horarioDeAtendimento}</td>
                                <td className="px-4 py-1">{solicitacao.telefone}</td>
                                <td className="px-4 py-1">{solicitacao.endereco}</td>
                                <td className="px-4 py-1">{(solicitacao.categoriaComercio)}</td>
                                <td className="px-4 py-1">{solicitacao.localizacao[0]}, {solicitacao.localizacao[1]}</td>
                                <td className="px-4 py-1">
                                    <Image alt="imagem da solicitação" src={solicitacao.imagem ? solicitacao.imagem : ''} width={100} height={100}></Image>
                                </td>
                                <td className="px-4 py-1">{solicitacao.situacao ? 'Aprovado' : 'Reprovado'}</td>
                                <td className="px-4 py-1">
                                    <div className="flex flex-col gap-2">
                                        <button className="bg-blue-400 text-white" onClick={() => aprovarComercio(solicitacao)}>Aprovar</button>
                                        <button className="bg-blue-400 text-white" onClick={() => reprovarComercio(solicitacao)}>Reprovar</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AncoraContainer linkVoltar="/adm"></AncoraContainer>
            </div>
        </Template>
    )
}