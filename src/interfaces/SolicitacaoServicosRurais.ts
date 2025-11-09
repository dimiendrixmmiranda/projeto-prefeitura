export interface SolicitacaoServicosRurais {
    id: string
    nome: string
    cpf: string
    telefone: string
    endereco: string
    bairro: string
    localizacao: number[]
    servicoSolicitado: string
    condicaoAtual: string
    descricao: string
    situacao: string
    data: string
    imagem: string
}