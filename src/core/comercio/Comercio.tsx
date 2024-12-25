import RedesSociais from "../redesSociais/RedesSociais"

export default interface Comercio {
    imagem: string,
    nome: string,
    atendimento: string,
    telefone: string
    endereco: string
    tipo: string
    redesSociais: RedesSociais[]
}