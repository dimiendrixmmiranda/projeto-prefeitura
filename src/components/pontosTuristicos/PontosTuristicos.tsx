'use client';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { listaDePontosTuristicos } from '@/core/constants/listaDePontosTuristicos';
import { RiLandscapeFill } from "react-icons/ri";
import Slider3d from '../slider3d/Slider3d';

export default function PontosTuristicos() {
    return (
        <div className='my-12'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <RiLandscapeFill />
                Conheça Nossa Cidade
            </h2>
            <Slider3d array={listaDePontosTuristicos}></Slider3d>
        </div>
    );
}
