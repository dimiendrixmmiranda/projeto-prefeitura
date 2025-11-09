export interface SolicitacaoColetaDeEntulho {
    id:string
    bairro: string
    telefone: string
    cpf:string
    data: string
    endereco: string
    imagem:string
    localizacao: number[]
    nome: string
    tipoDeEntulho: string
    informacaoAdicional: string
    situacao: boolean
}