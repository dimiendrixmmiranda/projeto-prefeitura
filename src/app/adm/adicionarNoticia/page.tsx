'use client'
import Template from "@/components/template/Template";
import Noticia from "@/core/noticia/Noticia";
import { db } from "@/lib/firebase";
import { getAuth } from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { MouseEvent, useState } from "react";

export default function AdicionarNoticia() {
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [materia, setMateria] = useState('')
    const [autor, setAutor] = useState('')

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
            imagem: '/wireframe.png',
            titulo: titulo,
            materia: materia,
            descricao: descricao,
            autor: autor,
            data: new Date().toISOString(),
        };
        await salvar(noticia);
        window.location.reload()
    }
    
    return (
        <Template>
            <div className="p-4">
                <form className="bg-green-400 text-black p-2 font-semibold flex flex-col gap-2">
                    <fieldset className="flex flex-col">
                        <label htmlFor="titulo">Titulo da matéria</label>
                        <input type="text" id="titulo" className="h-[30px] p-2" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="descricao">Descricao da matéria</label>
                        <input type="text" id="descricao" className="h-[30px] p-2" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="materia">Materia</label>
                        <textarea name="materia" id="materia" rows={10} cols={40} className="w-full p-2" value={materia} onChange={(e) => setMateria(e.target.value)}></textarea>
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label htmlFor="Autor">Autor</label>
                        <input type="text" id="autor" className="h-[30px] p-2" value={autor} onChange={(e) => setAutor(e.target.value)}/>
                    </fieldset>
                    <button className="bg-green-900 text-white py-1 text-xl" onClick={(e) => salvarNoticia(e)}>Enviar Notícia</button>
                </form>
            </div>
            <h2>Adicionar uma nova noticia</h2>
        </Template>
    )
}