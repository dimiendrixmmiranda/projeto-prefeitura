'use client'
import Pagina from "@/components/templete/Pagina";
import { Card } from "@/core/card/card";
import { listaDeObras } from "@/core/constants";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const params = useParams()
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const [obra, setObra] = useState<Card | null>(null)

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeObras.find(n => n.id === Number(noticiaId));
            noticiaEncontrada != null ? setObra(noticiaEncontrada) : ''
        }
    }, [slug])

    console.log(obra)

    return (
        <Pagina>
            <div className="bg-zinc-300 text-black flex flex-col justify-center items-center py-10 ">
                <div className="w-full max-w-[95%] mx-auto flex flex-col items-center">
                    <h2 className="text-[--marrom] uppercase font-black text-center text-xl mb-2 max-w-[90%] mx-auto md:text-2xl lg:text-3xl lg:mb-4">{obra?.titulo}</h2>
                    <div className="relative w-[300px] h-[200px] md:w-[600px] md:h-[400px]">
                        {
                            obra != null ?
                                <Image src={obra?.imagem} alt={obra?.titulo} fill className="object-cover"></Image>
                                : ''
                        }
                    </div>
                    <p className="text-[--marrom] text-sm">
                        Realizado em {obra?.data}
                    </p>
                </div>
            </div>
        </Pagina>
    )
}