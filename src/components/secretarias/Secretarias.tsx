'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUniversity } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BsTelephoneFill } from "react-icons/bs";
import { listaDeSecretarias } from '@/core/constants';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";

export default function SecretariasCarousel() {
    return (
        <div className="xl:max-w-[93%] xl:mx-auto secretarias-carousel xl:mt-8">
            <h2 className='bg-[--marrom] mt-4 text-white w-full p-2 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'><FaUniversity className='-mt-1' />Secretarias</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className='h-[300px] md:h-[340px]'
            >
                {listaDeSecretarias.map((secretaria, index) => (
                    <SwiperSlide key={index}>
                        <Link href={`/secretarias/${createSlugWithId(secretaria.nome, secretaria.id)}`}>
                            <div className='w-full h-full text-[--marrom] flex flex-col p-2 justify-center items-center rounded-md border border-[--marrom]'>
                                <div className='relative w-[130px] h-[130px] rounded-full overflow-hidden mx-auto xl:w-[160px] xl:h-[160px]'>
                                    <Image src={secretaria.imagem} alt={secretaria.nome} fill></Image>
                                </div>
                                <div className='mt-2'>
                                    <h3 className='font-black leading-6 text-[1.4em] w-full'>{secretaria.nome}</h3>
                                    <h3 className='font-semibold leading-5 text-md' >{secretaria.encarregado}</h3>
                                    <h3 className='font-semibold leading-5 text-md'>Funcionamento: 07:30h ás 11:30h e 13:30h ás 17:00h</h3>
                                    <a href={`tel:${secretaria.telefone}`} className='font-medium text-md flex whitespace-nowrap justify-center items-center gap-1' ><BsTelephoneFill className='text-[14px]' />Telefone: {secretaria.telefone}</a>
                                    <a href={`mailto:${secretaria.email}`} className='font-medium text-md flex justify-center items-start gap-1 break-all' >
                                    <MdEmail className='mt-1'/>Email: {secretaria.email}
                                    </a>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};