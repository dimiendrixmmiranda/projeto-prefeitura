"use client";
import dynamic from "next/dynamic";

const MapaColeta = dynamic(() => import("@/components/componentesMenu/coletaDeLixoReciclavel/ColetaDeLixoReciclavel"), {
    ssr: false,
})

export default function ColetaDeLixoReciclavel() {
    return (
        <div className="p-4 flex flex-col min-h-[75vh]">
            <MapaColeta />
        </div>
    )
}
