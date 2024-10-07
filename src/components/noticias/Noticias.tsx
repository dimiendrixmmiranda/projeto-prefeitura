'use client';
import Slider from "../slider/Slider";
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';
import Link from "next/link";
import { createSlugWithId } from "@/utils/createSlug";
import { listaDeNoticias } from "@/core/constants/listaDeNoticias";

export default function Noticias() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    const displayDeNoticias = listaDeNoticias.slice(3 + first, 3 + first + rows);
    
    return (
        <div className="max-w-[95%] mx-auto lg:max-w-[70%] lg:mx-0 lg:ml-6 noticia">
            <div>
                <Slider noticiasSlider={listaDeNoticias.slice(0, 4)}></Slider>
            </div>
            <div className="mt-4 noticias-card relative">
                <ul className="flex flex-col gap-2">
                    {displayDeNoticias.map(noticia => (
                        <li key={noticia.id}>
                            <Link href={`/noticias/${createSlugWithId(noticia.titulo, noticia.id)}`} className="card h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 bg-zinc-400 p-[.5em] gap-1 md:p-[.8em] md:gap-2">
                                <div className="">
                                    <img src={noticia.enderecoImagem} alt="" className="max-h-full max-w-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="leading-4 font-bold text-[14px] sm:text-[20px] sm:leading-5 md:text-[24px] md:leading-7 xl:text-[30px] xl:leading-9">{noticia.titulo}</h2>
                                    <p className="leading-[10px] text-[8px] flex-1 sm:text-[12px] sm:leading-[13px] md:text-[18px] md:leading-[20px] xl:leading-[24px]">
                                        {noticia.descricao}
                                    </p>
                                    <span className="text-[8px] text-end md:text-[12px] xl:text-[16px]">Por {noticia.autor} {noticia.data}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Paginator first={first} rows={rows} totalRecords={listaDeNoticias.length} onPageChange={onPageChange} className="absolute mt-auto w-full bottom-0 xl:mt-8" />
            </div>
        </div>
    )
}
