"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export default function AnunciosDaCidade() {
    const slides = [
        {
            id: 1,
            link: '',
            imagem: '/anuncios/iptu.png'
        },
        {
            id: 2,
            link: '',
            imagem: '/anuncios/concurso-publico.png'
        }
    ];

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[550px] xl:h-[600px] 2xl:max-w-[1440px] 2xl:mt-4"
                style={{boxShadow: '2px 2px 4px black'}}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="w-full h-full">
                        <Link
                            href={slide.link}
                            className="w-full h-full"
                            style={{
                                backgroundColor: "grey",
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            <Image alt={'imagem'} src={slide.imagem} fill className="object-cover" />
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
