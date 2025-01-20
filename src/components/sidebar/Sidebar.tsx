'use client'

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import Link from 'next/link';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { listaDeMenus } from '@/core/constants/listaDeMenus';
import { listaDeRedesSociais } from '@/core/constants/listaDeRedesSociais';
import RedeSocial from '../redesSociais/RedeSocial';

export default function SidebarComponent() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card ml-auto flex justify-center items-center lg:hidden">
            <div className="flex gap-2 justify-content-center text-2xl p-1 sm:text-3xl">
                <Button icon={<FaBars />} onClick={() => setVisibleRight(true)} />
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <div className='h-full w-full flex flex-col gap-3'>
                    <h2 className='absolute top-4 left-4 font-bold text-[--verde] text-3xl'>Menu</h2>
                    <div className='w-full h-full overflow-y-scroll text-[--verde]'>
                        <div className="card">
                            <Accordion>
                                {
                                    listaDeMenus.map((menu, i) => {
                                        return (
                                            <AccordionTab key={i} header={`${menu.item}`} className=''>
                                                <div className='flex flex-col gap-1 -mt-4'>
                                                    {
                                                        menu.submenu != null ? menu.submenu.map((submenuitem, j) => {
                                                            return (
                                                                <Link key={j} href={menu.submenu[j].link} className='border-[--verde] border-2 p-1 rounded-md text-[--verde] font-bold'>{submenuitem.nome}</Link>
                                                            )
                                                        }) : ''
                                                    }
                                                </div>
                                            </AccordionTab>
                                        )
                                    })
                                }
                            </Accordion>
                        </div>

                    </div>
                    <div className='w-full h-12'>
                        <ul className='grid grid-cols-6 h-full w-full'>
                            {
                                listaDeRedesSociais.map((item, i) => {
                                    return (
                                        <RedeSocial key={i} icone={item.icone} link={item.link} nome={item.nome}></RedeSocial>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}