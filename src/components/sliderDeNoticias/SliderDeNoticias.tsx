'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Noticia from '@/core/noticia/Noticia';


export default function SliderDeNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);

    useEffect(() => {
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
                        materia: data.materia,
                        data: data.data || "",
                    };
                })
                // Ordenar as notícias por data
                noticiasArray.sort((a, b) => {
                    const dateA = new Date(a.data).getTime();
                    const dateB = new Date(b.data).getTime();
                    return dateB - dateA; // Ordenar de forma decrescente (mais recente primeiro)
                });

                setNoticias(noticiasArray)
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        }

        fetchNoticias();
    }, []);
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className='h-48 sm:h-60 md:h-[300px] lg:h-[480px] lg:max-w-[900px]'
        >
            {noticias.slice(0, 4).map((noticia, i) => (
                <SwiperSlide
                    className="relative w-full h-full border-2 border-[--verde]"
                    key={i}
                >
                    <Link href={noticia.id ? `/noticias/${createSlugWithId(noticia.titulo, noticia.id)}` : '#'} >
                        <div className='relative w-full h-full' >
                            <Image
                                alt="recado da cidade"
                                src={noticia.imagem}
                                fill
                                className="object-cover"
                            />

                            <h2 className='absolute bottom-5 left-[50%] w-[90%] font-bold bg-white py-1 px-3 rounded-lg mx-auto text-center leading-5 text-lg text-[--verde] md:bottom-10 md:text-2xl lg:bottom-16 lg:text-3xl' style={{ transform: 'translate(-50%)', boxShadow: '0 0 2px 1px black' }}>{noticia.titulo}</h2>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
