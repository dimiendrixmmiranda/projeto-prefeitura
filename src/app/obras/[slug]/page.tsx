'use client'
import Pagina from "@/components/templete/Pagina";
import { Card } from "@/core/card/card";
import { listaDeObras } from "@/core/constants";
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
            <h2>Hello world</h2>
        </Pagina>
    )
}