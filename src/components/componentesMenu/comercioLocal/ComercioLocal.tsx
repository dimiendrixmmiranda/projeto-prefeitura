/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { FaArrowLeft } from "react-icons/fa";
import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar";
import { useListaDeComercios } from "@/lib/hooks/useListaDeComercios";
import Image from "next/image";
import CardComercio from "@/components/base/cardComercio/CardComercio";

export default function MapaComercioLocal() {
    const [leafletLoaded, setLeafletLoaded] = useState(false);
    const [buscaNome, setBuscaNome] = useState("");
    const [buscaCategoria, setBuscaCategoria] = useState("");

    const { comercios } = useListaDeComercios()

    useEffect(() => {
        setLeafletLoaded(true);
    }, []);

    if (!leafletLoaded) return <p>Carregando mapa...</p>;

    const { MapContainer, TileLayer, Marker, Popup } = require("react-leaflet");
    const L = require("leaflet");

    const comerciosFiltrados = comercios.filter((c) => {
        const nomeMatch = c.nome.toLowerCase().includes(buscaNome.toLowerCase());
        const categoriaMatch = buscaCategoria ? c.tipo === buscaCategoria : true;
        return nomeMatch && categoriaMatch;
    })

    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro lg:p-8">
            <div className="flex flex-col gap-2 max-w-[1000px] mx-auto">
                <h2 className="uppercase font-bold text-2xl leading-6 text-center lg:text-3xl xl:text-4xl">Lista de Comércios e Serviços Locais</h2>
                <p className="text-lg text-center leading-6">
                    Apoie o comércio local e fortaleça nossa comunidade! Encontre os melhores estabelecimentos e serviços próximos a você, como supermercados, padarias, farmácias e muito mais. Filtre por tipo e realize suas compras e serviços de forma rápida e conveniente.
                </p>
            </div>
            <div className="w-[100%] h-[300px] z-10 mx-auto border-2 border-verde-escuro md:max-w-[800px] md:h-[400px] lg:h-[500px]">
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
                            iconUrl: c.icone, // usa o ícone do próprio comércio
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
            <div className="flex flex-col gap-4">
                <h3 className="uppercase font-bold text-xl leading-6 lg:text-2xl xl:text-3xl">Encontre o Comércio ou Serviço Desejado:</h3>
                <div className="flex flex-col gap-2 md:grid md:grid-cols-2">
                    <input
                        type="text"
                        name="buscarPorNome"
                        id="buscarPorNome"
                        placeholder="Buscar por nome..."
                        value={buscaNome}
                        onChange={(e) => setBuscaNome(e.target.value)}
                        className="border border-verde-escuro p-2 rounded-[12px]"
                    />
                    <select
                        name="buscarPorCategoria"
                        id="buscarPorCategoria"
                        value={buscaCategoria}
                        onChange={(e) => setBuscaCategoria(e.target.value)}
                        className="border border-verde-escuro p-2 rounded-[12px]"
                    >
                        <option value="">Todas as categorias</option>
                        <option value="mercado">Mercado</option>
                        <option value="hospital">Hospital</option>
                        <option value="posto-de-saude">Posto de Saúde</option>
                        <option value="escola">Escola</option>
                        <option value="rodoviaria">Rodoviária</option>
                        <option value="padaria">Padaria</option>
                        <option value="farmacia">Farmácia</option>
                        <option value="restaurante">Restaurante</option>
                        <option value="outros">Outros</option>
                    </select>
                </div>
            </div>
            <div>
                <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                    {
                        comerciosFiltrados.length <= 0 ? (
                            <div>
                                <h2 className="text-2xl font-bold leading-7 text-center">Nenhum Comércio Encontrado!</h2>
                            </div>
                        ) : (
                            comerciosFiltrados.map((comercio, i) => {
                                return (
                                    <CardComercio comercio={comercio} key={i}/>
                                )
                            })
                        )
                    }
                </ul>
            </div>
            <div className="self-center w-full flex justify-end">
                <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
            </div>
        </div>
    );
}
