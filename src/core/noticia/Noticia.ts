export default interface Noticia {
    titulo: string
    autor: string
    descricao: string
    imagem: string | undefined | null
    materia: string[]
    data: string
    id?: string | null
}