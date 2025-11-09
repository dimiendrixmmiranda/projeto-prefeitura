"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Noticia from "@/interfaces/Noticia";
import Image from "next/image";
import { createSlugWithId } from "@/lib/utils/createSlug";

interface SliderNoticiasProps {
    noticias: Noticia[] | null
}

export default function SliderNoticias({ noticias }: SliderNoticiasProps) {
    return (
        <div className="flex flex-col w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="w-full h-[220px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] 2xl:max-w-[1236px]"
            >
                {noticias && noticias.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full">
                        <Link
                            href={`/noticias/${createSlugWithId(slide.titulo, slide.id)}`} 
                            className="w-full h-full relative"
                            style={{
                                backgroundColor: "grey",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            <Image alt={slide.titulo} src={slide.imagemBase64} fill className="object-cover"/>
                            <h2 className="absolute bottom-5 z-10 left-[50%] w-[90%] text-center bg-verde-escuro py-1 text-sm leading-5 sm:text-lg sm:leading-6 md:text-2xl md:leading-7 lg:py-3 lg:text-3xl lg:leading-8" style={{transform: 'translate(-50%)', textShadow: '1px 1px 2px black', borderRadius: '8px'}}>{slide.titulo}</h2>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}