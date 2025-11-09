import Noticia from "@/interfaces/Noticia";
import { createSlugWithId } from "@/lib/utils/createSlug";
import formatarDataComDia from "@/lib/utils/formatarDataComDia";
import Image from "next/image";
import Link from "next/link";

interface CardNoticiaProps {
    noticia: Noticia
    isLast?: boolean
}

export default function CardNoticia({ noticia, isLast }: CardNoticiaProps) {
    return (
        <Link
            href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`}
            className={`overflow-hidden grid grid-cols-2 gap-1 h-[160px] sm:grid-cols-3 lg:h-[200px] xl:h-[240px] 2xl:h-[280px] hover:scale-[1.03] duration-700 transition-all text-verde-escuro pb-4
                ${!isLast ? "border-b-2 border-verde-escuro" : ""}`} // aplica border apenas se não for última
        >
            <div className="bg-zinc-500 relative">
                <Image alt={noticia.titulo} src={noticia.imagemBase64} fill className="object-cover" />
            </div>
            <div className="col-start-2 col-end-4 flex flex-col h-full p-2 sm:gap-2 2xl:p-4">
                <h2 className="font-bold text-lg leading-5 line-clamp-2 sm:text-xl sm:leading-5 lg:text-2xl xl:text-3xl">
                    {noticia.titulo}
                </h2>
                <h3 style={{ display: '-webkit-box' }}
                    className="line-clamp-3 sm:leading-5 lg:text-lg lg:leading-6 xl:line-clamp-4 2xl:text-2xl">
                    {noticia.subtitulo}
                </h3>
                <p className="line-clamp-1 text-xs leading-5 overflow-hidden mt-auto xl:text-base">{noticia.autor} - {formatarDataComDia(noticia.data)}</p>
            </div>
        </Link>
    )
}