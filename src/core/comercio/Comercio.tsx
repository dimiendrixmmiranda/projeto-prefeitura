import RedesSociais from "../redesSociais/RedesSociais"

export default interface Comercio {
    id: number,
    latitude: number
    longitude: number,
    texto: string
    icone?: string
    imagem?: string,
    atendimento?: string,
    telefone?: string
    endereco?: string
    tipo?: string
    redesSociais?: RedesSociais[]
}