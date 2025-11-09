/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import dynamic from "next/dynamic";

// importa o componente sem SSR
const MapaComercioLocal = dynamic(
    () => import("@/components/componentesMenu/comercioLocal/ComercioLocal"),
    { ssr: false }
);

export default function ComercioLocal() {
    return (
        <div className="p-4 flex flex-col min-h-[75vh]">
            <MapaComercioLocal />
        </div>
    );
}
