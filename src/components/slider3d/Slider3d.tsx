'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { GrFormPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

// Definindo o tipo para cada objeto no arrayImagens
interface Obra {
    linkNoticia: string;
    linkImagem: string;
    titulo: string;
}

// Definindo o tipo para as props do componente
interface Slider3dProps {
    titulo: string;
    arrayImagens: Obra[];
    galeriaObras: boolean;
}

export default function Slider3d({ titulo, arrayImagens, galeriaObras }: Slider3dProps) {
    const [imagemAmpliada, setImagemAmpliada] = useState<string | null>(null);

    // Função para ampliar a imagem
    const ampliarImagem = (linkImagem: string) => {
        setImagemAmpliada(linkImagem);
    };

    // Função para fechar a imagem ampliada
    const fecharImagemAmpliada = () => {
        setImagemAmpliada(null);
    };

    return (
        <div className="container slider3d">
            <h1 className="text-center font-black text-2xl py-2 my-2 bg-[--marrom] md:text-3xl lg:text-4xl lg:my-6">{titulo}</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                breakpoints={{
                    765: {
                        slidesPerView: 2,
                    },
                    1440: {
                        slidesPerView: 3,
                    }
                }}
                className="swiper_container"
            >
                {
                    galeriaObras ? (
                        arrayImagens.map((obra, i) => (
                            <div key={i}>
                                <SwiperSlide>
                                    <Link href={obra.linkNoticia} className='overflow-hidden'>
                                        <img src={obra.linkImagem} alt={obra.linkImagem} className='h-full w-full object-cover' />
                                        <h2 className='absolute w-[90%] flex justify-center items-center mx-auto text-xl font-black text-center leading-6 uppercase' style={{ bottom: '15%', left: '50%', transform: 'translate(-50%)', textShadow: '1px 1px 2px black' }}>{obra.titulo}</h2>
                                    </Link>
                                </SwiperSlide>
                            </div>
                        ))
                    ) : (
                        arrayImagens.map((obra, i) => (
                            <div key={i}>
                                <SwiperSlide>
                                    <img
                                        src={obra.linkImagem}
                                        alt={obra.linkImagem}
                                        className='h-full w-full object-cover cursor-pointer'
                                        onClick={() => ampliarImagem(obra.linkImagem)} // Amplia a imagem quando clicada
                                    />
                                    <h2 className='absolute w-[90%] flex justify-center items-center mx-auto text-xl font-black text-center leading-6 uppercase' style={{ bottom: '15%', left: '50%', transform: 'translate(-50%)', textShadow: '1px 1px 2px black' }}>{obra.titulo}</h2>
                                </SwiperSlide>
                            </div>
                        ))
                    )
                }

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <GrFormPrevious />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <GrNext />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>

            {/* Modal da imagem ampliada */}
            {imagemAmpliada && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70 w-[90%]  h-[90%] mx-auto mt-10" onClick={fecharImagemAmpliada}>
                    <img src={imagemAmpliada} alt="Ampliada" className="max-w-full max-h-full" />
                    <button className='absolute top-5 right-7'>X</button>
                </div>
            )}
        </div>
    );
}
