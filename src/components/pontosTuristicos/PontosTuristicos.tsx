'use client';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { RiLandscapeFill } from "react-icons/ri";
import Slider3d from '../slider3d/Slider3d';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import PontoTuristico from '@/core/pontosTuristicos/PontosTuristicos';

export default function PontosTuristicos() {
    const [pontosTuristicos, setPontosTurísticos] = useState<PontoTuristico[]>([])
    useEffect(() => {
        const fetchEventos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "pontosTuristicos"));
                const pontosTuristicosArray: PontoTuristico[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id || null,
                        descricao: data.descricao,
                        imagem: '/wireframe.png',
                        titulo: data.titulo,
                        arrayDeImagens: ['/wireframe.png', '/wireframe.png', '/wireframe.png'],

                    };
                })
                setPontosTurísticos(pontosTuristicosArray)
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        }

        fetchEventos();
    }, []);

    return (
        <div className='my-12'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <RiLandscapeFill />
                Conheça Nossa Cidade
            </h2>
            <Slider3d array={pontosTuristicos}></Slider3d>
        </div>
    );
}
