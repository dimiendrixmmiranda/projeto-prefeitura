'use client'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { listaDeRecadosDaCidade } from '@/core/constants/listaDeRecadosDaCidade';

interface SliderProps{
    estilo: string
}

export default function Slider({estilo}: SliderProps) {
    return (
        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className={`${estilo}`}
        >
            {listaDeRecadosDaCidade.map((recado, i) => (
                <SwiperSlide
                    className="relative w-full h-full"
                    key={i}
                >
                    <Image
                        alt="recado da cidade"
                        src={recado.imagem}
                        fill
                        className="object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
