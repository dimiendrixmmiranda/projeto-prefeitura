import RedesSociais from "../redesSociais/RedesSociais"

export interface Escola{
    nome: string
    tipo: string
    diretora: string
    ensino: string[]
    endereco: string
    bairro: string
    telefone: string
    imagem: string
    redesSociais: RedesSociais[]
    descricaoEscola: string[]
}