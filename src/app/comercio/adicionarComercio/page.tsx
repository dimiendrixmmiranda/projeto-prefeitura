"use client"
import { useState } from "react";
import Template from "@/components/template/Template";
import Image from "next/image";
import style from './style.module.css';
import AncoraContainer from "@/components/ancora/AncoraContainer";
import pegarLocalizacao from "@/utils/pegarLocalizacao";
import handleImagemChange from "@/utils/handleImageChange";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import limparCampos from "@/utils/limparCampos";

export default function Page() {
    const [nome, setNome] = useState('')
    const [horarioDeAtendimento, setHorarioDeAtendimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [endereco, setEndereco] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [categoriaComercio, setCategoriaComercio] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [email, setEmail] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [erroImagemTamanho, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()
    const [bairro, setBairro] = useState('')

    
    async function salvarNovoComercio(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        if (erroImagemTamanho) {
            alert(erroImagemTamanho)
            return
        }

        try {
            const solicitacao = {
                nome,
                horarioDeAtendimento,
                telefone,
                endereco,
                bairro,
                localizacao: [latitude, longitude],
                categoriaComercio,
                redesSociais: [{
                    icone: 'IoLogoWhatsapp',
                    nome: 'WhatsApp',
                    link: whatsapp
                },
                {
                    icone: 'AiFillInstagram',
                    nome: 'Instagram',
                    link: instagram
                },
                {
                    icone: 'IoLogoFacebook',
                    nome: 'Facebook',
                    link: facebook
                },
                {
                    icone: 'MdEmail',
                    nome: 'Email',
                    link: email
                },
                ],
                imagem: imagemBase64,
                situacao: false,
                data: new Date(),
            };

            const docRef = await addDoc(collection(db, "solicitacacaoDeCadastroDeComercio"), solicitacao);
            await setDoc(doc(db, "solicitacacaoDeCadastroDeComercio", docRef.id), { ...solicitacao, id: docRef.id });

            console.log("Pedido salvo com ID:", docRef.id);
            console.log(solicitacao);

            // 4. Limpar campos após salvar
            limparCampos([setNome, setTelefone, setEndereco, setHorarioDeAtendimento, setLatitude, setLongitude, setCategoriaComercio, setImagemBase64, setImagemPreview, setWhatsapp, setEmail, setInstagram, setFacebook]);

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
            <div className="max-w-[1200px] mx-auto">
                <div className="text-black m-2 p-2 border-2 border-[--verde] rounded-lg flex flex-col gap-4 items-center max-w-[570px] w-[95%] mx-auto lg:grid lg:grid-cols-2 lg:max-w-[1000px] lg:my-6">
                    <div className="relative w-[280px] h-[210px] sm:w-[360px] sm:h-[300px] md:w-[450px] md:h-[380px] lg:w-full">
                        <Image alt="comercio" src={'/comercio.svg'} fill className="object-cover" />
                    </div>
                    <form className={style.formulario}>
                        <fieldset>
                            <label htmlFor="nome">Digite o nome do seu Comércio:</label>
                            <input type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="atendimento">Digite seu Horário de Atendimento:</label>
                            <input type="text" name="atendimento" id="atendimento" value={horarioDeAtendimento} onChange={(e) => setHorarioDeAtendimento(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="endereco">Endereço:</label>
                            <input type="text" name="endereco" id="endereco" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="bairro">Bairro:</label>
                            <input type="text" name="bairro" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                        </fieldset>
                        <fieldset className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <label className="col-start-1 col-end-3">Informe a localização do seu comércio:</label>
                            <input type="text" placeholder="Latitude..." name="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                            <input type="text" placeholder="Longitude..." name="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
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
                        <fieldset className="flex gap-4">
                            <label htmlFor="categoria">Categoria:</label>
                            <select name="categoria" id="categoria" className="w-full" value={categoriaComercio} onChange={(e) => setCategoriaComercio(e.target.value)} >
                                <option value="">Selecione</option>
                                <option value="padaria">Padaria</option>
                                <option value="mercado">Mercado</option>
                                <option value="farmacia">Farmácia</option>
                                <option value="petshop">Petshop</option>
                                <option value="veterinaria">Veterinária</option>
                            </select>
                        </fieldset>
                        <fieldset className={style.formularioRedesSociais}>
                            <h2>Informe o link de suas Redes Sociais:</h2>
                            <fieldset>
                                <label htmlFor="whatsapp">WhatsApp</label>
                                <input type="text" name="whatsapp" id="whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Email:</label>
                                <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="facebook">Facebook:</label>
                                <input type="text" name="facebook" id="facebook" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                            </fieldset>
                            <fieldset>
                                <label htmlFor="instagram">Instagram:</label>
                                <input type="text" name="instagram" id="instagram" value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                            </fieldset>
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
                        <fieldset className="w-full grid grid-cols-2 gap-2">
                            <button type="reset" className="w-full h-full bg-red-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }}>Cancelar</button>
                            <button type="submit" className="w-full h-full bg-green-600 p-1 text-lg font-bold text-white" style={{ textShadow: '1px 1px 2px black' }} onClick={(e) => salvarNovoComercio(e)}>Enviar</button>
                        </fieldset>
                    </form>
                </div>
                <div className="my-6 max-w-[570px] mx-auto lg:max-w-[1000px] lg:mr-6">
                    <AncoraContainer />
                </div>
            </div>
        </Template>
    );
}
