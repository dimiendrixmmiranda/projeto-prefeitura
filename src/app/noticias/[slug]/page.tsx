'use client';
import Galeria from '@/components/galeria/Galeria';
import Sidebar from '@/components/sidebar/Sidebar';
import Pagina from '@/components/templete/Pagina';
import { listaDeNoticias } from '@/core/constants/listaDeNoticias';
import { Noticia } from '@/core/noticia/noticia';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";

export default function Home() {
    const params = useParams();
    const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
    const [noticia, setNoticia] = useState<Noticia | null>(null);

    useEffect(() => {
        if (slug) {
            const noticiaId = slug?.split('-')[0];
            const noticiaEncontrada = listaDeNoticias.find(n => n.id === Number(noticiaId));
            noticiaEncontrada != null ? setNoticia(noticiaEncontrada) : ''
        }
    }, [slug]);

    const images = [
        {
            src: '/wireframe-01.png',
            alt: '/wireframe-01.png',
            thumbnailImageSrc: '/wireframe-01.png'
        },
        {
            src: '/wireframe-02.png',
            alt: '/wireframe-02.png',
            thumbnailImageSrc: '/wireframe-02.png'
        },
        {
            src: '/wireframe-03.png',
            alt: '/wireframe-03.png',
            thumbnailImageSrc: '/wireframe-03.png'
        },
    ];

    // Verificação se noticia é válido
    if (!noticia) {
        return (
            <Pagina>
                <div className="text-black max-w-[95%] mx-auto" id="topo">
                    <h2 className="font-bold text-2xl leading-6 mt-8 mb-4 text-center md:text-[1.7em] lg:text-start xl:text-[2.4em]">Notícia não encontrada</h2>
                    <p className="leading-5 font-semibold mb-6 xl:text-[1.4em]">Parece que a notícia que você está procurando não existe.</p>
                    <div className='mt-8 w-full flex justify-around text-white lg:justify-end lg:gap-2 xl:gap-4'>
                        <Link href={'/'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center text-sm'>
                            Voltar ao Início<IoIosArrowRoundBack className='text-xl font-bold' />
                        </Link>
                    </div>
                </div>
            </Pagina>
        );
    }

    return (
        <Pagina>
            <div className='max-w-[95%] mx-auto mb-5' style={{display: 'grid', gridTemplateColumns: '25% 1fr'}}>
                <div className='hidden lg:flex flex-col'>
                    <h2 className='uppercase font-black text-3xl text-black text-center py-2 mt-4'>Menu</h2>
                    <Sidebar banner={false}></Sidebar>
                </div>
                <div className='text-black max-w-[95%] mx-auto mt-4 col-span-2 lg:col-span-1' id='topo'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='font-black text-2xl leading-6 md:text-4xl'>{noticia.titulo}</h1>
                        <h2 className='font-semibold text-lg leading-6 md:text-2xl'>{noticia.descricao}</h2>
                    </div>
                    <div className='flex flex-col mt-4 gap-6'>
                        <div className='flex flex-col justify-center items-center mx-auto xl:w-fit'>
                            <Galeria imagens={images}></Galeria>
                            <p className='self-start mt-1'>{noticia.autor} - {noticia.data}</p>
                        </div>
                        <div>
                            <ul className='flex flex-col gap-2'>
                                {noticia.conteudoMateria.map((paragrafo, index) => {
                                    return (
                                        <li key={index}>
                                            <p>{paragrafo}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className='mt-8 w-full flex justify-around text-white lg:justify-end lg:gap-2 xl:gap-4'>
                        <Link href={'#topo'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center text-sm'>
                            Voltar ao Topo<IoIosArrowRoundUp className='text-xl font-bold' />
                        </Link>
                        <Link href={'/'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center text-sm'>
                            Voltar ao Início<IoIosArrowRoundBack className='text-xl font-bold' />
                        </Link>
                    </div>
                </div>
            </div>
        </Pagina>
    );
}
