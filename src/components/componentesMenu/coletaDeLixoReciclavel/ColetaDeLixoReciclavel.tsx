"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import BotaoNavegar from "../../base/botaoNavegar/BotaoNavegar";
import { FaArrowLeft } from "react-icons/fa";
type DiaColeta = "segunda" | "terca" | "quarta" | "quinta" | "sexta" | "sabado";

export default function MapaColetaReciclavel() {
    const [rota, setRota] = useState([]);
    const [dia, setDia] = useState<DiaColeta>("segunda");
    console.log(dia)
    const pontos: Record<DiaColeta, number[][]> = {
        segunda: [
            [-23.4996, -49.9287],
            [-23.5001, -49.9264],
            [-23.4983, -49.9246],
        ],
        terca: [
            [-23.4980, -49.9270],
            [-23.4990, -49.9250],
            [-23.5010, -49.9230],
        ],
        quarta: [
            [-23.4980, -49.9270],
            [-23.4990, -49.9250],
            [-23.5010, -49.9230],
        ],
        quinta: [
            [-23.4980, -49.9270],
            [-23.4990, -49.9250],
            [-23.5010, -49.9230],
        ],
        sexta: [
            [-23.4980, -49.9270],
            [-23.4990, -49.9250],
            [-23.5010, -49.9230],
        ],
        sabado: [
            [-23.4980, -49.9270],
            [-23.4990, -49.9250],
            [-23.5010, -49.9230],
        ],
    };


   useEffect(() => {
        async function gerarRota() {
            const coords = pontos[dia].map((p) => [...p].reverse()).join(";");
            const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`);
            const data = await res.json();
            setRota(data.routes[0].geometry.coordinates.map((c: number[]) => [c[1], c[0]]));
        }
        gerarRota();
    }, [dia])

    return (
        <div className="p-4">
            <div className="flex flex-col gap-4 max-w-[1000px] w-full mx-auto">
                <h2 className="uppercase font-bold text-2xl leading-6 text-center text-verde-escuro lg:text-3xl xl:text-4xl">Rota de Coleta de Lixo Reciclável</h2>
                <div className="w-full">
                    <ul className="grid grid-cols-3 gap-2 md:grid-cols-6">
                        <li
                            onClick={() => setDia("segunda")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "segunda"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Segunda
                            </button>
                        </li>
                        <li
                            onClick={() => setDia("terca")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "terca"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Terça
                            </button>
                        </li>
                        <li
                            onClick={() => setDia("quarta")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "quarta"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Quarta
                            </button>
                        </li>
                        <li
                            onClick={() => setDia("quinta")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "quinta"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Quinta
                            </button>
                        </li>
                        <li
                            onClick={() => setDia("sexta")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "sexta"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Sexta
                            </button>
                        </li>
                        <li
                            onClick={() => setDia("sabado")}
                            className={`p-2 flex justify-center items-center font-bold cursor-pointer transition-all duration-200 ${dia === "sabado"
                                ? "bg-white text-verde-escuro border-2 border-verde-escuro"
                                : "bg-verde-escuro text-white border-2 border-white"
                                }`}
                            style={{ borderRadius: "8px", textShadow: "1px 1px 2px black" }}
                        >
                            <button>
                                Sábado
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="w-[100%] h-[300px] z-10 mx-auto border-2 border-verde-escuro md:max-w-[800px] md:h-[400px] lg:h-[500px] xl:max-w-[1000px]">
                    <MapContainer center={[-23.498325661453677, -49.924661542446806]} zoom={15} style={{ height: "100%", width: "100%" }}>
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                        {rota.length > 0 && <Polyline positions={rota} color="red" />}
                    </MapContainer>
                </div>
                <div className="self-center w-full flex justify-end">
                    <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
                </div>
            </div>
        </div>
    );
}
