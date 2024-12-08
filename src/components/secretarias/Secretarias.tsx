'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaUniversity } from "react-icons/fa";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { BsTelephoneFill } from "react-icons/bs";
import Link from 'next/link';
import Image from 'next/image';
import { MdEmail } from "react-icons/md";
import { listaDeSecretarias } from '@/core/constants/listaDeSecretarias';
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { MdPhoneForwarded } from "react-icons/md";

import style from './style.module.css'
import { Dialog } from 'primereact/dialog';
import { Secretaria } from '@/core/secretaria/secretaria';
export default function Secretarias() {
    const [secretaria, setSecretaria] = useState<null | Secretaria>(null)
    const [visible, setVisible] = useState(false)
    return (
        <div className="xl:mx-auto secretarias-carousel my-12">
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'><FaUniversity className='-mt-1' />Secretarias</h2>
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
                className='h-[340px] max-w-[95%] mx-auto'
            >
                {listaDeSecretarias.map((secretaria, index) => (
                    <SwiperSlide key={index}>
                        <div className={style.secretariaContainer}>
                            <div className='relative w-[120px] h-[120px] rounded-full overflow-hidden mx-auto xl:w-[140px] xl:h-[140px]'>
                                <Image src={secretaria.imagem} alt={secretaria.nome} fill></Image>
                            </div>
                            <div className='flex flex-col justify-center text-center gap-1'>
                                <h3 className='font-black leading-6 text-[1.4em] w-full'>{secretaria.nome}</h3>
                                <h3 className='font-semibold leading-5 text-md' >{secretaria.encarregado}</h3>
                                <h3 className='font-semibold leading-5 text-md'>Atendimento: 07:30h ás 11:30h e 13:30h ás 17:00h</h3>
                                <a href={`tel:${secretaria.telefone}`} className='font-medium text-md flex whitespace-nowrap justify-center items-center gap-1' ><BsTelephoneFill className='text-[14px]' />Telefone: {secretaria.telefone}</a>
                                <a href={`mailto:${secretaria.email}`} className='font-medium text-md flex justify-center items-start gap-1 break-all' >
                                    <MdEmail className='mt-1' />Email: {secretaria.email}
                                </a>
                            </div>
                            <div className={`absolute top-3 right-3 text-2xl p-1 cursor-pointer ${style.detalhes}`}
                                onClick={() => {
                                    setVisible(true)
                                    setSecretaria(secretaria)
                                }}>
                                <HiDocumentMagnifyingGlass />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <Dialog
                    header={secretaria?.nome}
                    visible={visible}
                    className='w-[90%] h-[90%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                    onHide={() => setVisible(false)}
                >
                    {
                        secretaria != undefined ?
                            <div className='flex flex-col gap-2 lg:gap-4'>
                                <div className='relative w-[140px] h-[140px] mx-auto rounded-full overflow-hidden md:w-[200px] md:h-[200px]'>
                                    <Image alt={secretaria.encarregado} src={secretaria.imagem} fill className='object-cover'></Image>
                                </div>
                                <div className='flex flex-col'>
                                    <h2 className='flex justify-start items-center gap-1'> <IoPersonSharp /> Encarregado: {secretaria.encarregado}</h2>
                                    <Link href={`tel:${secretaria.telefone}`} className='flex justify-start items-center gap-1'><MdPhoneForwarded />Fone: {secretaria.telefone}</Link>
                                    <Link href={`mailto:${secretaria.email}`} className='flex justify-start items-center gap-1'> <MdEmail /> Email: {secretaria.email}</Link>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h2>Descrição do <b className='text-bold'>Encarregado</b> e dos seus <b className='text-bold'>Afazeres</b>:</h2>
                                    <p>{secretaria.descricaoEncarregado}</p>
                                </div>
                            </div>
                            : ''
                    }
                </Dialog>
            </Swiper>
        </div>
    );
};