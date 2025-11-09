/* eslint-disable @typescript-eslint/no-require-imports */
"use client";

import dynamic from "next/dynamic";

// importa o componente sem SSR
const MapaPontosCircular = dynamic(
    () => import("@/components/pontosCircular/PontosCircular"),
    { ssr: false }
);

export default function PontosCircular() {
    return (
        <div className="p-4 flex flex-col min-h-[75vh]">
            <MapaPontosCircular />
        </div>
    );
}
