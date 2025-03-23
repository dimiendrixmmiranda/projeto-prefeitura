'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import Image from 'next/image';
import useResponsiveHeight from '@/hooks/useResponsiveHeight';
import { Dialog } from 'primereact/dialog';
import Obra from '@/core/obra/Obra';
import PontoTuristico from '@/core/pontosTuristicos/PontosTuristicos';

interface Slider3dProps {
    array: Obra[] | PontoTuristico[]
}

export default function Slider3d({ array }: Slider3dProps) {
    const [visible, setVisible] = useState(false);
    const [elemento, setElemento] = useState<null | Obra | PontoTuristico>(null)

    return (
        <div>
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
                {array.map((item, i) => (
                    <SwiperSlide
                        key={i}
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
                    >
                        <div
                            className='h-full w-full gap-1'
                            onClick={() => {
                                setVisible(true)
                                setElemento(item)
                            }}
                            style={{ display: 'grid', gridTemplateRows: '80% 1fr' }}
                        >
                            <div className='relative overflow-hidden w-full h-full'>
                                <Image
                                    alt={item.titulo}
                                    src={item.imagem}
                                    fill
                                    className='object-cover h-[90%] border-4 border-[--verde]'
                                />
                            </div>
                            <p className='bg-[--verde] w-full text-center font-bold p-1 leading-5 flex justify-center items-center lg:text-lg lg:leading-5'>{item.titulo}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Dialog
                header={elemento?.titulo}
                visible={visible}
                className='w-[90%] h-[75%] sm:h-[85%] md:h-[75%] md:w-[60%] lg:w-[45%] xl:w-[35%]'
                onHide={() => setVisible(false)}
            >
                {
                    elemento != undefined ?
                        <div className='w-full h-full gap-2 md:gap-4 xl:gap-6' style={{ display: 'grid', gridTemplateRows: '1fr auto auto' }}>
                            <div className='relative w-full h-full'>
                                <Image src={elemento?.imagem} alt={elemento?.titulo} fill className='object-cover'></Image>
                            </div>
                            <div className='w-full h-full'>
                                <p>{elemento.descricao}</p>
                            </div>
                            <div className='w-full h-full flex items-end text-center leading-5 justify-around py-4 md:py-0'>
                                <p>{elemento.governo}</p>
                                <p>{elemento.data}</p>
                            </div>
                        </div>
                        : ''
                }
            </Dialog>
        </div>
    );
}
