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
                    <h1 className="font-bold text-lg leading-5 line-clamp-3 lg:text-2xl">{noticia.titulo}</h1>
                    <p className="text-xs line-clamp-1 sm:line-clamp-2 md:text-sm xl:text-[1em] xl:line-clamp-3">
                        {noticia.descricao}
                    </p>
                    <span className="text-[.5em] text-center flex justify-center mt-auto md:text-xs xl:justify-start">Por {noticia.autor}, {formatarData(noticia.data)}</span>
                </div>
            </Link>
        </li>
    )
}