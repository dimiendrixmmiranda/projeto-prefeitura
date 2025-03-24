export default interface PontoTuristico {
    id: string | null,
    titulo: string,
    imagem: string,
    descricao: string
    arrayDeImagens?: string[]
    governo?: string,
    data?: string
}