'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUniversity } from "react-icons/fa";

import { Navigation, Pagination } from 'swiper/modules';

const secretarias = [
    {
        nome: 'Secretaria Municipal de Saúde',
        telefone: '(43) 39113065',
        encarregado:'Lando Norris',
        imagem: '/wireframe.png', // Atualize com o caminho correto
    },
    {
        nome: 'Secretaria Municipal de Administração',
        telefone: '(43) 39113002',
        encarregado:'Kevin Durant',
        imagem: '/wireframe.png',
    },
    {
        nome: 'Secretaria Municipal de Planejamento',
        telefone: '(43) 39113022',
        encarregado:'Rebeca Andrade',
        imagem: '/wireframe.png',
    },
    {
        nome: 'Secretaria Municipal de Planejamento',
        telefone: '(43) 39113022',
        encarregado:'Pantera Negra',
        imagem: '/wireframe.png',
    },
];

export default function SecretariasCarousel() {
    return (
        <div className="secretarias-carousel">
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
                            <a href={`tel:${secretaria.telefone}`} className='font-medium text-md absolute left-[50%] top-[82%]' style={{transform: 'translate(-50%)'}}>Telefone: {secretaria.telefone}</a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};