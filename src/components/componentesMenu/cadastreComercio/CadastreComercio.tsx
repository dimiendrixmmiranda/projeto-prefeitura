'use client'

import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar"
import { db } from "@/lib/firebase/Firebase"
import handleImagemChange from "@/lib/utils/handleImageChange"
import { limparVariosInputs } from "@/lib/utils/linparInput"
import { addDoc, arrayUnion, collection, doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { FaArrowLeft, FaUser } from "react-icons/fa"
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import useAuth from "@/lib/hooks/useAuth"
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar"
import Horario from "@/interfaces/Horario"
import pegarLocalizacao from "@/lib/utils/pegarLocalizacao"

export default function CadastreComercio() {
    const { usuario } = useAuth()

    const [nome, setNome] = useState('')
    const [tipo, setTipo] = useState('')
    // endereço
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setComplemento] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    // redes
    const [whatsapp, setWhatsapp] = useState('')
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [telefoneFixo, setTelefoneFixo] = useState('')

    const [, setErroImagemTamanho] = useState<string | null>()
    const [imagemBase64, setImagemBase64] = useState<string | null>()
    const [imagemPreview, setImagemPreview] = useState<string | null>()

    const [dialogVisivel, setDialogVisivel] = useState(false)
    const [salvando, setSalvando] = useState(false)

    // horários de funcionamento
    const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

    const [horarios, setHorarios] = useState(
        diasDaSemana.map(dia => ({
            dia,
            aberto: false,
            abertura: '',
            fechamento: ''
        }))
    )

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!nome || !tipo || !imagemBase64) {
            alert("Preencha todos os campos obrigatórios.")
            return
        }
        setDialogVisivel(true)
    }


    const handleHorarioChange = <K extends keyof Horario>(
        index: number,
        campo: K,
        valor: Horario[K]
    ) => {
        const novosHorarios = [...horarios];
        novosHorarios[index] = { ...novosHorarios[index], [campo]: valor };
        setHorarios(novosHorarios);
    };

    const salvarComercio = async () => {
        setSalvando(true)
        let icone = ''
        switch (tipo) {
            case 'hospital': icone = '/icones/icone-hospital.png'; break
            case 'posto-de-saude': icone = '/icones/icone-posto-de-saude.png'; break
            case 'rodoviaria': icone = '/icones/icone-rodoviaria.png'; break
            case 'escola': icone = '/icones/icone-escola.png'; break
            case 'mercado': icone = '/icones/icone-mercado.png'; break
            case 'padaria': icone = '/icones/icone-padaria.png'; break
            case 'restaurante': icone = '/icones/icone-restaurante.png'; break
            default: icone = '/icones/icone-padrao.png'; break
        }

        try {
            // 1️⃣ Cria o comércio na coleção principal
            const docRef = await addDoc(collection(db, "listaDeComercios"), {
                nome,
                tipo,
                icone,
                donoId: usuario && usuario.uid,
                aprovado: false,
                endereco: {
                    rua,
                    numero,
                    complemento,
                    latitude,
                    longitude
                },
                redes: {
                    whatsapp,
                    facebook,
                    instagram,
                    tiktok,
                    telefoneFixo
                },
                imagemBase64,
                horarios
            })

            // 2️⃣ Atualiza o documento do usuário com o ID do comércio recém-criado
            if (usuario?.uid) {
                const userRef = doc(db, "usuarios", usuario.uid)
                await updateDoc(userRef, {
                    comerciosCadastrados: arrayUnion({
                        comercioId: docRef.id,
                        nome,
                        tipo,
                        icone
                    })
                })
            }

            alert("Comércio salvo com sucesso!")
            setImagemBase64(null)
            setImagemPreview(null)
            limparVariosInputs([
                setNome, setTipo, setRua, setNumero, setComplemento,
                setLatitude, setLongitude, setWhatsapp, setInstagram,
                setFacebook, setTiktok, setTelefoneFixo
            ])
        } catch (error) {
            console.error("Erro ao salvar o comércio:", error)
            alert("Erro ao salvar o comércio. Tente novamente.")
        } finally {
            setSalvando(false)
            setDialogVisivel(false)
        }
    }

    async function pegarLocalizacaoAtual() {
        try {
            const [lat, lon] = await pegarLocalizacao();
            setLatitude(lat.toString());
            setLongitude(lon.toString());
            console.log("Localização atual:", lat, lon);
        } catch (error) {
            console.error("Erro ao obter localização:", error);
            alert("Não foi possível obter sua localização. Verifique as permissões do navegador.");
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
        <div className="p-4 max-w-[900px] mx-auto flex flex-col gap-4 lg:p-8 lg:min-h-[70vh] lg:max-w-[1000px] xl:min-h-[75vh]">
            <h2 className="uppercase font-bold text-2xl leading-6 text-center lg:text-3xl xl:text-4xl">
                Cadastre seu comércio ou serviço
            </h2>

            <form className="flex flex-col gap-2 mx-auto w-full lg:grid lg:grid-cols-2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome do comércio..."
                    className="p-2 h-[35px] overflow-hidden text-black lg:col-start-1 lg:col-end-3"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }}
                />

                <select
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 lg:col-start-1 lg:col-end-3"
                >
                    <option value="">Tipo de Comércio</option>
                    <option value="hospital">Hospital</option>
                    <option value="posto-de-saude">Posto de Saúde</option>
                    <option value="rodoviaria">Rodoviária</option>
                    <option value="escola">Escola</option>
                    <option value="mercado">Mercado</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="padaria">Padaria</option>
                </select>

                {/* Endereço */}
                <div className="flex flex-col gap-2">
                    <p>Endereço:</p>
                    <input type="text" placeholder="Nome da rua..." className="p-2 h-[35px] text-black"
                        value={rua} onChange={(e) => setRua(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Número..." className="p-2 h-[35px] text-black"
                        value={numero} onChange={(e) => setNumero(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Complemento..." className="p-2 h-[35px] text-black"
                        value={complemento} onChange={(e) => setComplemento(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <fieldset className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Latitude..." className="p-2 h-[35px] text-black"
                            value={latitude} onChange={(e) => setLatitude(e.target.value)}
                            style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                        <input type="text" placeholder="Longitude..." className="p-2 h-[35px] text-black"
                            value={longitude} onChange={(e) => setLongitude(e.target.value)}
                            style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                        <button type="button" className="col-start-1 col-end-3 bg-verde-escuro py-2 text-white font-bold" onClick={() => pegarLocalizacaoAtual()}>Pegar Localização Atual</button>
                    </fieldset>
                </div>

                {/* Redes sociais */}
                <div className="flex flex-col gap-2">
                    <p>Redes sociais:</p>
                    <input type="text" placeholder="Número do Whatsapp..." className="p-2 h-[35px] text-black"
                        value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Link do Instagram..." className="p-2 h-[35px] text-black"
                        value={instagram} onChange={(e) => setInstagram(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Link do Facebook..." className="p-2 h-[35px] text-black"
                        value={facebook} onChange={(e) => setFacebook(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Link do Tiktok..." className="p-2 h-[35px] text-black"
                        value={tiktok} onChange={(e) => setTiktok(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                    <input type="text" placeholder="Telefone Fixo..." className="p-2 h-[35px] text-black"
                        value={telefoneFixo} onChange={(e) => setTelefoneFixo(e.target.value)}
                        style={{ borderRadius: '12px', boxShadow: '0 0 2px 1px black' }} />
                </div>

                {/* Foto */}
                <fieldset className="lg:col-start-1 lg:col-end-3 border border-gray-300 p-3 rounded-xl">
                    <label htmlFor="imagens">Foto do Comércio:</label>
                    <input
                        className="w-full file:mr-2 file:py-1 file:px-3 file:rounded-lg file:border file:border-gray-400 
                       file:bg-gray-100 file:text-gray-700 file:cursor-pointer 
                       file:hover:bg-gray-200 truncate"
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

                {/* Horário de funcionamento */}
                <fieldset className="lg:col-start-1 lg:col-end-3 border border-gray-300 p-3 rounded-xl">
                    <legend className="font-semibold">Horário de Atendimento</legend>
                    <div className="flex flex-col gap-2">
                        {horarios.map((h, index) => (
                            <div key={index} className="flex items-center justify-between flex-wrap gap-2 border-b pb-1 md:flex-nowrap">
                                <div className="flex items-center w-full gap-2">
                                    <label className="w-[90px] flex-1">{h.dia}</label>
                                    <input
                                        type="checkbox"
                                        checked={h.aberto}
                                        onChange={(e) => handleHorarioChange(index, 'aberto', e.target.checked)}
                                    />
                                </div>
                                <div className="flex items-center w-full gap-2">
                                    <input
                                        type="time"
                                        disabled={!h.aberto}
                                        value={h.abertura}
                                        onChange={(e) => handleHorarioChange(index, 'abertura', e.target.value)}
                                        className="border rounded p-1 flex-1"
                                    />
                                    <span>até</span>
                                    <input
                                        type="time"
                                        disabled={!h.aberto}
                                        value={h.fechamento}
                                        onChange={(e) => handleHorarioChange(index, 'fechamento', e.target.value)}
                                        className="border rounded p-1 flex-1"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </fieldset>

                <button
                    className="px-8 py-2 rounded-md bg-zinc-900 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-zinc-900 lg:col-start-1 lg:col-end-3 mt-4"
                    type="submit"
                >
                    Salvar
                </button>
            </form>

            <Dialog
                header="Confirmar informações"
                visible={dialogVisivel}
                onHide={() => setDialogVisivel(false)}
                footer={
                    <div className="flex justify-end gap-2">
                        <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={() => setDialogVisivel(false)} />
                        <Button label={salvando ? "Salvando..." : "Confirmar"} icon="pi pi-check" loading={salvando} onClick={salvarComercio} />
                    </div>
                }
                className="max-w-[800px] w-full"
            >
                <div className="flex flex-col gap-2 text-black">
                    <p><strong>Início:</strong> { }</p>
                    {imagemPreview && <img src={imagemPreview} alt="Prévia" className="max-w-[120px] rounded-md" />}
                </div>
            </Dialog>

            <div className="self-center w-full flex justify-end">
                <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
            </div>
        </div>
    )
}
