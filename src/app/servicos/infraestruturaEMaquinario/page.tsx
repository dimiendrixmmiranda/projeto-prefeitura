'use client';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import handleImagemChange from "@/utils/handleImageChange";
import pegarLocalizacao from "@/utils/pegarLocalizacao";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [servicoSolicitado, setServicoSolicitado] = useState('');
    const [condicaoAtual, setCondicaoAtual] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imagemBase64, setImagemBase64] = useState('');
    const [imagemPreview, setImagemPreview] = useState('');
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>(null);

    const limparCampos = () => {
        setNome('');
        setCpf('');
        setTelefone('');
        setEndereco('');
        setBairro('');
        setLatitude('');
        setLongitude('');
        setServicoSolicitado('');
        setCondicaoAtual('');
        setDescricao('');
        setImagemBase64('');
        setImagemPreview('');
        setErroImagemTamanho(null); // Limpar a mensagem de erro ao limpar os campos
        // Limpar o valor do input de arquivo também (opcional)
        const inputImagem = document.getElementById('imagens') as HTMLInputElement | null;
        if (inputImagem) {
            inputImagem.value = '';
        }
    };

    async function salvarPedidoInfraestruturaEMaquinario(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const pedido = {
                nome,
                cpf,
                telefone,
                endereco,
                bairro,
                localizacao: [latitude, longitude],
                servicoSolicitado,
                condicaoAtual,
                descricao,
                situacao: false,
                data: new Date(),
                imagem: imagemBase64
            };

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "pedidosInfraestruturaEMaquinario"), pedido);
            console.log("Pedido salvo com ID:", docRef.id);
            console.log(pedido);

            // 4. Limpar campos após salvar
            limparCampos();
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    }

    return (
        <Template>
            <div className="text-black p-4">
                <h2 className="text-2xl leading-6 text-center text-[--verde] font-bold mb-4 lg:text-3xl">Formulário de Solicitação de Manutenção de Estradas e Serviços de Maquinário</h2>
                <form className="p-6 border-2 border-[--verde] relative flex flex-col gap-3 max-w-[500px] mx-auto  overflow-hidden sm:p-8">
                    <Image src={'/logo-prefeitura.png'} alt="Logo Prefeitura" width={25} height={25} className="absolute top-2 right-2"></Image>
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
                        <label htmlFor="localizacao" className="col-start-1 col-end-3">Informe a localização (Opcional):</label>
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
                        <select name="condicaoAtual" id="condicaoAtual" className="h-[30px] px-2 w-full" value={condicaoAtual} onChange={(e) => setCondicaoAtual(e.target.value)}>
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
                    {/* Area da foto */}
                    <fieldset>
                        <label htmlFor="imagens">Fotos da área (Opcional):</label>
                        <input className="flex flex-col" type="file" id="imagens" accept="image/*" onChange={(e) => handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview)} />
                        {imagemPreview && (
                            <div className="mt-2">
                                <label>Prévia da Imagem:</label>
                                <img src={imagemPreview} alt="Prévia" className="max-w-[100px] max-h-[100px]" />
                            </div>
                        )}
                    </fieldset>
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarPedidoInfraestruturaEMaquinario(e)}>Enviar</button>
                </form>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    );
}