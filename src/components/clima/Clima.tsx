// AJUSTAR O COMPONENTE CLIMA

"use client";

import { useEffect, useState } from "react";
import { FaCloudRain, FaCompass } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiRaindrops } from "react-icons/wi";

interface Tempo {
    current_weather: {
        time: string
        temperature: string
        weathercode: number
        winddirection: number
        windspeed: number
    },
    daily: {
        precipitation_probability_mean: number[]
        precipitation_sum: number[]
        temperature_2m_max: number[]
        temperature_2m_min: number[]
        time: string[]
        sunrise: string[]
        sunset: string[]
    },
    hourly: {
        temperature_2m: number[]
        time: number[]
    }
}

export default function Clima() {
    const [clima, setClima] = useState<Tempo | null>(null);

    function formatarData(d: string) {
        const data = d.split('-')
        return `${data[2]}/${data[1]}`
    }

    function mediaTempo(max: number, min: number) {
        return ((max + min) / 2).toFixed(1)
    }

    function getWeatherDescription(code: number): { texto: string, imagem: string } {
        const descriptions: { [key: number]: { texto: string, imagem: string } } = {
            0: {
                texto: "Céu limpo",
                imagem: '/clima/ceu-limpo.png'
            },
            1: {
                texto: "Predomínio de sol",
                imagem: '/clima/predominante-sol.png'
            },
            2: {
                texto: "Parcialmente nublado",
                imagem: '/clima/parcialmente-nublado.png'
            },
            3: {
                texto: "Nublado",
                imagem: '/clima/nublado.png'
            },
            45: {
                texto: "Névoa",
                imagem: '/clima/nevoa.png'
            },
            48: {
                texto: "Névoa com geada",
                imagem: '/clima/nevoa-com-geada.png'
            },
            51: {
                texto: "Chuvisco fraco",
                imagem: '/clima/chuvisco-fraco.png'
            },
            53: {
                texto: "Chuvisco moderado",
                imagem: '/clima/chuvisco-moderado.png'
            },
            55: {
                texto: "Chuvisco intenso",
                imagem: '/clima/chuvisco-intenso.png'
            },
            61: {
                texto: "Chuva fraca",
                imagem: '/clima/chuvisco-fraco.png'
            },
            63: {
                texto: "Chuva moderada",
                imagem: '/clima/chuvisco-moderado.png'
            },
            65: {
                texto: "Chuva forte",
                imagem: '/clima/chuvisco-forte.png'
            },
            80: {
                texto: "Pancadas de chuva fraca",
                imagem: '/clima/chuvisco-fraco.png'
            },
            81: {
                texto: "Pancadas de chuva moderada",
                imagem: '/clima/chuvisco-moderado.png'
            },
            82: {
                texto: "Pancadas de chuva forte",
                imagem: '/clima/chuvisco-forte.png'
            },
            95: {
                texto: "Tempestade",
                imagem: '/clima/tempestade.png'
            },
            96: {
                texto: "Tempestade com granizo fraco",
                imagem: '/clima/tempestade-com-granizo.png'
            },
            99: {
                texto: "Tempestade com granizo forte",
                imagem: '/clima/tempestade-com-granizo.png'
            },
        };
        return descriptions[code] || "Desconhecido";
    }

    function getWindDirection(degrees: number): string {
        if (degrees >= 337.5 || degrees < 22.5) return "Norte (N)";
        if (degrees >= 22.5 && degrees < 67.5) return "Nordeste (NE)";
        if (degrees >= 67.5 && degrees < 112.5) return "Leste (L)";
        if (degrees >= 112.5 && degrees < 157.5) return "Sudeste (SE)";
        if (degrees >= 157.5 && degrees < 202.5) return "Sul (S)";
        if (degrees >= 202.5 && degrees < 247.5) return "Sudoeste (SO)";
        if (degrees >= 247.5 && degrees < 292.5) return "Oeste (O)";
        if (degrees >= 292.5 && degrees < 337.5) return "Noroeste (NO)";
        return "Desconhecido";
    }

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await fetch("/api/weather?lat=-23.4983&lon=-49.9092");
                const data = await response.json();
                setClima(data);
            } catch (error) {
                console.error("Erro ao obter clima", error);
            }
        }
        fetchWeather();
    }, []);

    if (!clima || !clima.current_weather || !clima.daily) return <p>Carregando previsão...</p>;

    return (
        <div className="p-2">
            <div className="bg-cover bg-center p-2 flex flex-col gap-4 xl:gap-7 xl:px-10 xl:py-6"
                style={{ backgroundImage: `url(${getWeatherDescription(clima.current_weather.weathercode).imagem})`, boxShadow: '2px 2px 3px black' }}>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-blue-950" style={{ textShadow: '1px 1px 2px white' }}>
                        <h2 className="font-black text-6xl text-center">{clima.current_weather.temperature}ºC</h2>
                        <h3 className="text-center text-xl font-bold">{getWeatherDescription(clima.current_weather.weathercode).texto}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3" style={{ textShadow: '1px 1px 2px black' }}>
                        <div className="text-xl self-center justify-self-center leading-6 font-bold">
                            <p>Máxima:</p>
                            <p className="font-medium text-center">{clima.daily.temperature_2m_max[0]}ºC</p>
                        </div>
                        <div className="text-xl self-center justify-self-center leading-6 font-bold">
                            <p>Mínima:</p>
                            <p className="font-medium text-center">{clima.daily.temperature_2m_min[0]}ºC</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-1 items-center justify-center md:row-start-1 md:row-end-3 md:col-start-2 md:h-fit md:my-auto lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4">
                        <div className="w-full h-full flex flex-col justify-center items-center self-center justify-self-center py-2 gap-1 bg-blue-950">
                            <FiWind className="text-3xl" />
                            <h2 className="text-sm">{clima.current_weather.windspeed}km/h</h2>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center self-center justify-self-center py-2 gap-1 bg-blue-950">
                            <FaCompass className="text-3xl" />
                            <h2 className="text-sm text-center">{getWindDirection(clima.current_weather.winddirection)}</h2>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center self-center justify-self-center py-2 gap-1 bg-blue-950">
                            <WiRaindrops className="text-3xl" />
                            <p className="text-sm">{clima.daily.precipitation_sum[0]}mm</p>
                        </div>
                        <div className="w-full h-full flex flex-col justify-center items-center self-center justify-self-center py-2 gap-1 bg-blue-950">
                            <FaCloudRain className="text-3xl" />
                            <p className="text-sm">{clima.daily.precipitation_probability_mean[0]}%</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 xl:gap-5">
                    <h2 className="text-2xl self-center font-bold text-center leading-6 sm:text-start md:text-4xl" style={{ textShadow: '1px 1px 2px black' }}>Previsão para os próximos 7 dias:</h2>
                    <ul className="overflow-auto whitespace-nowrap lg:flex lg:justify-center">
                        {clima.daily.time.map((date, index) => (
                            <li key={date} className="w-24 h-32 bg-blue-950 inline-block mx-2 rounded-lg p-2 overflow-hidden lg:w-32 lg:h-36">
                                <div className="flex flex-col relative">
                                    <p className="text-center text-xl font-black leading-6" >{mediaTempo(clima.daily.temperature_2m_max[index], clima.daily.temperature_2m_min[index])}ºC</p>
                                    <div className="items-center overflow-hidden text-sm gap-1" style={{ display: 'grid', gridTemplateColumns: '35px 1fr' }}>
                                        <p className="leading-5 uppercase font-bold">Max:</p>
                                        <p>{clima.daily.temperature_2m_max[index]}ºC</p>
                                    </div>
                                    <div className="items-center overflow-hidden text-sm gap-1" style={{ display: 'grid', gridTemplateColumns: '35px 1fr' }}>
                                        <p className="leading-5 uppercase font-bold">Min:</p>
                                        <p>{clima.daily.temperature_2m_min[index]}ºC</p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex flex-col justify-center items-center">
                                            <WiRaindrops className="text-2xl -mt-1 -mb-2" />
                                            <p className="text-sm">{clima.daily.precipitation_sum[index]}mm</p>
                                        </div>
                                        <div className="flex flex-col justify-center items-center">
                                            <FaCloudRain className="text-sm" />
                                            <p className="text-sm">{clima.daily.precipitation_probability_mean[index]}%</p>
                                        </div>
                                    </div>
                                    <p className="text-center font-bold text-lg -mt-1">{formatarData(date)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
