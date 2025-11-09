/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import Comercio from "@/interfaces/Comercio";
import dynamic from "next/dynamic";

// importa o componente sem SSR
const Mapa = dynamic(
    () => import("@/components/base/mapa/Mapa"),
    { ssr: false }
);

interface ComponenteMapa {
    comercios: Comercio[]
}

export default function ComponenteMapa({ comercios }: ComponenteMapa) {
    return (
        <div className="p-4 flex flex-col min-h-[75vh]">
            <Mapa comercios={comercios}/>
        </div>
    );
}
