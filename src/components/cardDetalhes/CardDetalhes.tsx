'use client'
import Prefeito from "@/core/prefeito/Prefeito";
import Image from "next/image";

interface CardDetalhesProps {
    prefeito: Prefeito
}

export default function CardDetalhes({ prefeito }: CardDetalhesProps) {
    return (
        <div className="border-2 border-[--verde]">
            <div className="flex flex-col">
                <Image alt={prefeito.imagem} src={prefeito.imagem} width={200} height={200} className="object-cover w-full h-[180px] md:h-[220px]"></Image>
                <h2 className="bg-[--verde] text-white font-bold text-center p-1 leading-5 lg:text-lg">{prefeito.nome}</h2>
            </div>
        </div>
    )
}