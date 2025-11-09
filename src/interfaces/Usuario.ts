import { Timestamp } from "firebase/firestore"

export type Usuario = {
    uid: string
    email: string
    nome: string
    token: string
    provedor: string
    imagemURL: string
    telefone: string
    dataNascimento?: string | Timestamp
    tipo: string
}