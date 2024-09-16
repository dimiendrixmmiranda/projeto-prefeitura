'use client';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Accordion, AccordionTab } from 'primereact/accordion';

import Link from 'next/link';
import { menuCabecalho } from '@/data/dados';

export default function Offcanvas() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-center lg:hidden">
            <Sidebar className='relative' visible={visible} position='left' onHide={() => setVisible(false)}>
                <h1 style={{ position: 'absolute', top: '1%', left: '50%', transform: 'translate(-60%)', fontSize: '2em', fontWeight: 'bold' }}>Menu</h1>

                <Accordion>
                    {
                        menuCabecalho.map((cabecalho, i) => {
                            return (
                                <AccordionTab key={i} header={cabecalho.tituloCabecalho} className='flex flex-col'>
                                    {
                                        cabecalho.subtitulos.map((subtitulo, j) => {
                                            return (
                                                <Link href={'/'} key={j} className='p-2 font-bold'>{subtitulo}</Link>
                                            )
                                        })
                                    }
                                </AccordionTab>
                            )
                        })
                    }
                </Accordion>

                <ul className='absolute bottom-0 left-0 flex w-full justify-around py-5'>
                    <Link href={"#"}>
                        <div className="flex gap-1 justify-center items-center text-3xl">
                            <FaInstagram />
                        </div>
                    </Link>
                    <Link href={"#"}>
                        <div className="flex gap-1 justify-center items-center text-3xl">
                            <FaFacebook />
                        </div>
                    </Link>
                    <Link href={"#"}>
                        <div className="flex gap-1 justify-center items-center text-3xl">
                            <FaTiktok />
                        </div>
                    </Link>
                    <Link href={"#"}>
                        <div className="flex gap-1 justify-center items-center text-3xl">
                            <FaXTwitter />
                        </div>
                    </Link>
                    <Link href={"#"}>
                        <div className="flex gap-1 justify-center items-center text-3xl">
                            <MdEmail />
                        </div>
                    </Link>
                </ul>
            </Sidebar>
            <Button className='w-20 flex justify-center items-center text-3xl' onClick={() => setVisible(true)} >
                <FaBars />
            </Button>
        </div>
    )
}