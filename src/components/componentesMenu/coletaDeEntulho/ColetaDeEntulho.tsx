'use client'
import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar";
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar";
import { db } from "@/lib/firebase/Firebase";
import useAuth from "@/lib/hooks/useAuth";
import { useSolicitacaoColetaDeEntulho } from "@/lib/hooks/useSolicitacaoColetaDeEntulho";
import handleImagemChange from "@/lib/utils/handleImageChange";
import { limparVariosInputs } from "@/lib/utils/linparInput";
import pegarLocalizacao from "@/lib/utils/pegarLocalizacao";
import { addDoc, collection } from "firebase/firestore";
import Image from "next/image";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function ColetaDeEntulho() {
    const { usuario } = useAuth()
    const { solicitacaoColetaDeEntulho } = useSolicitacaoColetaDeEntulho()
    console.log(solicitacaoColetaDeEntulho)
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [telefone, setTelefone] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [tipoDeEntulho, setTipoDeEntulho] = useState('')
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>('')
    const [imagemBase64, setImagemBase64] = useState('')
    const [imagemPreview, setImagemPreview] = useState('')
    const [informacaoAdicional, setInformacaoAdicional] = useState('')

    async function salvarSolicitacaoDeColetaDeEntulho(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const solicitacao = {
                nome,
                cpf,
                endereco,
                bairro,
                telefone,
                localizacao: [latitude, longitude],
                tipoDeEntulho,
                imagem: imagemBase64,
                informacaoAdicional,
                data: new Date(),
                situacao: false
            };

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "listaSolicitacaoColetaDeEntulho"), solicitacao);
            console.log("Pedido salvo com ID:", docRef.id);
            console.log(solicitacao);

            // 4. Limpar campos após salvar
            limparVariosInputs([setNome, setCpf, setEndereco, setBairro, setLatitude, setLongitude, setTipoDeEntulho, setImagemBase64, setImagemPreview, setInformacaoAdicional]);
            const inputImagem = document.getElementById('imagens') as HTMLInputElement | null;
            if (inputImagem) {
                inputImagem.value = '';
            }


        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    }

    if (!usuario) {
        return (
            <div className="p-4 max-w-[900px] mx-auto flex flex-col justify-center items-center gap-4 min-h-[60vh] lg:p-8 lg:min-h-[70vh] lg:max-w-[1000px] xl:min-h-[75vh]">
                <h2 className="font-bold text-2xl text-center">Crie uma conta ou faça o login para cadastrar seu comércio!</h2>
                <div className="grid grid-cols-2">
                    <BotaoNavegar icone={<FaUser />} label="Fazer Login" link="/login" />
                    <BotaoVoltar />
                </div>
            </div>

        )
    }

    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8">
            <h2 className="text-2xl leading-6 text-center font-bold mb-4 rounded-[8px] lg:text-3xl">Formulário de Solicitação de coleta de Entulho Orgânico ou de Obra</h2>
            <form className="p-6 border-2 border-[--verde] relative flex flex-col gap-3 max-w-[500px] mx-auto overflow-hidden rounded-[8px] sm:p-8 lg:grid lg:grid-cols-2 lg:max-w-[700px] lg:gap-x-6">
                <Image src={'/logo/logo-prefeitura.png'} alt="Logo Prefeitura" width={25} height={25} className="absolute top-2 right-2"></Image>
                <fieldset>
                    <label htmlFor="nome">Informe seu nome:</label>
                    <input type="text" name="nome" id="nome" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={nome} onChange={(e) => setNome(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="cpf">Informe seu cpf:</label>
                    <input type="text" name="cpf" id="cpf" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="endereco">Informe seu Endereço:</label>
                    <input type="text" name="endereco" id="endereco" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="bairro">Informe seu Bairro:</label>
                    <input type="text" name="bairro" id="bairro" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="telefone">Informe seu Telefone:</label>
                    <input type="text" name="telefone" id="telefone" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="tipoDeEntulho">Tipo de Entulho</label>
                    <select name="tipoDeEntulho" id="tipoDeEntulho" className="h-[30px] px-2 border-2 border-verde-escuro rounded-[8px]" value={tipoDeEntulho} onChange={(e) => setTipoDeEntulho(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="entulho-organico">Entulho Organico</option>
                        <option value="entulho-de-obra">Entulho De Obra</option>
                    </select>
                </fieldset>
                <fieldset className="grid grid-cols-2 gap-2 lg:col-start-1 lg:col-end-3">
                    <label htmlFor="localizacao" className="col-start-1 col-end-3">Informe a localização (Opcional):</label>
                    <input type="text" name="latitude" id="latitude" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    <input type="text" name="longitude" id="longitude" className="w-full h-[30px] rounded-[8px] p-2 text-sm border-2 border-verde-escuro" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    <button
                        className="col-start-1 col-end-3 bg-verde-escuro text-white font-bold py-1"
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
                {/* Area da foto */}
                <fieldset className="lg:col-start-1 lg:col-end-3">
                    <label htmlFor="imagens">Fotos da área (Opcional):</label>
                    <input className="flex flex-col" type="file" id="imagens" accept="image/*" onChange={(e) => handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview)} />
                    {imagemPreview && (
                        <div className="mt-2">
                            <label>Prévia da Imagem:</label>
                            <img src={imagemPreview} alt="Prévia" className="max-w-[100px] max-h-[100px]" />
                        </div>
                    )}
                </fieldset>
                <fieldset className="flex flex-col lg:col-start-1 lg:col-end-3">
                    <label htmlFor="informacaoAdicional">Informação Adicional:</label>
                    <textarea name="informacaoAdicional" id="informacaoAdicional" className="h-[200px] rounded-[8px] border-2 border-verde-escuro p-2" value={informacaoAdicional} onChange={(e) => setInformacaoAdicional(e.target.value)}></textarea>
                </fieldset>
                <button className="bg-verde-escuro py-1 text-2xl uppercase font-bold text-white lg:col-start-1 lg:col-end-3" onClick={(e) => salvarSolicitacaoDeColetaDeEntulho(e)}>Enviar</button>
            </form>
            <BotaoVoltar />
        </div>
    )
}