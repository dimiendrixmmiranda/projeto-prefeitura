'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUniversity } from "react-icons/fa";

import { Navigation, Pagination } from 'swiper/modules';
import { BsTelephoneFill } from "react-icons/bs";
import secretarias from '@/data/secretarias';



export default function SecretariasCarousel() {
    return (
        <div className="xl:max-w-[93%] xl:mx-auto secretarias-carousel xl:mt-8">
            <h2 className='bg-[--marrom] mt-4 text-white w-full p-2 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'><FaUniversity className='-mt-1'/>Secretarias</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    // Configurações para diferentes larguras de tela
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {secretarias.map((secretaria, index) => (
                    <SwiperSlide key={index}>
                        <div className="card-secretaria text-black">
                            <img src={secretaria.imagem} alt={secretaria.nome} className="imagem-secretaria" />
                            <h3 className='absolute left-[50%] top-[59%] font-black leading-6 text-[1.4em] w-full max-w-[270px]' style={{transform: 'translate(-50%)'}}>{secretaria.nome}</h3>
                            <h3 className='absolute left-[50%] top-[75.5%] font-semibold leading-5 text-md' style={{transform: 'translate(-50%)'}}>{secretaria.encarregado}</h3>
                            <a href={`tel:${secretaria.telefone}`} className='font-medium text-md absolute left-[50%] top-[82%] flex whitespace-nowrap justify-center items-center gap-1' style={{transform: 'translate(-50%)'}}><BsTelephoneFill className='text-[14px]'/>Telefone: {secretaria.telefone}</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};