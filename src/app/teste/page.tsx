"use client";
import { useState, useEffect } from "react";
import { database, ref, get } from "@/lib/firebase"; // Certifique-se de que está importando do firebase/database
import Template from "@/components/template/Template";

interface LocationData {
  lat: number;
  lng: number;
  timestamp: string;
}

export default function Page() {
  const [locations, setLocations] = useState<LocationData[]>([]);

  console.log(locations); // Para verificar se a lista de localizações está sendo carregada

  useEffect(() => {
    const fetchLocations = async () => {
      const locationsRef = ref(database, "relatos"); // A referência correta para o Realtime Database
      const snapshot = await get(locationsRef); // Obter os dados de locais do Firebase

      if (snapshot.exists()) {
        const data = snapshot.val(); // Dados retornados do Firebase
        const locationsList = Object.values(data) as LocationData[]; // Convertendo para uma lista
        setLocations(locationsList); // Atualizando o estado com as localizações
      } else {
        console.log("Nenhuma localização encontrada.");
      }
    };

    fetchLocations();
  }, []);

  return (
    <Template>
      <div className="text-black">
        <h2>Localizações Reportadas</h2>
        <ul>
          {locations.length === 0 ? (
            <li>Sem localizações disponíveis</li>
          ) : (
            locations.map((loc, index) => (
              <li key={index}>
                📍 {loc.lat}, {loc.lng} - {new Date(loc.timestamp).toLocaleString()}
              </li>
            ))
          )}
        </ul>
      </div>
    </Template>
  );
}
