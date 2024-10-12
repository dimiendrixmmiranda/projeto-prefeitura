'use client'
import Ancora from "@/components/ancora/Ancora";
import Galeria from "@/components/galeria/Galeria";
import Sidebar from "@/components/sidebar/Sidebar";
import Pagina from "@/components/templete/Pagina";
import { Card } from "@/core/card/card";
import { listaDeObras } from "@/core/constants";
import { Imagem } from "@/core/imagem/imagem";
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

    // temporario
    const arrayImagem: Imagem[] = [
        {
            src: obra?.imagem,
            alt: obra?.titulo,
            thumbnailImageSrc: obra?.imagem
        },
        {
            src: obra?.imagem,
            alt: obra?.titulo,
            thumbnailImageSrc: obra?.imagem
        },
        {
            src: obra?.imagem,
            alt: obra?.titulo,
            thumbnailImageSrc: obra?.imagem
        },
    ]

    return (
        <Pagina>
            <div className="w-full max-w-[95%] mx-auto" style={{ display: 'grid', gridTemplateColumns: '25% 1fr' }}>
                <div className="hidden lg:block">
                    <h2 className='uppercase font-black text-3xl text-black text-center py-2 mt-4'>Menu</h2>
                    <Sidebar banner={false}></Sidebar>
                </div>
                <div className="bg-zinc-300 text-black flex flex-col justify-center items-center col-span-2 lg:col-span-1">
                    <h2 className="uppercase font-bold text-xl text-center leading-5 text-[--marrom] my-8 sm:text-3xl xl:text-4xl">{obra?.titulo}</h2>
                    <Galeria imagens={arrayImagem}></Galeria>
                    <span>Realizado em {obra?.data}</span>
                    <Ancora estilo="flex my-4 justify-around w-full max-w-[650px] text-white md:justify-end md:gap-5"></Ancora>
                </div>
            </div>
        </Pagina>
    )
}