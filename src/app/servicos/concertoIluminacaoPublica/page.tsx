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
    const [endereco, setEndereco] = useState('')
    const [bairro, setBairro] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>('')
    const [imagemBase64, setImagemBase64] = useState('')
    const [imagemPreview, setImagemPreview] = useState('')

    async function salvarSolicitacaoConcertoIluminacaoPublica(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const solicitacao = {
                nome,
                endereco,
                bairro,
                localizacao: [latitude, longitude],
                imagem: imagemBase64,
                data: new Date(),
                situacao: false
            };

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "solicitacaoConcertoIluminacaoPublica"), solicitacao);
            console.log("Pedido salvo com ID:", docRef.id);
            console.log(solicitacao);

            // 4. Limpar campos após salvar
            limparCampos([setNome, setEndereco, setBairro, setLatitude, setLongitude, setImagemBase64, setImagemPreview]);
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
                <h2 className="text-2xl leading-6 text-center text-[--verde] font-bold mb-4 lg:text-3xl">Formulário de Solicitação de Concerto de Iluminação Pública</h2>
                <form className="p-6 border-2 border-[--verde] relative flex flex-col gap-3 max-w-[500px] mx-auto  overflow-hidden sm:p-8">
                    <Image src={'/logo-prefeitura.png'} alt="Logo Prefeitura" width={25} height={25} className="absolute top-2 right-2"></Image>
                    <fieldset>
                        <label htmlFor="nome">Informe seu nome completo:</label>
                        <input type="text" name="nome" id="nome" className="w-full h-[30px] rounded-lg p-2 text-sm" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="endereco">Endereço da Solicitação:</label>
                        <input type="text" name="endereco" id="endereco" className="w-full h-[30px] rounded-lg p-2 text-sm" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="bairro">Bairro da Solicitação:</label>
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
                    <button className="bg-[--verde] py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarSolicitacaoConcertoIluminacaoPublica(e)}>Enviar</button>
                </form>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    )
}