import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";
import L from "leaflet";
import { FC } from "react";
import HospitalEPosto from "@/core/hospitalEPosto/HospitalEPosto";
import { Escola } from "@/core/escola/Escola";
import Ponto from "@/core/ponto/Ponto";
import Comercio from "@/core/comercio/Comercio";

interface MapProps {
    latitude?: number;
    longitude?: number;
    id?: number
    texto?: string;
    zoom?: number;
    iconUrl?: string;
    arrayPontosGeral?: Ponto[] | HospitalEPosto[] | Escola[] | Comercio[];
}

const Map: FC<MapProps> = ({
    latitude = -23.55052,
    longitude = -46.633308,
    texto = "Local",
    zoom = 17,
    arrayPontosGeral = [],
    iconUrl = '/icones/onibus.png'
}) => {

    const markerIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: [25, 25],
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -12.5],
    });

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
                <Marker key="principal" position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>{texto}</Popup>
                </Marker>
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
                                <Popup>{ponto.texto || "Ponto adicional"}</Popup>
                            </Marker>
                        )
                    })
                }
            </MapContainer>
        </div>
    );
};

export default Map;
