export default interface Secretaria {
    id: string
    nome: string,
    responsavel: string,
    atendimento: {
        manha: string,
        tarde: string
    },
    telefone: string,
    email: string,
    endereco: string
}