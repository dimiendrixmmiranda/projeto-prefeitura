
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import { BsCircleFill } from "react-icons/bs";
import { listaDeMenuAcessoRapido } from '@/core/constants/listaDeMenuAcessoRapido';

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
                    <div className='w-full h-full overflow-scroll text-[--verde] flex flex-col'>
                        {
                            listaDeMenuAcessoRapido.map((menu, i) => {
                                return (
                                    <Link key={i} href={menu.link} className='text-lg my-2 flex items-center gap-1'>
                                        <BsCircleFill className='text-[.7em]'/>
                                        <p>{menu.nome}</p>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </Sidebar>
        </div>
    )
}