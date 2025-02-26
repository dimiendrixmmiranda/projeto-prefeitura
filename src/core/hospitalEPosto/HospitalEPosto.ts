import RedesSociais from "../redesSociais/RedesSociais"

export default interface HospitalEPosto{
    nome:string
    imagem: string
    endereco: string
    bairro: string
    telefone: string
    latitude: number
    longitude: number
    icone: string
    redesSociais: RedesSociais[]
}