export default function formatarDataComDia(dataString: string): string {
    const data = new Date(dataString)

    const opcoes: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }

    const dataFormatada = new Intl.DateTimeFormat('pt-BR', opcoes).format(data)
    return dataFormatada.charAt(0).toUpperCase() + dataFormatada.slice(1)
}