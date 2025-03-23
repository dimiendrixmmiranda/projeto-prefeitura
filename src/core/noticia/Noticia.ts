export default interface Noticia{
    titulo: string
    autor: string
    descricao: string
    imagem: string,
    materia: string []
    data: string
    id?: string | null
}