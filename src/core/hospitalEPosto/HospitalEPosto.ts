import RedesSociais from "../redesSociais/RedesSociais"

export default interface HospitalEPosto{
    texto:string
    imagem: string
    endereco: string
    bairro: string
    telefone: string
    latitude: number
    longitude: number
    icone: string
    redesSociais: RedesSociais[]
}