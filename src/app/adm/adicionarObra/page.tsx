'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer"
import Template from "@/components/template/Template"
import Obra from "@/core/obra/Obra"
import { db } from "@/lib/firebase"
import { addDoc, collection, doc, setDoc } from "firebase/firestore"
import { useState } from "react"

export default function Page() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [mandato, setMandato] = useState('')
    const [dataConclusao, setDataConclusao] = useState('')

    async function salvaObra(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()

        const obra: Obra = {
            data: dataConclusao,
            descricao: descricao,
            governo: mandato,
            imagem: '/wireframe.png',
            titulo: titulo
        }

        try {
            // Adiciona a obra ao Firestore e obtém o ID gerado
            const docRef = await addDoc(collection(db, "obras"), obra);

            // Atualiza o documento com o ID no campo "id"
            await setDoc(doc(db, "obras", docRef.id), {
                ...obra,
                id: docRef.id
            });

            console.log("Obra Salva com ID:", docRef.id);
            limparCampos()
        } catch (error) {
            console.error("Erro ao salvar Obra:", error);
        }
    }

    const limparCampos = () => {
        setTitulo('')
        setDescricao('')
        setMandato('')
        setDataConclusao('')
    }

    return (
        <Template>
            <div className="p-4 min-h-[80vh] flex flex-col w-full">
                <form className="bg-green-400 text-black p-4 font-semibold flex flex-col gap-2 max-w-[500px] w-full self-center">
                    <fieldset className="flex flex-col">
                        <label htmlFor="titulo">Titulo da Obra</label>
                        <input type="text" id="titulo" className="h-[30px] p-2" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="descricao">Descricao da obra</label>
                        <textarea name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} className="h-[180px]"></textarea>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="mandato">Mandato</label>
                        <input type="text" id="mandato" className="h-[30px] p-2" value={mandato} onChange={(e) => setMandato(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="dataConclusao">Data de conclusão:</label>
                        <input type="text" id="dataConclusao" className="h-[30px] p-2" value={dataConclusao} onChange={(e) => setDataConclusao(e.target.value)} />
                    </fieldset>
                    <button className="bg-green-900 text-white py-1 text-xl" onClick={(e) => salvaObra(e)}>Enviar Obra</button>
                </form>
                {/* ##BUG: Esta voltando para a pagina inicial, sujeito a refatoração */}
                <AncoraContainer linkVoltar="/adm"></AncoraContainer>
            </div>
        </Template>
    )
}
