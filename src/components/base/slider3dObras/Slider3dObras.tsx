"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Obra from "@/interfaces/Obra";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Slider3DProps {
    slides: Obra[];
}

export default function Slider3DObras({ slides }: Slider3DProps) {
    return (
        <div className="relative w-full p-4">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-green-700 hover:text-green-500 swiper-button-prev-custom">
                <FaChevronLeft size={32} />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-green-700 hover:text-green-500 swiper-button-next-custom">
                <FaChevronRight size={32} />
            </div>
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                effect="coverflow"
                loop
                centeredSlides
                slidesPerView={3}
                spaceBetween={50}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 150,
                    modifier: 2,
                    slideShadows: false,
                }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                }}
                className="w-full mx-auto"
            >
                {slides.map((slide) => {
                    const imagemCorrigida = slide.imagemBase64?.replace(/\s/g, "");
                    return (
                        <SwiperSlide
                            key={slide.id}
                            className="!flex flex-col items-center border-2 border-verde-escuro cursor-pointer"
                            style={{ boxShadow: '0 0 3px 2px black' }}
                        >
                            <div
                                className="w-full aspect-video rounded-lg overflow-hidden flex items-center justify-center text-white text-3xl font-bold"
                            >
                                <img
                                    src={imagemCorrigida}
                                    alt={slide.titulo}
                                    className="w-full h-full"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <div className="w-full bg-verde-escuro text-white font-semibold text-center py-3 rounded-b-lg uppercase">
                                {slide.titulo}
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}
