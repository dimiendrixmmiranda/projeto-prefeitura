'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import pegarLocalizacao from "@/utils/pegarLocalizacao";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

export default function Page() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [servicoSolicitado, setServicoSolicitado] = useState('')
    const [condicaoAtual, setCondicaoAtual] = useState('')
    const [descricao, setDescricao] = useState('')

    const limparCampos = () => {
        setNome('')
        setCpf('')
        setTelefone('')
        setEndereco('')
        setBairro('')
        setLatitude('')
        setLongitude('')
        setServicoSolicitado('')
        setCondicaoAtual('')
        setDescricao('')
    }

    async function salvarPedidoInfraestruturaEMaquinario(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        const pedido = {
            nome,
            cpf,
            telefone,
            endereco,
            bairro,
            latitude,
            longitude,
            servicoSolicitado,
            condicaoAtual,
            descricao,
            concluido: false,
            data: new Date()
        }
        try {
            const docRef = await addDoc(collection(db, "pedidosInfraestruturaEMaquinario"), pedido);
            console.log("Infra salva com id", docRef.id);
            limparCampos()
        } catch (error) {
            console.error("Erro ao salvar Infra:", error);
        }
    }

    return (
        <Template>
            <div className="text-black p-4">
                <form className="p-6 border-2 border-[--verde] relative flex flex-col gap-3 max-w-[500px] mx-auto sm:p-8">
                    <fieldset>
                        <label htmlFor="nome">Informe seu nome completo:</label>
                        <input type="text" name="nome" id="nome" className="w-full h-[30px] rounded-lg p-2 text-sm" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="cpf">Informe seu nome CPF:</label>
                        <input type="text" name="cpf" id="cpf" className="w-full h-[30px] rounded-lg p-2 text-sm" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="telefone">Informe seu nome Telefone:</label>
                        <input type="text" name="telefone" id="telefone" className="w-full h-[30px] rounded-lg p-2 text-sm" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Informe seu Endereço:</label>
                        <input type="text" name="endereco" id="endereco" className="w-full h-[30px] rounded-lg p-2 text-sm" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bairro">Informe seu Bairro:</label>
                        <input type="text" name="bairro" id="bairro" className="w-full h-[30px] rounded-lg p-2 text-sm" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    </fieldset>
                    <fieldset className="grid grid-cols-2 gap-2">
                        <label htmlFor="localizacao" className="col-start-1 col-end-3">Informe a localição (Opcional):</label>
                        <input type="text" name="latitude" id="latitude" className="w-full h-[30px] rounded-lg p-2 text-sm" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                        <input type="text" name="longitude" id="longitude" className="w-full h-[30px] rounded-lg p-2 text-sm" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                        <button
                            className="col-start-1 col-end-3 bg-[--verde] text-white font-bold py-1"
                            onClick={async (e) => {
                                e.preventDefault();
                                try {
                                    const [lat, long] = await pegarLocalizacao();
                                    setLatitude(lat.toString());
                                    setLongitude(long.toString());
                                } catch (error) {
                                    console.error("Erro ao obter localização:", error);
                                }
                            }}
                        >
                            Pegar Localização
                        </button>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="servicoSolicitado">Serviço Solicitado</label>
                        <select name="servicoSolicitado" id="servicoSolicitado" className="h-[30px] px-2" value={servicoSolicitado} onChange={(e) => setServicoSolicitado(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="nivelamento">Nivelamento</option>
                            <option value="cascalhamento">Cascalhamento</option>
                            <option value="limpezaDeValetas">Limpeza De Valetas</option>
                            <option value="patrolamento">Patrolamento</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="condicaoAtual">Condição Atual da Estrada</label>
                        <select name="condicaoAtual" id="condicaoAtual" className="h-[30px] px-2" value={condicaoAtual} onChange={(e) => setCondicaoAtual(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="estrada-esburacada">Estrada emburacada</option>
                            <option value="trecho-intransferivel">Trecho Intransferivel</option>
                            <option value="lama-excessiva">Lama excessiva em dias de chuva</option>
                            <option value="aterro-encascalhamento-desgastado">Aterro/encascalhamento desgastado</option>
                            <option value="erosao-nas-laterais">erosao nas laterais</option>
                            <option value="valetas-profundas">valetas profundas</option>
                            <option value="obstrucao-por-arvore">obstrução por arvore</option>
                            <option value="alagamentos-frequentes">alagamentos frequentes</option>
                            <option value="falta-de-drenagem">falta de drenagem</option>
                            <option value="necessidade-de-alargamento">necessidade de alargamento</option>
                            <option value="outro">Outro (Descrever no campo de descrição)</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="descricao">Descricao do serviço desejado (Opcional)</label>
                        <textarea name="descricao" id="descricao" className="w-full h-[200px] p-2" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="area">Foto da área (Opcional):</label>
                        <div className="w-20 h-20 bg-black mx-auto"></div>
                    </fieldset>
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarPedidoInfraestruturaEMaquinario(e)}>Enviar</button>
                </form>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}