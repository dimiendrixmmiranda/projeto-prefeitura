'use client'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import Template from "@/components/template/Template";
import Noticia from "@/core/noticia/Noticia";
import { db } from "@/lib/firebase";
import handleImagemChange from "@/utils/handleImageChange";
import { getAuth } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { MouseEvent, useState } from "react";

export default function AdicionarNoticia() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [materia, setMateria] = useState('')
    const [autor, setAutor] = useState('')
    const [, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()
    const materiaArray = materia.split('\n').map(paragraph => paragraph.trim()).filter(paragraph => paragraph !== '');

    async function salvar(noticia: Noticia) {
        const auth = getAuth();
        if (!auth.currentUser) {
            console.error("Usuário não autenticado!");
            return;
        }

        try {
            const docRef = await addDoc(collection(db, "noticias"), noticia);
            await setDoc(doc(db, "noticias", docRef.id), { ...noticia, id: docRef.id });
            console.log("Notícia salva com ID:", docRef.id);
        } catch (error) {
            console.error("Erro ao salvar notícia:", error);
        }
    }

    async function salvarNoticia(e: MouseEvent) {
        e.preventDefault();
        const noticia: Noticia = {
            imagem: imagemBase64 || '/wireframe.png',
            titulo: titulo,
            materia: materiaArray,
            descricao: descricao,
            autor: autor,
            data: new Date().toISOString(),
        };
        await salvar(noticia);
        window.location.reload()
    }

    return (
        <Template>
            <div className="p-4 flex flex-col">
                <form className="bg-green-400 text-black p-4 font-semibold flex flex-col gap-2 max-w-[500px] w-full self-center">
                    <fieldset className="flex flex-col">
                        <label htmlFor="titulo">Titulo da matéria</label>
                        <input type="text" id="titulo" className="h-[30px] p-2" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="descricao">Descricao da matéria</label>
                        <input type="text" id="descricao" className="h-[30px] p-2" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="materia">Materia</label>
                        <textarea name="materia" id="materia" rows={10} cols={40} className="w-full p-2" value={materia} onChange={(e) => setMateria(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="Autor">Autor</label>
                        <input type="text" id="autor" className="h-[30px] p-2" value={autor} onChange={(e) => setAutor(e.target.value)} />
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
                    <button className="bg-green-900 text-white py-1 text-xl" onClick={(e) => salvarNoticia(e)}>Enviar Notícia</button>
                </form>
                {/* ##BUG: Esta voltando para a pagina inicial, sujeito a refatoração */}
                <AncoraContainer linkVoltar="/adm"></AncoraContainer>
            </div>
        </Template>
    )
}