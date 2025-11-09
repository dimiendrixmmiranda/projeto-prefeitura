'use client'
import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar";
import Imagem from "@/components/base/imagem/Imagem";
import Template from "@/components/template/Template";
import Comercio from "@/interfaces/Comercio";
import { db } from "@/lib/firebase/Firebase";
import { useListaDeComercios } from "@/lib/hooks/useListaDeComercios";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Dialog } from 'primereact/dialog';

export default function Page() {
    const { comercios, loading } = useListaDeComercios()
    const [visible, setVisible] = useState(false);
    const [solicitacaoAtual, setSolicitacaoAtual] = useState<Comercio | null>(null)

    console.log(comercios)

    function selecionarSolicitacaoAtual(solicitacao: Comercio) {
        setSolicitacaoAtual(solicitacao)
        setVisible(true)
    }

    async function confirmarSolicitacao(id: string) {
        try {
            const docRef = doc(db, "listaDeComercios", id);
            await updateDoc(docRef, {
                aprovado: true,
            });
            setVisible(false);
            setSolicitacaoAtual(null);
            console.log("Solicitação marcada como concluída!");
        } catch (error) {
            console.error("Erro ao atualizar solicitação:", error);
        }
    }
    return (
        <Template>
            <div className="p-4 flex flex-col gap-2 md:min-h-[72vh] 2xl:min-h-[73.5vh] xl:p-10">
                <h2 className="uppercase font-black text-2xl text-center text-verde-escuro">Painel de solicitações de Adição de Comércio</h2>
                <div className="overflow-x-auto">
                    {
                        loading ? (
                            <div className="flex justify-center items-center h-[300px] md:h-[500px]">
                                <h2 className="text-2xl font-bold">
                                    Carregando Dados
                                </h2>
                            </div>
                        ) : (
                            <table className="w-full border border-gray-300 text-sm text-left">
                                <thead className="bg-gray-200 text-gray-700">
                                    <tr>
                                        <th className="p-2 border border-gray-400 truncate">Nome</th>
                                        <th className="p-2 border border-gray-400 truncate">Endereço</th>
                                        <th className="p-2 border border-gray-400 truncate">Situação</th>
                                        <th className="p-2 border border-gray-400 truncate">Localização</th>
                                        <th className="p-2 border border-gray-400 truncate">Imagem</th>
                                        <th className="p-2 border border-gray-400 truncate">Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comercios.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-100">
                                            <td className="p-2 border truncate">{item.nome}</td>
                                            <td className="p-2 border truncate text-center">{item.endereco.rua}, {item.endereco.numero} - {item.endereco.complemento}</td>
                                            <td className="p-2 border truncate text-center">
                                                {item.aprovado ? (
                                                    <span className="text-green-600 font-semibold text-center">Concluído</span>
                                                ) : (
                                                    <span className="text-red-600 font-semibold text-center">Pendente</span>
                                                )}
                                            </td>
                                            {/* <td className="p-2 border truncate text-center">{formatarDataPadrao(item.data)}</td> */}
                                            <td className="p-2 border text-blue-600 underline">
                                                <a
                                                    href={`https://www.google.com/maps?q=${item.endereco.latitude},${item.endereco.longitude}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Ver mapa
                                                </a>
                                            </td>
                                            <td className="p-2 border flex justify-center">
                                                <Imagem imagem={item.imagemBase64} />
                                            </td>
                                            <td className="p-2 border">
                                                {
                                                    item.aprovado ? (
                                                        <div>
                                                            <h2 className="font-bold">Atendida</h2>
                                                        </div>
                                                    ) : (
                                                        <button
                                                            className="w-full h-full bg-green-600 flex justify-center items-center p-2 rounded-[8px] text-white" style={{ textShadow: '1px 1px 2px black' }}
                                                            onClick={() => selecionarSolicitacaoAtual(item)}
                                                        >
                                                            Concluir
                                                        </button>
                                                    )
                                                }
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )
                    }
                </div>
                <div className="flex justify-end">
                    <BotaoNavegar icone={<FaArrowLeft />} label="Voltar" link="/acesso/administrador" />
                </div>
            </div >
            {
                solicitacaoAtual != null ? (
                    <Dialog header="Confirme os dados!" visible={visible} style={{ width: '95vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                        <div className="flex flex-col gap-4 overflow-hidden">
                            <div className="overflow-x-auto rounded-lg border border-gray-300">
                                <table className="w-full border border-gray-300 text-sm text-left">
                                    <thead className="bg-gray-200 text-gray-700">
                                        <tr>
                                            <th className="p-2 border border-gray-400 truncate">Nome</th>
                                            <th className="p-2 border border-gray-400 truncate">Endereço</th>
                                            <th className="p-2 border border-gray-400 truncate">Situação</th>
                                            <th className="p-2 border border-gray-400 truncate">Localização</th>
                                            <th className="p-2 border border-gray-400 truncate">Imagem</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr key={solicitacaoAtual.id} className="hover:bg-gray-100">
                                            <td className="p-2 border truncate">{solicitacaoAtual.nome}</td>
                                            <td className="p-2 border truncate text-center">{solicitacaoAtual.endereco.rua}, {solicitacaoAtual.endereco.numero} - {solicitacaoAtual.endereco.complemento}</td>
                                            <td className="p-2 border truncate text-center">
                                                {solicitacaoAtual.aprovado ? (
                                                    <span className="text-green-600 font-semibold text-center">Concluído</span>
                                                ) : (
                                                    <span className="text-red-600 font-semibold text-center">Pendente</span>
                                                )}
                                            </td>
                                            {/* <td className="p-2 border truncate text-center">{formatarDataPadrao(solicitacaoAtual.data)}</td> */}
                                            <td className="p-2 border text-blue-600 underline">
                                                <a
                                                    href={`https://www.google.com/maps?q=${solicitacaoAtual.endereco.latitude},${solicitacaoAtual.endereco.longitude}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Ver mapa
                                                </a>
                                            </td>
                                            <td className="p-2 border flex justify-center">
                                                <Imagem imagem={solicitacaoAtual.imagemBase64} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    className="bg-green-600 text-white py-2"
                                    style={{ textShadow: '1px 1px 2px black' }}
                                    onClick={() => confirmarSolicitacao(solicitacaoAtual.id)}
                                >
                                    Confirmar
                                </button>
                                <button
                                    className="bg-red-600 text-white py-2"
                                    style={{ textShadow: '1px 1px 2px black' }}
                                    onClick={() => {
                                        setVisible(false)
                                        setSolicitacaoAtual(null)
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </Dialog>
                ) : ''
            }
        </Template>
    )
}