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
                className="w-full h-[250px] sm:h-[300px] md:h-[380px] xl:h-[450px] 2xl:h-[550px]"
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
