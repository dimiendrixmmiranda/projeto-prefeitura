import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";

const markerIcon = new L.Icon({
    iconUrl: "/onibus.png",
    iconSize: [25, 25],
    iconAnchor: [12.5, 25],
    popupAnchor: [0, -12.5],
});


function Map({ latitude = -23.55052, longitude = -46.633308, texto = "Local", zoom = 17,  arrayPontosGeral = Array.isArray(arrayPontosGeral) ? arrayPontosGeral : []}) {
    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={zoom}
                className={styles.map}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                
                <Marker key="principal" position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>{texto}</Popup>
                </Marker>

                {arrayPontosGeral.length > 0 &&
                    arrayPontosGeral.map((ponto, index) => (
                        <Marker key={index} position={[ponto.latitude, ponto.longitude]} icon={markerIcon}>
                            <Popup>{ponto.texto || "Ponto adicional"}</Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    );
}

export default Map;
