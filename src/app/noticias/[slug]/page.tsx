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
            <div className='text-black max-w-[95%] mx-auto' id='topo'>
                <h2 className='font-bold text-2xl leading-6 mt-8 mb-4 text-center md:text-[1.7em] lg:text-start xl:text-[2.4em]'>{informacoesDaNoticia.titulo}</h2>
                <h4 className='leading-5 font-semibold mb-6 xl:text-[1.4em]'>{informacoesDaNoticia.descricao}</h4>
                <div className='xl:flex gap-6'>
                    <Galeria images={images}></Galeria>
                    <ul className='md:mt-5 lg:mt-0'>
                        {informacoesDaNoticia.conteudoMateria.map((paragrafo, i) => (
                            <li key={i} className='mt-4 md:mt-0'>{paragrafo}</li>
                        ))}
                    </ul>
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
