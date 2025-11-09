"use client";
import { useEffect, useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import CardNoticia from "../base/cardNoticia/cardNoticia";
import SliderNoticias from "../sliderNoticias/SliderNoticias";
import { useTamanhoDaTela } from "@/lib/hooks/useTamanhoDaTela";
import { useListaDeNoticias } from "@/lib/hooks/useListaDeNoticias";
import Noticia from "@/interfaces/Noticia";

export default function Noticias() {
    const { width } = useTamanhoDaTela();
    const { noticias } = useListaDeNoticias();
    const [itensPorPagina, setItensPorPagina] = useState(6);
    const [first, setFirst] = useState(0);
    const [noticiasSlider, setNoticiasSlider] = useState<Noticia[] | null>(null)
    const [noticiasCards, setNoticiasCards] = useState<Noticia[] | null>(null)

    useEffect(() => {
        if (width < 767) setItensPorPagina(6);
        else if (width > 767 && width < 1023) setItensPorPagina(9);
        else if (width < 1023) setItensPorPagina(9);
        else if (width < 1280) setItensPorPagina(8);
        else if (width < 1440) setItensPorPagina(6);
        else setItensPorPagina(5);
    }, [width]);

    useEffect(() => {
        const noticiasFiltradasSlider = noticias.slice(0, 5)
        setNoticiasSlider(noticiasFiltradasSlider)
        const noticiasFiltradasCards = noticias.slice(5)
        setNoticiasCards(noticiasFiltradasCards)
    }, [noticias])

    const onPageChange = (e: PaginatorPageChangeEvent) => {
        setFirst(e.first)
        document.getElementById("lista-de-noticias")?.scrollIntoView({ behavior: "smooth" });
    }

    const noticiasPaginadas = noticiasCards && noticiasCards.slice(first, first + itensPorPagina);

    return (
        <section className="flex flex-col w-full gap-4 max-w-[1050px] mx-auto 3xl:max-w-full xl:max-w-[900px] 2xl:max-w-[1000px]">
            <SliderNoticias noticias={noticiasSlider && noticiasSlider} />
            <ul className="flex flex-col gap-4 2xl:gap-6" id="lista-de-noticias">
                {noticiasPaginadas && noticiasPaginadas.map((noticia, i) => (
                    <CardNoticia key={i} noticia={noticia} isLast={i === noticiasPaginadas.length - 1} />
                ))}
            </ul>

            <div className="flex justify-center mt-4">
                <Paginator
                    first={first}
                    rows={itensPorPagina}
                    totalRecords={noticias.length}
                    onPageChange={onPageChange}
                    template="PrevPageLink PageLinks NextPageLink"
                />
            </div>
        </section>
    );
}
