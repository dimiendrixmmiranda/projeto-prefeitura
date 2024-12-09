import Link from "next/link";
import styles from './style.module.css'
import Image from "next/image";
import { createSlugWithId } from "@/utils/createSlug";
import Noticia from "@/core/noticia/Noticia";

interface CardNoticiaProps{
    noticia: Noticia
}

export default function CardNoticia({noticia}: CardNoticiaProps){
    return (
        <li>
            <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`} className={styles.cardContainer}>
                <div className={styles.cardImagem}>
                    <Image alt="img" src={'/wireframe.png'} fill className="object-cover"></Image>
                </div>
                <div className={styles.cardTexto}>
                    <h1 className="font-bold leading-3 text-[.7em] sm:text-[.8em] sm:leading-4 md:text-lg md:leading-5 lg:text-xl lg:leading-5">{noticia.titulo}</h1>
                    <p className="font-medium leading-3 text-[.6em] flex-1 sm:text-[.65em] md:text-[.8em] md:leading-4 md:mt-2 lg:text-lg lg:leading-5">{noticia.descricao}</p>
                    <span className="text-[.4em] text-center flex justify-center sm:text-[.65em] md:justify-end lg:text-lg">Por Dimi Martins, 04/12/2024 ás 14:40</span>
                </div>
            </Link>
        </li>
    )
}