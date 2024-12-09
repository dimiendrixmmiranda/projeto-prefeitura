'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';
import { listaDeNoticias } from '@/core/constants/listaDeNoticias';


export default function SliderDeNoticias() {
    const noticias = listaDeNoticias.slice(0, 4)
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className='h-48 sm:h-60 md:h-[300px] lg:h-[480px] lg:max-w-[900px]'
        >
            {noticias.map((noticia, i) => (
                <SwiperSlide
                    className="relative w-full h-full"
                    key={i}
                >
                    <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`}>
                        <div className='relative w-full h-full'>
                            <Image
                                alt="recado da cidade"
                                src={noticia.imagem}
                                fill
                                className="object-cover"
                            />

                            <h2 className='absolute bottom-5 left-[50%] w-[90%] mx-auto text-center leading-5 text-lg text-white md:bottom-10 md:text-2xl lg:bottom-16 lg:text-3xl' style={{transform: 'translate(-50%)', textShadow: '1px 1px 2px black'}}>{noticia.titulo}</h2>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
