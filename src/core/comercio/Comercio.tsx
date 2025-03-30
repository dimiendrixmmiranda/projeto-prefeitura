import RedesSociais from "../redesSociais/RedesSociais"

export default interface Comercio {
    id: string,
    localizacao: string[],
    nome: string
    imagem: string,
    horarioDeAtendimento: string,
    telefone: string
    endereco: string
    categoriaComercio: string
    redesSociais?: RedesSociais[]
    data: Date,
    situacao: boolean
}