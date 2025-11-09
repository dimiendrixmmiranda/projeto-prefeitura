import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar"
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar"
import { db } from "@/lib/firebase/Firebase"
import useAuth from "@/lib/hooks/useAuth"
import handleImagemChange from "@/lib/utils/handleImageChange"
import { limparVariosInputs } from "@/lib/utils/linparInput"
import pegarLocalizacao from "@/lib/utils/pegarLocalizacao"
import { addDoc, collection } from "firebase/firestore"
import Image from "next/image"
import { useState } from "react"
import { FaUser } from "react-icons/fa"

export default function IluminacaoPublica() {
    const { usuario } = useAuth()

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
            }

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "listaSolicitacaoConcertoIluminacaoPublica"), solicitacao);
            console.log("Pedido salvo com ID:", docRef.id);
            console.log(solicitacao);

            // 4. Limpar campos após salvar
            limparVariosInputs([setNome, setEndereco, setBairro, setLatitude, setLongitude, setImagemBase64, setImagemPreview]);
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
            <h2 className="text-2xl leading-6 text-center font-bold mb-4 lg:text-3xl">Formulário de Solicitação de Concerto de Iluminação Pública</h2>
            <form className="p-6 border-2 border-verde-escuro relative flex flex-col gap-3 max-w-[500px] mx-auto  overflow-hidden rounded-[8px] sm:p-8">
                <Image src={'/logo/logo-prefeitura.png'} alt="Logo Prefeitura" width={25} height={25} className="absolute top-2 right-2"></Image>
                <fieldset>
                    <label htmlFor="nome">Informe seu nome completo:</label>
                    <input type="text" name="nome" id="nome" className="w-full h-[30px] p-2 text-sm border-2 border-verde-escuro rounded-[8px]" value={nome} onChange={(e) => setNome(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="endereco">Endereço da Solicitação:</label>
                    <input type="text" name="endereco" id="endereco" className="w-full h-[30px] p-2 text-sm border-2 border-verde-escuro rounded-[8px]" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label htmlFor="bairro">Bairro da Solicitação:</label>
                    <input type="text" name="bairro" id="bairro" className="w-full h-[30px] p-2 text-sm border-2 border-verde-escuro rounded-[8px]" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                </fieldset>
                <fieldset className="grid grid-cols-2 gap-2">
                    <label htmlFor="localizacao" className="col-start-1 col-end-3">Informe a localização (Opcional):</label>
                    <input type="text" name="latitude" id="latitude" className="w-full h-[30px] p-2 text-sm border-2 border-verde-escuro rounded-[8px]" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                    <input type="text" name="longitude" id="longitude" className="w-full h-[30px] p-2 text-sm border-2 border-verde-escuro rounded-[8px]" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
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
                <button className="bg-verde-escuro py-1 text-2xl uppercase font-bold text-white" onClick={(e) => salvarSolicitacaoConcertoIluminacaoPublica(e)}>Enviar</button>
            </form>
            <BotaoVoltar />
        </div>
    )
}