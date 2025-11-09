import Comentario from "./Comentario"

export default interface Noticia {
    id: string
    titulo: string
    subtitulo: string
    data: string
    conteudo: string[]
    imagemBase64: string
    autor: string
    comentarios: Comentario[]
}