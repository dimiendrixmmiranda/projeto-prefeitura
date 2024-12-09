'use client'
import Template from "@/components/template/Template";
import { listaDeNoticias } from "@/core/constants/listaDeNoticias";
import Noticia from "@/core/noticia/Noticia";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';
import Ancora from "@/components/ancora/Ancora";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { FaArrowCircleUp } from "react-icons/fa";
import style from './style.module.css'

interface GalleriaItem {
    itemImageSrc: string; // URL da imagem principal
    thumbnailImageSrc: string; // URL da miniatura
    alt: string; // Texto alternativo para a imagem
}

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [noticia, setNoticia] = useState<Noticia | null>(null);

    const imagens: GalleriaItem[] = [
        {
            itemImageSrc: '/wireframe.png',
            thumbnailImageSrc: '/wireframe.png',
            alt: 'Wireframe 1'
        },
        {
            itemImageSrc: '/wireframe.png',
            thumbnailImageSrc: '/wireframe.png',
            alt: 'Wireframe 2'
        },
        {
            itemImageSrc: '/wireframe.png',
            thumbnailImageSrc: '/wireframe.png',
            alt: 'Wireframe 3'
        },
        {
            itemImageSrc: '/wireframe.png',
            thumbnailImageSrc: '/wireframe.png',
            alt: 'Wireframe 4'
        }
    ];
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item: GalleriaItem) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: GalleriaItem) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }


    useEffect(() => {
        if (slug) {
            const noticiaId = slug.split('-')[0];
            const noticiaEncontrada = listaDeNoticias.find(n => n.id === Number(noticiaId));
            
            if (noticiaEncontrada) {
                setNoticia(noticiaEncontrada);
            }
        }
    }, [slug]);
    

    return (
        <Template>
            {
                noticia != undefined ?
                    (
                        <div className={`bg-[--cinza] text-black max-w-[95%] mx-auto py-4 flex flex-col gap-2 ${style.paginaNoticia}`}>
                            <h2 className="leading-6 font-bold text-2xl col-span-2">{noticia.titulo}</h2>
                            <p className="leading-5 col-span-2">{noticia.descricao}</p>
                            <div className="card mx-auto">
                                <Galleria value={imagens} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                                    item={itemTemplate} thumbnail={thumbnailTemplate} />
                            </div>
                            <ul className="flex flex-col gap-4 lg:max-h-[440px] lg:overflow-y-scroll xl:max-h-[550px] 2xl:max-h-[580px]">
                                {noticia.materia.map((paragrafo, i) => {
                                    return (
                                        <li key={i}>
                                            <p className="" style={{ textIndent: '2em' }}>{paragrafo}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="flex gap-2 justify-center md:justify-end col-span-2">
                                <Ancora icone={<IoIosArrowDropleftCircle />} link="/" texto="Voltar"></Ancora>
                                <Ancora icone={<FaArrowCircleUp />} link="#topo" texto="Voltar ao Topo"></Ancora>
                            </div>
                        </div>

                    ) : ''
            }
        </Template>
    )
}
