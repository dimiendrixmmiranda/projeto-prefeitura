export default interface PontoTuristico {
    id: string
    nome: string
    descricao: string
    historia: string
    latitude: number
    longitude: number
    imagemBase64?: string
    horarioFuncionamento: string
    contato: string
}