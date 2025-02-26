"use client";
import { useState } from "react";
import { database, ref, push } from "@/lib/firebase"; // Certifique-se de que sua configuração do Firebase está correta
import Template from "@/components/template/Template";
import Link from "next/link";

// Tipagem para as coordenadas de localização
interface Coordinates {
    lat: number;
    lng: number;
}

export default function Page() {
    const [, setLocation] = useState<Coordinates | null>(null);
    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [qtdePostes, setQtdePostes] = useState("");

    // Função para capturar a localização do usuário
    const getLocation = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        timestamp: new Date().toISOString(),
                    };

                    setLocation(newLocation);

                    // Enviar os dados para o Firebase
                    const locationsRef = ref(database, "relatos"); // Usando a coleção "relatos"
                    push(locationsRef, {
                        nome,
                        rua,
                        qtdePostes,
                        latitude: newLocation.lat,
                        longitude: newLocation.lng,
                        timestamp: newLocation.timestamp,
                    })
                        .then(() => {
                            console.log("Relato salvo com sucesso!");
                        })
                        .catch((error) => {
                            console.error("Erro ao salvar relato:", error);
                        });
                },
                (error) => console.error("Erro ao obter localização:", error)
            );
        } else {
            console.error("Geolocalização não suportada pelo navegador.");
        }
    };

    return (
        <Template>
            <div className="text-black min-h-[80vh]">
                <form>
                    <fieldset>
                        <label htmlFor="nome">Informe seu nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="rua">Informe o nome da Rua:</label>
                        <input
                            type="text"
                            id="rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                        />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="qtdePostes">Informe a quantidade de postes quebrados:</label>
                        <input
                            type="text"
                            id="qtdePostes"
                            value={qtdePostes}
                            onChange={(e) => setQtdePostes(e.target.value)}
                        />
                    </fieldset>
                    <button onClick={getLocation}>Pegar localização atual</button>
                </form>
                <Link href={'/teste'}>Não Clique aqui</Link>
            </div>
        </Template>
    );
}