"use client";

import { useEffect, useState } from "react";

type WeatherData = {
    daily: {
        time: string[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        precipitation_sum: number[]
        precipitation_probability_mean: number[]
    };
};

export default function Weather() {
    const [weather, setWeather] = useState<WeatherData | null>(null);

    function formatarData(d: string) {
        const data = d.split('-')
        return `${data[2]}/${data[1]}`
    }

    function mediaTempo(max: number, min: number) {
        return ((max + min) / 2).toFixed(1)
    }

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch("/api/weather?lat=-23.4983&lon=-49.9092");
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Erro ao obter clima", error);
            }
        }
        fetchWeather();
    }, []);

    if (!weather) return <p>Carregando previsão...</p>;

    console.log(weather)

    return (
        <div className="p-4 bg-blue-100 rounded-lg shadow-md text-black">
            <h2 className="text-xl font-bold">Previsão para os próximos 7 dias</h2>
            <ul>
                {weather.daily.time.map((date, index) => (
                    <li key={date} className="mt-2">
                        📅 {formatarData(date)} → 🌡️ Máx: {weather.daily.temperature_2m_max[index]}°C | ❄️ Mín: {weather.daily.temperature_2m_min[index]}°C
                    </li>
                ))}
            </ul>

            <ul className="overflow-auto whitespace-nowrap">
                {weather.daily.time.map((date, index) => (
                    <li key={date} className="w-24 h-24 bg-red-500 inline-block mx-2">
                        <div>
                            <p>{mediaTempo(weather.daily.temperature_2m_max[index], weather.daily.temperature_2m_min[index])}ºC</p>
                            <p>Max:{weather.daily.temperature_2m_max[index]}ºC</p>
                            <p>Min:{weather.daily.temperature_2m_min[index]}ºC</p>
                            <p>{weather.daily.precipitation_sum[index]}mm</p>
                            <p>{weather.daily.precipitation_probability_mean[index]}%</p>
                            <p>{formatarData(date)}</p>
                            {/* 📅 {date} → 🌡️ Máx: {weather.daily.temperature_2m_max[index]}°C | ❄️ Mín: {weather.daily.temperature_2m_min[index]}°C */}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}
