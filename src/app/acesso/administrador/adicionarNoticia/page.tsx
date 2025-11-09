'use client'
import Template from "@/components/template/Template";
import handleImagemChange from "@/lib/utils/handleImageChange";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import { limparVariosInputs } from "@/lib/utils/linparInput";
import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar";
import { FaArrowLeft } from "react-icons/fa";

export default function Page() {
    const [titulo, setTitulo] = useState('')
    const [subtitulo, setSubtitulo] = useState('')
    const [data, setData] = useState('')
    const [conteudo, setConteudo] = useState('')
    const [autor, setAutor] = useState('')
    const [, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()
    const [dialogVisivel, setDialogVisivel] = useState(false)
    const [salvando, setSalvando] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!titulo || !subtitulo || !imagemBase64) {
            alert("Preencha todos os campos obrigatórios.")
            return
        }
        setDialogVisivel(true)
    }

    const salvarNoticia = async () => {
        setSalvando(true)
        try {
            await addDoc(collection(db, "listaDeNoticias"), {
                titulo,
                subtitulo,
                data,
                conteudo,
                autor,
                imagemBase64,
            })
            alert("Evento salva com sucesso!")
            setImagemBase64(null)
            setImagemPreview(null)
            limparVariosInputs([setTitulo, setSubtitulo, setData, setConteudo, setAutor])
        } catch (error) {
            console.error("Erro ao salvar a noticia:", error)
            alert("Erro ao salvar a noticia. Tente novamente.")
        } finally {
            setSalvando(false)
            setDialogVisivel(false)
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col gap-2 md:min-h-[72vh] 2xl:min-h-[73.5vh]">
                <h2 className="uppercase font-black text-2xl text-center text-verde-escuro">Adicionar Nova Notícia</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-[500px] mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Titulo da Noticia...."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />
                    <input
                        type="text"
                        placeholder="Subtitulo da Noticia...."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={subtitulo}
                        onChange={(e) => setSubtitulo(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />
                    <textarea
                        placeholder="Conteudo da Noticia..."
                        className="p-2 h-[350px] overflow-hidden text-black overflow-y-scroll"
                        value={conteudo}
                        onChange={(e) => setConteudo(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    ></textarea>

                    <input
                        type="date"
                        placeholder="Data de Nascimento..."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <input
                        type="text"
                        placeholder="Autor..."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <fieldset>
                        <label htmlFor="imagens">Foto do Evento:</label>
                        <input
                            className="flex flex-col"
                            type="file"
                            id="imagens"
                            accept="image/*"
                            onChange={(e) => handleImagemChange(e, setErroImagemTamanho, setImagemBase64, setImagemPreview)}
                        />
                        {imagemPreview && (
                            <div className="mt-2">
                                <label>Prévia da Imagem:</label>
                                <img src={imagemPreview} alt="Prévia" className="max-w-[100px] max-h-[100px]" />
                            </div>
                        )}
                    </fieldset>

                    <button
                        className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900"
                        type="submit"
                    >
                        Salvar
                    </button>
                </form>

                <div className="max-w-[500px] self-center w-full flex justify-end">
                    <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/acesso/administrador"/>
                </div>

                <Dialog
                    header="Confirmar informações"
                    visible={dialogVisivel}
                    onHide={() => setDialogVisivel(false)}
                    footer={
                        <div className="flex justify-end gap-2">
                            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={() => setDialogVisivel(false)} />
                            <Button label={salvando ? "Salvando..." : "Confirmar"} icon="pi pi-check" loading={salvando} onClick={salvarNoticia} />
                        </div>
                    }
                    className="max-w-[800px] w-full"
                >
                    <div className="flex flex-col gap-2 text-black">
                        <p><strong>Título:</strong> {titulo}</p>
                        <p><strong>Descrição:</strong> {conteudo}</p>
                        <p><strong>Início:</strong> { }</p>
                        {imagemPreview && <img src={imagemPreview} alt="Prévia" className="max-w-[120px] rounded-md" />}
                    </div>
                </Dialog>
            </div>
        </Template>
    )
}
