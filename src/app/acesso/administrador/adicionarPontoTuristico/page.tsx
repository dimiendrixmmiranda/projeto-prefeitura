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
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [historia, setHistoria] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [horarioDeFuncionamento, setHorarioDeFuncionamento] = useState('')
    const [contato, setContato] = useState('')

    const [, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()
    const [dialogVisivel, setDialogVisivel] = useState(false)
    const [salvando, setSalvando] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!nome || !descricao || !imagemBase64) {
            alert("Preencha todos os campos obrigatórios.")
            return
        }
        setDialogVisivel(true)
    }

    const salvarPontoTuristico = async () => {
        setSalvando(true)
        try {
            await addDoc(collection(db, "listaDePontosTuristicos"), {
                nome,
                descricao,
                latitude,
                longitude,
                horarioDeFuncionamento,
                contato,
                imagemBase64,
                dataCriacao: new Date()
            })
            alert("Obra salva com sucesso!")
            setNome('')
            setDescricao('')
            setImagemBase64(null)
            setImagemPreview(null)
            limparVariosInputs([setNome, setDescricao, setHistoria, setLatitude, setLongitude, setHorarioDeFuncionamento, setContato])
        } catch (error) {
            console.error("Erro ao salvar a obra:", error)
            alert("Erro ao salvar a obra. Tente novamente.")
        } finally {
            setSalvando(false)
            setDialogVisivel(false)
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col gap-2 md:min-h-[72vh] 2xl:min-h-[73.5vh]">
                <h2 className="uppercase font-black text-2xl text-center text-verde-escuro">Adicionar Ponto Turístico</h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-[500px] mx-auto w-full">
                    <input
                        type="text"
                        placeholder="Nome do Ponto Turístico..."
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <textarea
                        placeholder="Descrição da Ponto Turístico..."
                        className="p-2 h-[140px] overflow-hidden text-black"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    ></textarea>
                    <textarea
                        placeholder="Historia do Ponto Turístico...."
                        className="p-2 h-[140px] overflow-hidden text-black"
                        value={historia}
                        onChange={(e) => setHistoria(e.target.value)}
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
                        type="text"
                        placeholder="Horario de Funcionamento"
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={horarioDeFuncionamento}
                        onChange={(e) => setHorarioDeFuncionamento(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />
                    <input
                        type="text"
                        placeholder="Contato"
                        className="p-2 h-[35px] overflow-hidden text-black"
                        value={contato}
                        onChange={(e) => setContato(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                    />

                    <fieldset>
                        <label htmlFor="imagens">Foto do Ponto Turístico:</label>
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
                            <Button label={salvando ? "Salvando..." : "Confirmar"} icon="pi pi-check" loading={salvando} onClick={salvarPontoTuristico} />
                        </div>
                    }
                >
                    <div className="flex flex-col gap-2 text-black">
                        <p><strong>Título:</strong> {nome}</p>
                        <p><strong>Descrição:</strong> {descricao}</p>
                        <p><strong>Início:</strong> { }</p>
                        {imagemPreview && <img src={imagemPreview} alt="Prévia" className="max-w-[120px] rounded-md" />}
                    </div>
                </Dialog>
            </div>
        </Template>
    )
}
