'use client';

import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { FaBars } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { ImTarget } from "react-icons/im";
import { PiRankingFill } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
import { GiPistolGun } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link';

export default function Offcanvas() {
    const [visible, setVisible] = useState(false);

    return (
        <div className="card flex justify-center w-16 h-16 lg:hidden">
            <Sidebar className='relative' visible={visible} position='left' onHide={() => setVisible(false)}>
                <h1 style={{position: 'absolute', top: '1%', left: '50%', transform: 'translate(-60%)', fontSize: '2em', fontWeight: 'bold'}}>Menu</h1>

                <ul className='flex flex-col items-start gap-2'>
                    <li className="uppercase font-bold p-2 text-xl">
                        <Link href={"#"}>
                            <div className="flex gap-1 justify-center items-center">
                                <FaCalendarAlt />Resultados
                            </div>
                        </Link>
                    </li>
                    <li className="uppercase font-bold p-2 text-xl">
                        <Link href={"#"}>
                            <div className="flex gap-1 justify-center items-center">
                                <FaTrophy />Campeonatos
                            </div>
                        </Link>
                    </li>
                    <li className="uppercase font-bold p-2 text-xl">
                        <Link href={"#"}>
                            <div className="flex gap-1 justify-center items-center">
                                <ImTarget />CFG dos Pro
                            </div>
                        </Link>
                    </li>
                    <li className="uppercase font-bold p-2 text-xl">
                        <Link href={"#"}>
                            <div className="flex gap-1 justify-center items-center">
                                <PiRankingFill />Rankings
                            </div>
                        </Link>
                    </li>
                    <li className="uppercase font-bold p-2 text-xl">
                        <Link href={"#"}>
                            <div className="flex gap-1 justify-center items-center">
                                <GiPistolGun />Skins
                            </div>
                        </Link>
                    </li>
                </ul>

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