import { Timestamp } from "firebase/firestore"

export default interface Comentario {
    nome: string
    mensagem: string
    imagem: string,
    data: Timestamp
    likes: string[]
    deslikes: string[]
    respostas?: Comentario[]
}