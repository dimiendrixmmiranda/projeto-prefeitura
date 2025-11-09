'use client'
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from "react-icons/gi";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { menu } from '@/constants/menu';
import Link from 'next/link';
import useAuth from '@/lib/hooks/useAuth';
import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';
import Redes from '../redes/Redes';

export default function SidebarComponent() {
    const [visible, setVisible] = useState(false);
    const { usuario } = useAuth()

    return (
        <div className="card flex justify-content-center xl:hidden ">
            <Sidebar visible={visible} onHide={() => setVisible(false)} header={<h2 className='text-2xl font-black text-black'>Menu</h2>}>
                <div className='h-full w-full flex flex-col gap-3'>
                    <div className='w-full h-fit overflow-y-scroll sidebar'>
                        <div className="card">
                            <Accordion>
                                {
                                    menu.map((itemMenu, i) => {
                                        return (
                                            <AccordionTab key={i} header={`${itemMenu.label}`} className=''>
                                                <div className='flex flex-col gap-1 -mt-4' style={{ textShadow: '1px 1px 2px black' }}>
                                                    {
                                                        itemMenu.submenu != undefined ? itemMenu.submenu.map((submenuitem, j) => {
                                                            return (
                                                                <Link key={j} href={submenuitem.link} className='p-2 rounded-md font-bold bg-zinc-400 text-white'>
                                                                    {submenuitem.label}
                                                                </Link>
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
                        {/* <div className="w-full justify-center items-center text-4xl">
                            <Link href={'/login'} className="cursor-pointer flex items-center gap-1">
                                <IoLogInSharp />
                                <p className='uppercase font-bold text-xl'>Login</p>
                            </Link>
                        </div> */}
                    </div>
                    <div className="flex xl:block 2xl:max-w-[120px] 2xl:w-full hover:text-verde-escuro hover:bg-white transition-all duration-300" style={{ borderRadius: '8px' }}>
                        <Link href={usuario ? `${usuario.tipo === 'usuario' ? '/acesso/usuario' : '/acesso/administrador'}` : `/login`} className="flex items-center w-full">
                            {
                                usuario ? (
                                    <div className='flex gap-2 items-center bg-verde-escuro w-full p-2 rounded-[8px] text-white'>
                                        <div className="w-7 h-7 bg-red-500 rounded-full relative overflow-hidden">
                                            <Image alt={usuario.nome} src={usuario.imagemURL} fill className="object-cover" />
                                        </div>
                                        <p className="text-center leading-3 text-2xl font-bold">Bem vindo {usuario.nome.split(' ')[0]}</p>
                                    </div>
                                ) : (
                                    <div className='flex gap-2 items-center bg-verde-escuro w-full p-2 rounded-[8px] text-white'>
                                        <FaUserCircle className="text-2xl" />
                                        <p className="text-center leading-3 text-xl font-bold">Entre3 ou cadastre-se</p>
                                    </div>
                                )
                            }
                        </Link>
                    </div>
                    <Redes posicao='mt-auto' style='grid grid-cols-5 text-3xl'/>
                </div>
            </Sidebar>
            <Button onClick={() => setVisible(true)} className='w-12 h-12 flex justify-center items-center text-3xl'>
                <GiHamburgerMenu />
            </Button>
        </div>
    )
}