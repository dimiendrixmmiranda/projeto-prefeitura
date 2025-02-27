'use client'
import Image from "next/image";
import { HiMagnifyingGlassCircle } from "react-icons/hi2";
import RedeSocial from "../redesSociais/RedeSocial";
// import { IoPersonSharp } from "react-icons/io5";
// import { FaBook } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { useState } from "react";
import { Dialog } from "primereact/dialog";

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });
import Link from "next/link";
import HospitalEPosto from "@/core/hospitalEPosto/HospitalEPosto";

interface CardHospitaisEPostosProps {
    hospitalEPosto: HospitalEPosto
}

export default function CardHospitaisEPostos({ hospitalEPosto }: CardHospitaisEPostosProps) {
    const [hospitalEPostoAtual, setHospitalEPostoaAtual] = useState<HospitalEPosto | null>(null)
    const [visible, setVisible] = useState(false)
    return (
        <div className="max-w-[380px] flex flex-col p-3 gap-4 border-2 border-[--verde] relative text-[--verde]">
            <div className="w-[140px] h-[140px] rounded-full overflow-hidden relative mx-auto" style={{ boxShadow: '0px 0px 2px 3px var(--verde)' }}>
                <Image alt="escola" src={hospitalEPosto.imagem} fill className="object-cover"></Image>
            </div>
            <div className="text-center flex flex-col gap-1">
                <h2 className="font-bold text-2xl leading-7">{hospitalEPosto.texto}</h2>
            </div>
            <div>
                <Link href={'/'} style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <IoLocationSharp />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Endereço: {hospitalEPosto.endereco}</span>
                    </div>
                </Link>
                <div style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <BsFillHouseDoorFill />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Bairro: {hospitalEPosto.bairro}</span>
                    </div>
                </div>
                <Link href={`tel:+${hospitalEPosto.telefone}`} style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                    <div className="w-full h-full flex justify-center items-center">
                        <MdOutlinePermPhoneMsg />
                    </div>
                    <div className="flex gap-1 items-center overflow-hidden whitespace-nowrap text-ellipsis max-w-[95%]">
                        <span className="truncate">Telefone: {hospitalEPosto.telefone}</span>
                    </div>
                </Link>
            </div>

            <div className="w-full h-[200px] bg-black border-2 border-[--verde] z-10">
                <Map latitude={hospitalEPosto.latitude} longitude={hospitalEPosto.longitude} texto={hospitalEPosto.texto} iconUrl={hospitalEPosto.icone} />
            </div>
            <button className="w-full flex justify-center items-center bg-[--verde] text-white uppercase font-bold text-2xl py-1">
                <Link href={`https://www.google.com/maps?q=${hospitalEPosto.latitude},${hospitalEPosto.longitude}`}>Me leve Até lá!</Link>
            </button>
            <ul className="grid grid-cols-5 gap-2 justify-center items-end text-3xl h-[50px] z-20 w-full">
                {
                    hospitalEPosto.redesSociais.map((hospitalEPosto, i) => {
                        return (
                            <RedeSocial key={i} icone={hospitalEPosto.icone} link={hospitalEPosto.link} nome={hospitalEPosto.nome}></RedeSocial>
                        )
                    })
                }
            </ul>
            <div className="absolute top-2 right-2 text-4xl p-1 cursor-pointer"
                onClick={() => {
                    setVisible(true)
                    setHospitalEPostoaAtual(hospitalEPosto)
                }}>
                <HiMagnifyingGlassCircle />
            </div>

            {
                hospitalEPostoAtual != null ? (
                    <Dialog
                        visible={visible}
                        className='w-[90%] h-[90%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                        onHide={() => setVisible(false)}
                    >
                        <div className="flex flex-col gap-4 items-center text-[--verde]">
                            <div className="relative w-[180px] h-[180px] overflow-hidden rounded-full border-2 border-[--verde]">
                                <Image alt={hospitalEPostoAtual.texto} src={hospitalEPostoAtual.imagem} fill className="object-cover"></Image>
                            </div>
                            <div className="text-center">
                                <h1 className="font-black text-2xl">{hospitalEPostoAtual.texto}</h1>
                                <h3 className="text-lg">{hospitalEPostoAtual.bairro}</h3>
                            </div>
                            <div className="flex justify-start w-full">
                                <div>
                                    <p>Médicos:</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                                <div>
                                    <p>Serviços:</p>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                ) : ''
            }
        </div >
    )
}