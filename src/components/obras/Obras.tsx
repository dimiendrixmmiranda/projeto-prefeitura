'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { PiTractorFill } from "react-icons/pi";
import Image from 'next/image';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import { Dialog } from 'primereact/dialog';
import Obra from '@/core/obra/Obra';
import { listaDeObras } from '@/core/constants/listaDeObras';

export default function Obras() {
    const [visible, setVisible] = useState(false);
    const [obra, setObra] = useState<null | Obra>(null)
    return (
        <div className='my-12'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <PiTractorFill />
                Galeria de Obras
            </h2>
            <Swiper
                effect="coverflow"
                navigation
                loop
                initialSlide={0}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={useResponsiveHeight().qtdeSlides}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                modules={[EffectCoverflow, Navigation, Autoplay]}
                spaceBetween={30}
                className='w-[95%] h-[250px] sm:h-[300px] xl:h-[320px]'
            >
                {listaDeObras.map((obra, i) => (
                    <SwiperSlide
                        key={i}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    >
                        <div
                            className='h-full w-full gap-1'
                            onClick={() => {
                                setVisible(true)
                                setObra(obra)
                            }}
                            style={{ display: 'grid', gridTemplateRows: '80% 1fr' }}
                        >
                            <div className='relative overflow-hidden w-full h-full'>
                                <Image
                                    alt={obra.titulo}
                                    src={obra.imagem}
                                    fill
                                    className='object-cover h-[90%] border-4 border-[--verde]'
                                />
                            </div>
                            <p className='bg-[--verde] w-full text-center font-bold p-1 leading-5 flex justify-center items-center lg:text-lg lg:leading-5'>{obra.titulo}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Dialog
                header={obra?.titulo}
                visible={visible}
                className='w-[90%] h-[70%] sm:h-[85%] md:h-[75%] md:w-[60%] lg:w-[45%] xl:w-[35%]'
                onHide={() => setVisible(false)}
            >
                {
                    obra != undefined ?
                    <div className='w-full h-full gap-2 md:gap-4 xl:gap-6' style={{ display: 'grid', gridTemplateRows: '1fr auto auto' }}>
                            <div className='relative w-full h-full'>
                                <Image src={obra?.imagem} alt={obra?.titulo} fill className='object-cover'></Image>
                            </div>
                            <div className='w-full h-full'>
                                <p>{obra.descricao}</p>
                            </div>
                            <div className='w-full h-full flex justify-center items-end text-center leading-5'>
                                <p>{obra.data}</p>
                            </div>
                        </div>
                        : ''
                }
            </Dialog>
        </div>
    );
}
