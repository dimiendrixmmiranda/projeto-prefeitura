export default interface Evento {
    id: string,
    titulo: string,
    descricao: string,
    comeco: string,
    local: string
    latitude: string,
    longitude: string,
    tipo: "nacional" | "municipal" | "evento",
}