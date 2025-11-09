/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import BotaoNavegar from "../base/botaoNavegar/BotaoNavegar";
import { FaArrowLeft } from "react-icons/fa";

export default function PontosCircular() {
    const [leafletLoaded, setLeafletLoaded] = useState(false);

    useEffect(() => {
        setLeafletLoaded(true);
    }, []);

    if (!leafletLoaded) return <p>Carregando mapa...</p>;

    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
    const L = require("leaflet");

    const pontosDaCircular = [
        { id: 1, nome: "Ponto da Garagem", latitude: -23.503770718911724, longitude: -49.92289866035015, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 2, nome: "Ponto da Atrás do Miguel Dias", latitude: -23.50321990973727, longitude: -49.92427372168755, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 3, nome: "Ponto da Antiga Camara", latitude: -23.50096012160176, longitude: -49.92506455243849, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 4, nome: "Ponto da Rodoviaria", latitude: -23.497863784404412, longitude: -49.922803840314636, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 5, nome: "Ponto Próximo ao Mercado", latitude: -23.497077948807956, longitude: -49.92004542573386, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 5, nome: "Ponto Próximo ao Colégio São Sebastião", latitude: -23.497919198191713, longitude: -49.917545606957916, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
        { id: 6, nome: "Ponto Próximo a Praça", latitude: -23.50588090750647, longitude: -49.91502365085315, icone: '/icones/icone-ponto-de-onibus.png', imagem: '/icones/icone-ponto-de-onibus.png' },
    ];

    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro mx-auto max-w-[1000px] lg:p-8 pontosCircular">
            <div className="flex flex-col gap-2 mx-auto">
                <h2 className="uppercase font-bold text-2xl leading-6 text-center lg:text-3xl xl:text-4xl">Lista de Pontos da Circular</h2>
            </div>
            <div className="w-[100%] h-[300px] z-10 mx-auto border-2 border-verde-escuro md:max-w-[800px] md:h-[400px] lg:h-[500px] lg:max-w-[1000px]">
                <MapContainer
                    center={[-23.498325661453677, -49.924661542446806]}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                    />
                    {pontosDaCircular.map((c) => {
                        const iconePersonalizado = new L.Icon({
                            iconUrl: c.icone, // usa o ícone do próprio comércio
                            iconSize: [32, 32],
                        });

                        return (
                            <Marker key={c.id} position={[c.latitude, c.longitude]} icon={iconePersonalizado}>
                                <Popup>
                                    <div className="text-center flex flex-col items-center w-full h-full">
                                        <strong>{c.nome}</strong> <br />
                                        <div className="w-[80px] h-[80px] rounded-full bg-zinc-600"></div>
                                        <div className="grid grid-cols-3 text-xs lg:text-base">
                                            <p className="" style={{ margin: '0!important' }}>Horario:</p>
                                            <div className="col-start-2 col-end-4 flex flex-col">
                                                <span>6h:35m/6h:45m</span>
                                                <span>6h:35m/6h:45m</span>
                                                <span>6h:35m/6h:45m</span>
                                            </div>
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
            <div className="self-center w-full flex justify-end">
                <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
            </div>
        </div>
    );
}
