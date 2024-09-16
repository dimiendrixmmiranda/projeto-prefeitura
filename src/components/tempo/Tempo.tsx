'use client'
import { stringDataHora } from "@/utils/dataHora";
import { requisicaoTempo } from "@/utils/requisicaoTempo";
import { useEffect, useState } from "react";
import { FaCloudRain } from "react-icons/fa6";
import { WiStrongWind } from "react-icons/wi";

interface WeatherData {
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    forecast: {
        forecastday: Array<{
            day: {
                maxtemp_c: number;
                mintemp_c: number;
            };
            hour: Array<{
                time: string;
                temp_c: number;
                chance_of_rain: string;
                wind_kph: string;
                condition: {
                    text: string;
                    icon: string;
                };
            }>;
        }>;
    };
}

export default function Weather() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [containerTempoHora, setContainerTempoHora] = useState(4)

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await requisicaoTempo();
                setWeatherData(data);
            } catch (error) {
                setError("Erro ao buscar dados de clima.");
            }
        };

        fetchWeather();
    }, []);

    useEffect(() => {
        function renderQuantidadeTempoHora() {
            if (window.innerWidth < 425) {
                setContainerTempoHora(4);
            } else if (window.innerWidth < 768) {
                setContainerTempoHora(5);
            } else if (window.innerWidth < 1024) {
                setContainerTempoHora(8);
            } else {
                setContainerTempoHora(6);
            }
        }

        renderQuantidadeTempoHora();

        window.addEventListener('resize', renderQuantidadeTempoHora);

        return () => {
            window.removeEventListener('resize', renderQuantidadeTempoHora);
        };
    }, []);

    function converterHora(texto: string) {
        return texto.match(/(\d\d):(\d\d)/gi)
    }

    if (error) {
        return <p>{error}</p>;
    }
    const arrayTempoHoraHora = weatherData != null ? weatherData.forecast.forecastday[0].hour.slice(0, containerTempoHora) : null

    const maxTemp = weatherData?.forecast.forecastday[0].day.maxtemp_c
    const minTemp = weatherData?.forecast.forecastday[0].day.mintemp_c

    return (
        <div className='w-full bg-blue-500 h-40 relative md:h-44 xl:h-48'>
            {weatherData ? (
                <div>
                    <h2 className="font-black text-xl ml-2 mt-1 md:ml-5 md:mt-2 xl:text-3xl xl:ml-6">Joaquim Távora - PR</h2>
                    <span className=" ml-2 md:ml-5 xl:text-lg xl:ml-6">{stringDataHora()}</span>
                    <div className=" mt-1 ml-2 md:ml-5 xl:ml-6">
                        <p className="leading-4 uppercase font-bold xl:leading-5 xl:text-md">Máx: {maxTemp != undefined ? maxTemp.toFixed(0) : 'null'}ºC</p>
                        <p className="leading-4 uppercase font-bold xl:leading-5 xl:text-md">Min: {minTemp != undefined ? minTemp.toFixed(0) : 'null'}ºC</p>

                    </div>
                    <div className="absolute top-[-8px] right-6 flex flex-col justify-center items-center">
                        <img src={weatherData.current.condition.icon} alt="" />
                        <p className="-mt-4 text-center font-bold">Nublado</p>
                    </div>
                    <ul className="absolute bottom-2 left-[50%] w-[95%] h-14 flex justify-around gap-1 overflow-hidden" style={{ transform: 'translate(-50%)' }}>
                        {
                            arrayTempoHoraHora?.map((objeto, i) => {
                                return (
                                    <li key={i} className="flex-1 max-w-[85px] flex rounded-md bg-blue-900 relative overflow-hidden">
                                        <p className="font-black text-lg absolute top-[50%] left-[50%]" style={{ transform: 'translate(-50%, -85%)' }}>{objeto.temp_c.toFixed(0)}ºC</p>
                                        <div className="flex absolute left-[50%] top-[49%] gap-[2px]" style={{ transform: 'translate(-50%)' }}>
                                            <p className="flex justify-center items-center text-[.5em] gap-[2px]"><FaCloudRain />{objeto.chance_of_rain}%</p>
                                            <p className="flex justify-center items-center text-[.5em] gap-[2px]"><WiStrongWind />{objeto.wind_kph}km/h</p>
                                        </div>
                                        <p className="absolute left-[50%] bottom-0 text-[12px] font-bold" style={{ transform: 'translate(-50%)' }}>{converterHora(objeto.time)}h</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}
