'use client';
import Galeria from '@/components/galeria/Galeria';
import Pagina from '@/components/templete/Pagina';
import listaNoticias from '@/data/noticias';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";

export default function Home() {
    const { slug } = useParams()
    // Expressão regular para capturar o número após o último traço
    const regex = /-(\s*\d+)$/;
    const match = slug.toString().match(regex);
    const indice = match != null ? parseInt(match[1]) : null
    const informacoesDaNoticia = listaNoticias.filter((noticia) => noticia.id == indice)[0]
    console.log(informacoesDaNoticia)
    const images = [
        {
            src: '/wireframe-01.png',
            alt: 'wireframe-01.png',
            thumbnailImageSrc: '/wireframe-01.png'
        },
        {
            src: '/wireframe-02.png',
            alt: 'wireframe-02.png',
            thumbnailImageSrc: '/wireframe-02.png'
        },
        {
            src: '/wireframe-03.png',
            alt: 'wireframe-03.png',
            thumbnailImageSrc: '/wireframe-03.png'
        },
    ]


    return (
        <Pagina>
            <div className='pagina-noticia'>
                <h2 className='text-black font-bold text-2xl leading-6 mt-8 mb-4 text-center md:text-[1.7em] lg:text-start pagina-noticia-titulo' id='topo'>{informacoesDaNoticia.titulo}</h2>

                <div className='pagina-noticia-container'>
                    <Galeria images={images}></Galeria>
                    
                    <ul className='text-black md:mt-5 lg:mt-0'>
                        {informacoesDaNoticia.conteudoMateria.map((paragrafo, i) => {
                            return (
                                <li key={i} className='mt-4 md:mt-0'>{paragrafo}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className='mt-8 w-full flex justify-around lg:justify-end lg:gap-2 xl:gap-4'>
                    <Link href={'#topo'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center text-sm'>Voltar ao Topo<IoIosArrowRoundUp className='text-xl font-bold' /></Link>
                    <Link href={'/'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center text-sm'>Voltar ao Início<IoIosArrowRoundBack className='text-xl font-bold' /></Link>
                </div>
            </div>
        </Pagina>
    );
}
