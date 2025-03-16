import Link from "next/link";
import styles from './style.module.css'
import Image from "next/image";
import { createSlugWithId } from "@/utils/createSlug";
import Noticia from "@/core/noticia/Noticia";
import formatarData from "@/utils/formatarData";

interface CardNoticiaProps {
    noticia: Noticia
}

export default function CardNoticia({ noticia }: CardNoticiaProps) {
    return (
        <li>
            <Link href={noticia.id ? `/noticias/${createSlugWithId(noticia.titulo, noticia.id)}` : '#'} className={styles.cardContainer}>
                <div className={styles.cardImagem}>
                    <Image alt="img" src={'/wireframe.png'} fill className="object-cover"></Image>
                </div>
                <div className={styles.cardTexto}>
                    <h1 className="font-bold leading-3 text-[.7em] sm:text-[.9em] sm:leading-4 md:text-lg md:leading-5 lg:text-xl lg:leading-5">{noticia.titulo}</h1>
                    <p className="font-medium text-[.6em] flex-1 sm:text-[.7em] md:text-[.8em] md:mt-2 lg:text-lg overflow-hidden text-ellipsis break-words max-h-[4.5em]" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {noticia.descricao}
                    </p>
                    <span className="text-[.5em] text-center flex justify-center mt-auto sm:text-[.65em] md:justify-end lg:text-lg">Por {noticia.autor}, {formatarData(noticia.data)}</span>
                </div>
            </Link>
        </li>
    )
}