'use client';
import Slider from "../slider/Slider";
import React, { useState } from "react";
import { Paginator } from 'primereact/paginator';

export default function Noticias() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(4);

    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div className="max-w-[95%] mx-auto lg:max-w-[70%] lg:mx-0 lg:ml-6 lg:h-[1440px] xl:h-[1640px]">
            <div>
                <Slider></Slider>
            </div>
            <div className="mt-4">
                <ul className="flex flex-col gap-2">
                    <li className="card h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 bg-zinc-400 relative">
                        <div className="flex items-center justify-center h-full">
                            <img src="./wireframe.png" alt="" className="max-h-full max-w-full object-cover" />
                        </div>
                        <div className="p-1 sm:p-2">
                            <h2 className="leading-4 font-bold sm:text-[20px] sm:leading-6">Falcão de AÇO II no NORTE PIONEIRO é SUCESSO</h2>
                            <p className="text-[8px] sm:text-[12px] sm:leading-4 sm:mt-2 md:text-[15px] md:mt-2 font-medium mt-1 flex-1">
                                A notícia ressalta o sucesso do evento "Falcão de AÇO II" no Norte Pioneiro, com grande participação do público e elogios à organização.
                            </p>
                            <span className="text-[8px] sm:text-[10px] md:text-[12px] absolute bottom-1">Por Dimi Martins 01/09/24, 16:34</span>
                        </div>
                    </li>
                    <li className="card h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 bg-zinc-400 relative">
                        <div className="flex items-center justify-center h-full">
                            <img src="./wireframe.png" alt="" className="max-h-full max-w-full object-cover" />
                        </div>
                        <div className="p-1 sm:p-2">
                            <h2 className="leading-4 font-bold sm:text-[20px] sm:leading-6">Falcão de AÇO II no NORTE PIONEIRO é SUCESSO</h2>
                            <p className="text-[8px] sm:text-[12px] sm:leading-4 sm:mt-2 md:text-[15px] md:mt-2 font-medium mt-1 flex-1">
                                A notícia ressalta o sucesso do evento "Falcão de AÇO II" no Norte Pioneiro, com grande participação do público e elogios à organização.
                            </p>
                            <span className="text-[8px] sm:text-[10px] md:text-[12px] absolute bottom-1">Por Dimi Martins 01/09/24, 16:34</span>
                        </div>
                    </li>
                    <li className="card h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 bg-zinc-400 relative">
                        <div className="flex items-center justify-center h-full">
                            <img src="./wireframe.png" alt="" className="max-h-full max-w-full object-cover" />
                        </div>
                        <div className="p-1 sm:p-2">
                            <h2 className="leading-4 font-bold sm:text-[20px] sm:leading-6">Falcão de AÇO II no NORTE PIONEIRO é SUCESSO</h2>
                            <p className="text-[8px] sm:text-[12px] sm:leading-4 sm:mt-2 md:text-[15px] md:mt-2 font-medium mt-1 flex-1">
                                A notícia ressalta o sucesso do evento "Falcão de AÇO II" no Norte Pioneiro, com grande participação do público e elogios à organização.
                            </p>
                            <span className="text-[8px] sm:text-[10px] md:text-[12px] absolute bottom-1">Por Dimi Martins 01/09/24, 16:34</span>
                        </div>
                    </li>
                    <li className="card h-32 sm:h-40 md:h-48 lg:h-52 xl:h-60 bg-zinc-400 relative">
                        <div className="flex items-center justify-center h-full">
                            <img src="./wireframe.png" alt="" className="max-h-full max-w-full object-cover" />
                        </div>
                        <div className="p-1 sm:p-2">
                            <h2 className="leading-4 font-bold sm:text-[20px] sm:leading-6">Falcão de AÇO II no NORTE PIONEIRO é SUCESSO</h2>
                            <p className="text-[8px] sm:text-[12px] sm:leading-4 sm:mt-2 md:text-[15px] md:mt-2 font-medium mt-1 flex-1">
                                A notícia ressalta o sucesso do evento "Falcão de AÇO II" no Norte Pioneiro, com grande participação do público e elogios à organização.
                            </p>
                            <span className="text-[8px] sm:text-[10px] md:text-[12px] absolute bottom-1">Por Dimi Martins 01/09/24, 16:34</span>
                        </div>
                    </li>
                </ul>
                <Paginator first={first} rows={rows} totalRecords={12} onPageChange={onPageChange}  className="mt-6 xl:mt-8"/>
            </div>
        </div>
    )
}