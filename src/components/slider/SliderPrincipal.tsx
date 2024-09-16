'use client';
// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { createSlugWithId } from '@/utils/createSlug';
import banners from '@/data/banners';

export default function SliderPrincipal() {

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
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    banners.map((banner, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link href={banner.link}>
                                    <img
                                        src={banner.urlImage}
                                        alt={banner.titulo}
                                        className='w-full'
                                        style={{ height: `${alturaSlider}px`, objectFit: 'cover' }}
                                    />
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}
