export default function formatarData(data: string) {
    const dt = new Date(data);
    const dataFormatada = dt.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
    return dataFormatada
}