import RedesSociais from "../redesSociais/RedesSociais"

export default interface Item {
    latitude: number
    longitude: number
    icone: string
    nome?: string
    id?: string
    servicoSolicitado?: string
    condicaoAtual?: string
    telefone?: string
    tipoDeEntulho?: string
    motivoDaSolicitacao?: string
    tipoDeServico?: string
    imagem?: string
    horarioDeAtendimento?: string
    endereco?: string
    redesSociais?: RedesSociais[]
}