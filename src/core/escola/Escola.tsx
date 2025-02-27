import RedesSociais from "../redesSociais/RedesSociais"

export interface Escola{
    texto: string
    tipo: string
    diretora: string
    ensino: string[]
    endereco: string
    bairro: string
    telefone: string
    imagem: string
    latitude: number
    longitude: number
    redesSociais: RedesSociais[]
    descricaoEscola: string[]
    icone?: string
}