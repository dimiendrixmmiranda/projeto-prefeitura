interface Subtitulo {
    texto: string
    link: string
}

export interface Menu {
    texto: string
    subtitulo: Subtitulo[]
}