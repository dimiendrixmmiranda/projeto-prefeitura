'use client'
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import styles from "./styles.module.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { useEffect } from "react";
import Ponto from "@/core/ponto/Ponto";

interface RotaCaminhaoProps {
  waypoints: Ponto[];
  color?: string;
}

const RotaCaminhao = ({ waypoints, color = "green" }: RotaCaminhaoProps) => {
  const map = useMap();

  useEffect(() => {
    if (!waypoints || waypoints.length < 2) return;

    const routingControl = L.Routing.control({
      waypoints: waypoints.map((p) => L.latLng(p.latitude, p.longitude)),
      routeWhileDragging: false,
      showAlternatives: false,
      lineOptions: {
        styles: [{ color: color, weight: 6 }],
        extendToWaypoints: true, // Adiciona essa propriedade
        missingRouteTolerance: 10, // Adiciona essa propriedade
      },
    }).addTo(map);

    // Remover o painel lateral de forma mais segura
    routingControl.on("routesfound", () => {
      const controlContainer = routingControl.getContainer();
      if (controlContainer) {
        controlContainer.style.display = "none"; // Oculta o painel lateral
      }
    });

    // Retorna uma função de limpeza (destruidor)
    return () => {
      map.removeControl(routingControl);
    };
  }, [map, waypoints, color]);

  return null;
};

interface MapRouteProps {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  arrayPontosGeral1?: Ponto[];
  arrayPontosGeral2?: Ponto[];
}

const MapRoute = ({
  latitude = -23.500366004823462,
  longitude = -49.923436069202914,
  zoom = 17,
  arrayPontosGeral1 = [],
  arrayPontosGeral2 = [],
}: MapRouteProps) => {
  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        className={styles.map}
        style={{ width: "100%", height: "100%" }}
        zoomControl={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {/* Adicionando as duas rotas no mapa */}
        <RotaCaminhao waypoints={arrayPontosGeral1} color="green" />
        <RotaCaminhao waypoints={arrayPontosGeral2} color="red" />
      </MapContainer>
    </div>
  );
};

export default MapRoute;
