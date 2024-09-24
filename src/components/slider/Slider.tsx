'use client';
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';
import { Noticia } from '@/interfaces/Noticia';

interface SliderProps {
    noticiasSlider: Noticia[]; // Definir o tipo corretamente como um objeto que contém um array de notícias
}

export default function Slider({ noticiasSlider }: SliderProps) {
    const [alturaSlider, setAlturaSlider] = useState(280);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setAlturaSlider(270);
            } else if (window.innerWidth < 768) {
                setAlturaSlider(300);
            } else if (window.innerWidth < 1024) {
                setAlturaSlider(400);
            } else {
                setAlturaSlider(550);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);

    return (
        <div className={`bg-gray-900`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    noticiasSlider.length > 0 ? noticiasSlider.map((noticia, i) => (
                        <SwiperSlide key={noticia.id}>
                            <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`}>
                                <img
                                    src={noticia.enderecoImagem}
                                    alt={`Imagem ${noticia.titulo}`}
                                    className='w-full'
                                    style={{ height: `${alturaSlider}px`, objectFit: 'cover' }}
                                />
                                <h1 className='absolute bottom-8 font-bold w-[90%] text-xl flex justify-center text-center md:text-3xl md:bottom-10 lg:bottom-16 lg:text-4xl xl:bottom-20' style={{left: '50%', transform: 'translate(-50%)'}}>{noticia.titulo}</h1>
                            </Link>
                        </SwiperSlide>

                    )
                    ) : (<p>No news available</p>)
                }
            </Swiper>
        </div>
    );
}
