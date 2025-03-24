export default interface Evento{
    titulo: string
    descricao: string,
    local: string
    localizao: [string, string]
    imagem?: string,
    data?: string,
    hora?: string
    id?: string | null
}