import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";

const markerIcon = new L.Icon({
    iconUrl: "/brasao-parana.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

function Map({ latitude = -23.55052, longitude = -46.633308, texto = "Local" }) {
    return (
        <div className={styles.mapWrapper}>
            <MapContainer
                center={[latitude, longitude]}
                zoom={14}
                className={styles.map}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker key={1} position={[latitude, longitude]} icon={markerIcon}>
                    <Popup>{texto}</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;
