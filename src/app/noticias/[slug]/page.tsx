'use client';
import Template from "@/components/template/Template";
import Noticia from "@/core/noticia/Noticia";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Galleria } from 'primereact/galleria';
import style from './style.module.css'
import AncoraContainer from "@/components/ancora/AncoraContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface GalleriaItem {
    itemImageSrc: string; // URL da imagem principal
    thumbnailImageSrc: string; // URL da miniatura
    alt: string; // Texto alternativo para a imagem
}

export default function Page() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [noticia, setNoticia] = useState<Noticia | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    const fetchNoticias = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "noticias"));
            const noticiasArray: Noticia[] = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id || null,
                    titulo: data.titulo || "Sem título",
                    descricao: data.descricao || "Sem descrição",
                    autor: data.autor || 'Sem Autor',
                    imagem: data.imagem || "",
                    materia: data.materia || '',
                    data: data.data || "",
                };
            });
            setNoticias(noticiasArray);
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar notícias:", error);
            setError("Erro ao carregar as notícias.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNoticias();
    }, []);

    useEffect(() => {
        if (slug && noticias.length > 0) {
            const noticiaId = slug.split('-')[0];
            const noticiaEncontrada = noticias.find(n => n.id === noticiaId);
            if (noticiaEncontrada) {
                setNoticia(noticiaEncontrada);
            } else {
                setError("Notícia não encontrada.");
            }
        }
    }, [slug, noticias]);


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

    return (
        <Template>
            {loading ? (
                <div>Carregando...</div>
            ) : error ? (
                <div>{error}</div>
            ) : noticia ? (
                <div className={`bg-[--cinza] text-black max-w-[95%] mx-auto py-4 flex flex-col gap-2 ${style.paginaNoticia}`}>
                    <h2 className="leading-6 font-bold text-2xl col-span-2">{noticia.titulo}</h2>
                    <p className="leading-5 col-span-2">{noticia.descricao}</p>
                    <div className="card mx-auto">
                        <Galleria value={imagens} responsiveOptions={responsiveOptions} numVisible={5} style={{ maxWidth: '640px' }}
                            item={itemTemplate} thumbnail={thumbnailTemplate} />
                    </div>
                    <ul className="flex flex-col gap-4 lg:max-h-[440px] lg:overflow-y-scroll xl:max-h-[550px] 2xl:max-h-[580px]">
                        <li>
                            <p className="" style={{ textIndent: '2em' }}>{noticia.materia}</p>
                        </li>
                    </ul>
                    <AncoraContainer></AncoraContainer>
                </div>
            ) : (
                <div>Notícia não encontrada.</div>
            )}
        </Template>
    )
}
