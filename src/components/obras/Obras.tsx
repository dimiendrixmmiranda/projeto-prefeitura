'use client';
import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { PiTractorFill } from "react-icons/pi";
import Slider3d from '../slider3d/Slider3d';
import Obra from '@/core/obra/Obra';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function Obras() {
    const [listaDeObras, setListaDeObras] = useState<Obra[]>([]);

    useEffect(() => {
        const fetchObras = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "obras"))
                const obrasArray: Obra[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data()
                    return {
                        id: doc.id,
                        titulo: data.titulo,
                        descricao: data.descricao,
                        imagem: data.imagem,
                        governo: data.governo,
                        data: data.data
                    }
                })
                setListaDeObras(obrasArray)
            } catch (error) {
                console.error("Erro ao buscar obras:", error);
            }
        };

        fetchObras();
    }, []);
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
