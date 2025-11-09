/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Comercio from "@/interfaces/Comercio";

interface MapaProps{
    comercios: Comercio[]
}

export default function Mapa({comercios}: MapaProps) {
    const [leafletLoaded, setLeafletLoaded] = useState(false)

    useEffect(() => {
        setLeafletLoaded(true)
    }, []);

    if (!leafletLoaded) return <p>Carregando mapa...</p>

    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet")
    const L = require("leaflet")

    return (
        <div className="flex flex-col gap-4 text-verde-escuro">
            <div className="w-[100%] h-[300px] z-10 mx-auto border-2 border-verde-escuro md:h-[400px] lg:h-[500px]">
                <MapContainer
                    center={[-23.498325661453677, -49.924661542446806]}
                    zoom={15}
                    style={{ height: "100%", width: "100%" }}
                >
                    <TileLayer
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                    />
                    {comercios.map((c) => {
                        const iconePersonalizado = new L.Icon({
                            iconUrl: c.icone,
                            iconSize: [32, 32],
                        });

                        return (
                            <Marker key={c.id} position={[c.endereco.latitude, c.endereco.longitude]} icon={iconePersonalizado}>
                                <Popup>
                                    <div className="text-center flex flex-col gap-2">
                                        <strong className="text-lg leading-5">{c.nome}</strong>
                                        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mx-auto">
                                            <Image alt={c.nome} src={c.imagemBase64} fill className="object-cover" />
                                        </div>
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
}
