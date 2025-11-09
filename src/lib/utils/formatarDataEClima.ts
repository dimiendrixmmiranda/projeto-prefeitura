export default function formatarDataClima(dataString: string): string | null {
    try {
        const data = new Date(dataString);
        const diasSemana = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sábado",
        ];
        const diaSemana = diasSemana[data.getDay()];
        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0"); // getMonth() retorna de 0 a 11

        return `${diaSemana}, ${dia}/${mes}`;
    } catch (error) {
        alert(error)
        return null;
    }
}