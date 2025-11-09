import Horario from "./Horario"

export default interface Comercio{
    id: string
    nome: string
    tipo: string,
    icone: string,
    aprovado: boolean
    data: string
    endereco:{
        rua: string,
        numero: string
        complemento: string
        latitude: string
        longitude: string
    },
    redes: {
        instagram: string
        facebook: string,
        tiktok: string
        whatsapp: string,
        telefoneFixo: string,
    },
    imagemBase64: string,
    horarios: Horario[]
}