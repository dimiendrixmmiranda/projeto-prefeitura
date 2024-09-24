'use client';
import Galeria from '@/components/galeria/Galeria';
import Pagina from '@/components/templete/Pagina';
import listaNoticias from '@/data/noticias';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";

export default function Home() {
    const { slug } = useParams();
    // Expressão regular para capturar o número após o último traço
    const buscarIndice = slug?.toString().match(/-(\s*\d+)$/);
    const indice = buscarIndice != null ? parseInt(buscarIndice[1]) : null;
    const informacoesDaNoticia = listaNoticias.filter((noticia) => noticia.id == indice)[0];

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

    // Verificação se informacoesDaNoticia é válido
    if (!informacoesDaNoticia) {
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
            <div className='text-black max-w-[95%] mx-auto mt-4 xl:flex-wrap' id='topo'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-black text-2xl leading-6 md:text-4xl'>{informacoesDaNoticia.titulo}</h1>
                    <h2 className='font-semibold text-lg leading-6 md:text-2xl'>{informacoesDaNoticia.descricao}</h2>
                </div>
                <div className='flex flex-col mt-4 gap-6 xl:flex-row'>
                    <div className='flex flex-col justify-center items-center xl:w-fit'>
                        <Galeria images={images}></Galeria>
                        <p className='self-start mt-1'>{informacoesDaNoticia.autor} - {informacoesDaNoticia.data}</p>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-2'>
                            {informacoesDaNoticia.conteudoMateria.map((paragrafo, index) => {
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
        </Pagina>
    );
}
