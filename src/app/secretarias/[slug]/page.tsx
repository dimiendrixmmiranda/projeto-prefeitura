'use client'
import { listaDeSecretarias } from "@/core/constants";
import { Secretaria } from "@/core/secretaria/secretaria";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page(){
    const params = useParams()
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0]
    const [secretaria, setSecretaria] = useState<Secretaria | null>(null)

    console.log(secretaria)

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeSecretarias.find(n => n.id === Number(noticiaId));
            noticiaEncontrada != null ? setSecretaria(noticiaEncontrada) : ''
        }
    }, [slug])
    return (
        <h1>aqui</h1>
    )
}