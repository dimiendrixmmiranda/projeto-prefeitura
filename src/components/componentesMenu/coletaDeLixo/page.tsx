"use client";
import dynamic from "next/dynamic";

const MapaColeta = dynamic(() => import("@/components/componentesMenu/coletaDeLixo/ColetaDeLixo"), {
    ssr: false,
})

export default function ColetaDeLixo() {
    return (
        <div className="p-4 flex flex-col min-h-[75vh]">
            <MapaColeta />
        </div>
    )
}
