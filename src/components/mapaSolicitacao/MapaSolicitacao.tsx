import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";
import L from "leaflet";
import { FC } from "react";
import Item from "@/core/ItemMapa/ItemMapa";
import Image from "next/image";

interface MapProps {
    latitude?: number;
    longitude?: number;
    zoom?: number;
    arrayPontosGeral?: Item[];
    concluido?: (id: string) => void
}

const MapaSolicitacao: FC<MapProps> = ({
    latitude = -23.55052,
    longitude = -46.633308,
    zoom = 17,
    arrayPontosGeral = [],
    concluido
}) => {
    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={zoom}
                className={styles.map}
                style={{ width: "100%", height: "100%" }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
                />
                {Array.isArray(arrayPontosGeral) && arrayPontosGeral.length > 0 &&
                    arrayPontosGeral.map((ponto, index) => {
                        const newMarkerIcon = new L.Icon({
                            iconUrl: ponto.icone,
                            iconSize: [25, 25],
                            iconAnchor: [12.5, 25],
                            popupAnchor: [0, -12.5],
                        });
                        return (
                            <Marker key={index} position={[ponto.latitude, ponto.longitude]} icon={newMarkerIcon}>
                                <Popup>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <h2>{ponto.nome}</h2>
                                        {
                                            ponto.servicoSolicitado ? (
                                                <p style={{ margin: '0px' }}>Tipo de serviço: {ponto.servicoSolicitado}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.condicaoAtual ? (
                                                <p style={{ margin: '0px' }}>Condição Atual: {ponto.condicaoAtual}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.telefone ? (
                                                <p style={{ margin: '0px' }}>Telefone: {ponto.telefone}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.tipoDeEntulho ? (
                                                <p style={{ margin: '0px' }}>Tipo de Entulho: {ponto.tipoDeEntulho}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.motivoDaSolicitacao ? (
                                                <p style={{ margin: '0px' }}>Motivo da Solicitação: {ponto.motivoDaSolicitacao}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.tipoDeServico ? (
                                                <p style={{ margin: '0px' }}>Tipo de Serviço: {ponto.tipoDeServico}</p>
                                            ) : ('')
                                        }
                                        {
                                            ponto.imagem ? (
                                                <div style={{ margin: '0px' }}>
                                                    <p style={{ margin: '0px' }}>Imagem:</p>
                                                    <Image alt="Imagem da Solicitação" src={ponto.imagem} width={80} height={80}></Image>
                                                </div>
                                            ) : ('')
                                        }
                                        <button
                                            className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                                            onClick={() => concluido && ponto.id && concluido(ponto.id)}
                                        >
                                            Marcar como Concluído
                                        </button>
                                    </div>
                                </Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    );
};

export default MapaSolicitacao;
