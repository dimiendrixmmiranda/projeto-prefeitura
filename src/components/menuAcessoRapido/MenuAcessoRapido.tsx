
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import { BsCircleFill } from "react-icons/bs";
import menusFiltrados from '@/core/constants/listaDeMenuDeAcessoRapido';

export default function MenuAcessoRapido() {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return (
        <div className="card ml-auto flex justify-center items-center absolute top-2 left-2 md:hidden">
            <div className="w-10 h-8 flex justify-center z-10 bg-[--verde] sm:text-2xl">
                <Button icon={<FaBars />} onClick={() => setVisibleLeft(true)} />
            </div>
            <Sidebar visible={visibleLeft} position="left" onHide={() => setVisibleLeft(false)}>
                <div className='h-full w-full flex flex-col gap-3'>
                    <h2 className='absolute top-6 left-4 font-bold text-[--verde] text-xl'>Menu de Acesso Rápido</h2>
                    
                    <ul className='w-full h-full overflow-y-scroll overflow-x-hidden text-[--verde] flex flex-col list-none'>
                        {menusFiltrados.map((menu, i) => (
                            <React.Fragment key={i}>
                                {menu?.submenu.map((sub, j) => (
                                    <li key={j}>
                                        <Link
                                            href={sub.link}
                                            className='text-lg my-2 flex items-center gap-1'
                                            style={{ display: "grid", gridTemplateColumns: "20px 1fr" }}
                                        >
                                            <BsCircleFill className="text-[.7em]" />
                                            <p>{sub.nome}</p>
                                        </Link>
                                    </li>
                                ))}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </Sidebar>
        </div>
    )
}