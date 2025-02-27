import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./styles.module.css";
import L from "leaflet";

/**
 * @typedef {Object} Ponto
 * @property {number} id
 * @property {string} texto
 * @property {number} latitude
 * @property {number} longitude
 * @property {string} horarios
 * @property {string} referencia
 */

/**
 * @param {Object} props
 * @param {number} [props.latitude]
 * @param {number} [props.longitude]
 * @param {string} [props.texto]
 * @param {number} [props.zoom]
 * @param {string} [props.iconUrl]
 * @param {Ponto[]} [props.arrayPontosGeral] 
 */
function Map({ latitude = -23.55052, longitude = -46.633308, texto = "Local", zoom = 17, arrayPontosGeral = [], iconUrl = '/icones/onibus.png' }) {

    const markerIcon = new L.Icon({
        iconUrl: iconUrl,
        iconSize: [25, 25],
        iconAnchor: [12.5, 25],
        popupAnchor: [0, -12.5],
    })

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
                    arrayPontosGeral.map((ponto, index) => (
                        <Marker key={index} position={[ponto.latitude, ponto.longitude]} icon={markerIcon}>
                            <Popup>{ponto.texto || "Ponto adicional"}</Popup>
                        </Marker>
                    ))
                }
            </MapContainer>
        </div>
    )
}

export default Map;
