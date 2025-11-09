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
    const [descricao, setDescricao] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [comeco, setComeco] = useState('')
    const [local, setLocal] = useState('')
    const [tipo, setTipo] = useState('')

    const [, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()
    const [dialogVisivel, setDialogVisivel] = useState(false)
    const [salvando, setSalvando] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!titulo || !descricao || !imagemBase64) {
            alert("Preencha todos os campos obrigatórios.")
            return
        }
        setDialogVisivel(true)
    }

    const salvarEvento = async () => {
        setSalvando(true)
        try {
            await addDoc(collection(db, "listaDeEventos"), {
                titulo,
                descricao,
                latitude,
                longitude,
                comeco,
                local,
                tipo,
                imagemBase64,
                dataCriacao: new Date()
            })
            alert("Evento salva com sucesso!")
            setImagemBase64(null)
            setImagemPreview(null)
            limparVariosInputs([setTitulo, setDescricao, setLatitude, setLongitude, setComeco, setLocal])
        } catch (error) {
            console.error("Erro ao salvar a evento:", error)
            alert("Erro ao salvar a evento. Tente novamente.")
        } finally {
            setSalvando(false)
            setDialogVisivel(false)
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col gap-2 md:min-h-[72vh] 2xl:min-h-[73.5vh]">
                <h2 className="uppercase font-black text-2xl text-center text-verde-escuro">Adicionar Novo Evento</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-[500px] mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Titulo do Evento...."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <textarea
                        placeholder="Descrição do Evento..."
                        className="p-2 h-[140px] overflow-hidden text-black"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    ></textarea>

                    <input
                        type="text"
                        placeholder="Latitude"
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={latitude}
                        onChange={(e) => setLatitude(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />
                    <input
                        type="text"
                        placeholder="Longitude"
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={longitude}
                        onChange={(e) => setLongitude(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />
                    <input
                        type="date"
                        placeholder="Data de Nascimento..."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={comeco}
                        onChange={(e) => setComeco(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <input
                        type="text"
                        placeholder="Local..."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={local}
                        onChange={(e) => setLocal(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <select
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Selecione</option>
                        <option value="nacional">Nacional</option>
                        <option value="municipal">Municipal</option>
                        <option value="evento">Evento</option>
                        <option value="ponto-facultativo">Ponto Facultativo</option>
                    </select>
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
                    <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/acesso/administrador" />
                </div>
                <Dialog
                    header="Confirmar informações"
                    visible={dialogVisivel}
                    onHide={() => setDialogVisivel(false)}
                    footer={
                        <div className="flex justify-end gap-2">
                            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={() => setDialogVisivel(false)} />
                            <Button label={salvando ? "Salvando..." : "Confirmar"} icon="pi pi-check" loading={salvando} onClick={salvarEvento} />
                        </div>
                    }
                >
                    <div className="flex flex-col gap-2 text-black">
                        <p><strong>Título:</strong> {titulo}</p>
                        <p><strong>Descrição:</strong> {descricao}</p>
                        <p><strong>Início:</strong> { }</p>
                        {imagemPreview && <img src={imagemPreview} alt="Prévia" className="max-w-[120px] rounded-md" />}
                    </div>
                </Dialog>
            </div>
        </Template>
    )
}
