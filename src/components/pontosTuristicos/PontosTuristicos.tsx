'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import { Dialog } from 'primereact/dialog';
import { listaDePontosTuristicos } from '@/core/constants/listaDePontosTuristicos';
import { RiLandscapeFill } from "react-icons/ri";

import PontoTuristico from '@/core/pontosTuristicos/PontosTuristicos';

export default function PontosTuristicos() {
    const [visible, setVisible] = useState(false);
    const [pontoTuristico, setPontoTuristico] = useState<null | PontoTuristico>(null)
    return (
        <div className='my-12'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <RiLandscapeFill />
                Conheça Nossa Cidade
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
                modules={[EffectCoverflow, Navigation]}
                spaceBetween={30}
                className='w-[95%] h-[250px] sm:h-[300px] xl:h-[320px]'
            >
                {listaDePontosTuristicos.map((pontoTuristico, i) => (
                    <SwiperSlide
                        key={i}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    >
                        <div
                            className='h-full w-full gap-1'
                            onClick={() => {
                                setVisible(true)
                                setPontoTuristico(pontoTuristico)
                            }}
                            style={{ display: 'grid', gridTemplateRows: '80% 1fr' }}
                        >
                            <div className='relative overflow-hidden w-full h-full'>
                                <Image
                                    alt={pontoTuristico.titulo}
                                    src={pontoTuristico.thumbnail}
                                    fill
                                    className='object-cover h-[90%] border-4 border-[--verde]'
                                />
                            </div>
                            <p className='bg-[--verde] w-full text-center font-bold p-1 leading-5 flex justify-center items-center lg:text-lg lg:leading-5'>{pontoTuristico.titulo}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Dialog
                header={pontoTuristico?.titulo}
                visible={visible}
                className='w-[90%] h-[70%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                onHide={() => setVisible(false)}
            >
                {
                    pontoTuristico != undefined ?
                        <div className='w-full h-full gap-2' style={{ display: 'grid', gridTemplateRows: '60% 30% 1fr' }}>
                            <div className='relative w-full h-full'>
                                <Image src={pontoTuristico?.thumbnail} alt={pontoTuristico?.titulo} fill className='object-cover'></Image>
                            </div>
                            <div className='w-full h-full'>
                                <p>{pontoTuristico.descricao}</p>
                            </div>
                            <div className='w-full h-full flex justify-center items-end text-center leading-5'>
                                {/* <p>{pontoTuristico.data}</p> */}
                            </div>
                        </div>
                        : ''
                }
            </Dialog>
        </div>
    );
}
