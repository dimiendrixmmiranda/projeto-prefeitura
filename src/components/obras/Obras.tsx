'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { PiTractorFill } from "react-icons/pi";
import { listaDeObras } from '@/core/constants/listaDeObras';
import Slider3d from '../slider3d/Slider3d';

export default function Obras() {
    return (
        <div className='my-12'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <PiTractorFill />
                Galeria de Obras
            </h2>
            <Slider3d array={listaDeObras}></Slider3d>
        </div>
    );
}
