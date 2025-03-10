import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const latitude = searchParams.get("lat") || "-23.4983"; // Latitude de Joaquim Távora
        const longitude = searchParams.get("lon") || "-49.9092"; // Longitude de Joaquim Távora

        // Fazendo a requisição para obter clima atual e previsão para os próximos 7 dias
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_mean,precipitation_sum&hourly=temperature_2m,wind_speed_10m&timezone=America/Sao_Paulo`
        );
        

        if (!response.ok) throw new Error("Erro ao buscar previsão do tempo");

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: `Erro ao buscar dados ${error}` }, { status: 500 });
    }
}
