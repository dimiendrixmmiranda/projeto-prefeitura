'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import handleImagemChange from "@/utils/handleImageChange";
import limparCampos from "@/utils/limparCampos";
import pegarLocalizacao from "@/utils/pegarLocalizacao";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [motivoDaSolicitacao, setMotivoDaSolicitacao] = useState('')
    const [tipoDeServico, setTipoDeServico] = useState('')
    const [alturaArvore, setAlturaArvore] = useState('')
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()

    async function salvarSolicitacaoCortePodaDeArvore(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const solicitacao = {
                nome,
                cpf,
                telefone,
                endereco,
                bairro,
                localizacao: [latitude, longitude],
                motivoDaSolicitacao,
                tipoDeServico,
                alturaArvore,
                imagem: imagemBase64,
                data: new Date(),
                situacao: false
            };

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "solicitacaoCortePodaDeArvore"), solicitacao);
            console.log("Pedido salvo com ID:", docRef.id);
            console.log(solicitacao);

            // 4. Limpar campos após salvar
            limparCampos([setNome, setCpf, setTelefone, setEndereco, setBairro, setLatitude, setLongitude, setMotivoDaSolicitacao, setTipoDeServico, setAlturaArvore, setImagemBase64, setImagemPreview]);
            const inputImagem = document.getElementById('imagens') as HTMLInputElement | null;
            if (inputImagem) {
                inputImagem.value = '';
            }


        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    }

    return (
        <Template>
            <div className="text-black p-4">
                <h2 className="text-2xl leading-6 text-center text-[--verde] font-bold mb-4 lg:text-3xl">Formulário de Solicitação de Corte ou Poda de Árvores</h2>
                <form className="relative p-6 border-2 border-[--verde] flex flex-col gap-3 max-w-[500px] mx-auto sm:p-8">
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
                        <label htmlFor="motivoSolicitacao">Motivo da solicitação:</label>
                        <select name="motivoSolicitacao" id="motivoSolicitacao" className="h-[30px] px-2" value={motivoDaSolicitacao} onChange={(e) => setMotivoDaSolicitacao(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="riscoDeQueda">Risco de Queda</option>
                            <option value="galhosAtingindoFiacao">Galhos Atingindo Fiação</option>
                            <option value="raizesDanificandoCalcada">Raízes Danificando Calçada</option>
                        </select>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="tipoServico">Tipo do serviço:</label>
                        <select name="tipoServico" id="tipoServico" className="h-[30px] px-2" value={tipoDeServico} onChange={(e) => setTipoDeServico(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="corteTotal">Corte Total</option>
                            <option value="poda">Poda</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="altura">Altura da Árvore (Opcional):</label>
                        <input type="text" name="altura" id="altura" className="w-full h-[30px] rounded-lg p-2 text-sm" value={alturaArvore} onChange={(e) => setAlturaArvore(e.target.value)} />
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
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarSolicitacaoCortePodaDeArvore(e)}>Enviar</button>
                </form>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}