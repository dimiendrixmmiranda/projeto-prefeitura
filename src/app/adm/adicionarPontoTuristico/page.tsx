'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import { db } from "@/lib/firebase";
import limparCampos from "@/utils/limparCampos";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";

export default function Page() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    async function salvarNovoPontoTuristico(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        try {
            const pontoTuristico = {
               titulo,
               descricao,
               localizacao: [latitude, longitude],
            }

            // 3. Salvar no Firestore
            const docRef = await addDoc(collection(db, "pontosTuristicos"), pontoTuristico);
            await setDoc(doc(db, "pontosTuristicos", docRef.id), { ...pontoTuristico, id: docRef.id });
            
            // 4. Limpar campos após salvar
            limparCampos([setTitulo, setDescricao, setLatitude, setLongitude])
        } catch (error) {
            console.error("Erro ao salvar pedido:", error);
        }
    }

    return (
        <Template>
            <div className="text-black p-4">
                <form className="flex flex-col gap-4 p-2 border-2 border-[--verde] rounded-md max-w-[600px] w-full mx-auto">
                    <fieldset className="flex flex-col">
                        <label htmlFor="titulo">Titulo do Ponto Turístico:</label>
                        <input className="w-full h-[30px] px-2" type="text" name="titulo" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="descricao">Descricao do Ponto Turístico:</label>
                        <textarea className="h-[200px] p-2" name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset className="grid grid-cols-2 gap-x-2">
                        <label htmlFor="localizacao" className="col-start-1 col-end-3">Localização para Link</label>
                        <input className="w-full h-[30px] px-2" type="text" name="latitude" id="latitude" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
                        <input className="w-full h-[30px] px-2" type="text" name="longitude" id="longitude" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="imagem">Selecionar imagem do ponto turistico</label>
                        <div className="w-20 h-20 bg-zinc-600 mx-auto"></div>
                    </fieldset>
                    <button className="uppercase font-bold py-2 mt-2 bg-[--verde] text-white" onClick={(e) => salvarNovoPontoTuristico(e)}>Salvar Evento</button>
                </form>
                <AncoraContainer linkVoltar="/adm"></AncoraContainer>
            </div>
        </Template>
    )
}