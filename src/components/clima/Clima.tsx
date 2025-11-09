// AJUSTAR O COMPONENTE CLIMA

"use client";

import Tempo from "@/interfaces/Tempo";
import formatarDataClima from "@/lib/utils/formatarDataEClima";
import getDescricaoClima from "@/lib/utils/getDescricaoClima";
import { useEffect, useState } from "react";
import { FaCloudRain, FaCloudSun, FaCompass } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { WiRaindrops } from "react-icons/wi";
import TituloSecao from "../base/tituloSecao/TituloSecao";


export default function Clima() {
    const [clima, setClima] = useState<Tempo | null>(null);

    function mediaTempo(max: number, min: number) {
        return ((max + min) / 2).toFixed(1)
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
        <div className="p-4 flex flex-col gap-4 clima xl:p-0">
            <TituloSecao icone={<FaCloudSun />} texto="Clima" />
            <div className="bg-cover bg-center p-2 flex flex-col gap-4 text-white xl:gap-7 xl:px-10 xl:py-6"
                style={{ backgroundImage: `url(${getDescricaoClima(clima.current_weather.weathercode).imagem})`, boxShadow: '0 0 2px 1px black' }}>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
                    <div className="text-white xl:col-start-1 xl:col-end-3 xl:row-start-1 xl:row-end-2" style={{ textShadow: '2px 2px 2px black' }}>
                        <h2 className="font-black text-6xl text-center">{clima.current_weather.temperature}ºC</h2>
                        <h3 className="text-center text-xl font-bold">{getDescricaoClima(clima.current_weather.weathercode).texto}</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-2 md:col-start-1 md:col-end-2 lg:col-start-2 lg:col-end-3 xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:row-end-3" style={{ textShadow: '2px 2px 2px black' }}>
                        <div className="self-center justify-self-center leading-6 font-bold flex justify-center items-center flex-col">
                            <p>Máxima:</p>
                            <p className="font-black text-center text-3xl">{clima.daily.temperature_2m_max[0]}ºC</p>
                        </div>
                        <div className="self-center justify-self-center leading-6 font-bold flex justify-center items-center flex-col">
                            <p>Mínima:</p>
                            <p className="font-black text-center text-3xl">{clima.daily.temperature_2m_min[0]}ºC</p>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-4 gap-1 items-center justify-center md:row-start-1 md:row-end-3 md:col-start-2 md:h-fit md:my-auto lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4 xl:grid-cols-2 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-3">
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
                    <h2 className="text-2xl self-center font-bold text-center leading-6 sm:text-start md:text-3xl" style={{ textShadow: '1px 1px 2px black' }}>Previsão para os próximos 7 dias:</h2>
                    <ul className="overflow-auto whitespace-nowrap">
                        {clima.daily.time.map((date, index) => (
                            <li key={date} className="w-28 h-32 bg-blue-950 inline-block mx-2 rounded-[8px] p-2 overflow-hidden lg:w-32 lg:h-36">
                                <div className="flex flex-col relative">
                                    <p className="text-center text-xl font-black leading-6" >{mediaTempo(clima.daily.temperature_2m_max[index], clima.daily.temperature_2m_min[index])}ºC</p>

                                    <div className="flex justify-between lg:mt-1">
                                        <div className="overflow-hidden text-sm gap-1 flex flex-col justify-center items-center">
                                            <p className="leading-5 uppercase font-bold">Max:</p>
                                            <p className="-mt-2">{clima.daily.temperature_2m_max[index]}ºC</p>
                                        </div>
                                        <div className="overflow-hidden text-sm gap-1 flex flex-col justify-center items-center" >
                                            <p className="leading-5 uppercase font-bold">Min:</p>
                                            <p className="-mt-2">{clima.daily.temperature_2m_min[index]}ºC</p>
                                        </div>
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
                                    <p className="text-center font-bold text-sm lg:text-[1em] lg:mt-2">{formatarDataClima(date)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}