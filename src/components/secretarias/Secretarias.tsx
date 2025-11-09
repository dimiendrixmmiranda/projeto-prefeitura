import { FaLandmark, FaPhoneVolume } from "react-icons/fa";
import TituloSecao from "../base/tituloSecao/TituloSecao";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import Link from "next/link";
import { IoInformationCircle } from "react-icons/io5";
import { useState } from "react";
import Secretaria from "@/interfaces/Secretaria";
import { Dialog } from "primereact/dialog";
import { secretarias } from "@/constants/listaDeSecretarias";

export default function Secretarias() {
    const [dialogVisivel, setDialogVisivel] = useState(false)
    const [secretariaAtual, setSecretariaAtual] = useState<Secretaria | null>(null)
    return (
        <div>
            <TituloSecao icone={<FaLandmark />} texto="Secretarias" />
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                    // autoplay={{ delay: 5000 }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1440: { slidesPerView: 4 },
                    }}
                    // loop
                    className="w-full h-[450px] sm:h-[450px] md:h-[450px] lg:h-[480px] xl:h-[455px] 2xl:h-[450px]"
                >
                    {secretarias.map((secretaria, i) => (
                        <SwiperSlide
                            key={i} className="w-full h-full p-2 flex"
                        >
                            <div className="border-2 border-verde-escuro w-full h-full flex flex-col items-center gap-2 p-2 overflow-hidden relative" style={{ borderRadius: '8px' }}>
                                <button className="absolute top-2 right-2 text-2xl rounded-full p-1 hover:bg-verde-escuro hover:text-white transition-all duration-300" onClick={() => {
                                    setDialogVisivel(true)
                                    setSecretariaAtual(secretaria)
                                }}
                                >
                                    <IoInformationCircle />
                                </button>
                                <div className="w-[170px] h-[170px] rounded-full overflow-hidden bg-zinc-900"></div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl uppercase font-bold text-center">{secretaria.nome}</h2>
                                    <h4 className="text-xl text-center">{secretaria.responsavel}</h4>
                                    <p className="text-center">
                                        Atendimento: das {secretaria.atendimento.manha} e {secretaria.atendimento.tarde}
                                    </p>
                                    <div>
                                        <Link href={''} className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white">
                                            <FaPhoneVolume className="self-center" />
                                            <p className="truncate">Telefone:{secretaria.telefone}</p>
                                        </Link>
                                        <Link href={`mailto:${secretaria.email}`} className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white">
                                            <MdEmail className="self-center" />
                                            <p className="truncate max-w-[90%]">Email:{secretaria.email}</p>
                                        </Link>
                                        <Link
                                            href={`https://www.google.com/maps?q=${encodeURIComponent(secretaria.endereco)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white"
                                        >
                                            <FaMapLocationDot className="self-center" />
                                            <p className="truncate max-w-[90%]">Endereço: {secretaria.endereco}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Dialog
                header={secretariaAtual?.nome}
                visible={dialogVisivel}
                onHide={() => setDialogVisivel(false)}
                className="max-w-[95%] w-full md:max-w-[700px]"
            >
                <div className="flex flex-col items-center w-full gap-4 text-black">
                    <div className="flex flex-col gap-2">
                        <div className="w-[170px] h-[170px] rounded-full overflow-hidden bg-zinc-900 lg:w-[200px] lg:h-[200px]"></div>
                        <h4 className="text-center font-bold text-2xl lg:text-3xl">{secretariaAtual?.responsavel}</h4>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">Sobre a Secretaria:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate nisl ac odio vulputate auctor. Nullam in facilisis arcu. Donec at dolor scelerisque, euismod lacus et, tincidunt libero. Curabitur mauris ex, eleifend at sem dictum, sollicitudin cursus diam. Donec et euismod magna. Duis laoreet maximus neque, in posuere mauris ullamcorper a. Quisque nunc turpis, auctor in metus nec, tincidunt condimentum felis. Etiam ac tellus at ligula imperdiet iaculis. Suspendisse vel massa pellentesque, placerat orci in, scelerisque erat. Donec consequat fringilla nisi nec sodales.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-xl">Sobre o Encarregado:</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate nisl ac odio vulputate auctor. Nullam in facilisis arcu. Donec at dolor scelerisque, euismod lacus et, tincidunt libero. Curabitur mauris ex, eleifend at sem dictum, sollicitudin cursus diam. Donec et euismod magna. Duis laoreet maximus neque, in posuere mauris ullamcorper a. Quisque nunc turpis, auctor in metus nec, tincidunt condimentum felis. Etiam ac tellus at ligula imperdiet iaculis. Suspendisse vel massa pellentesque, placerat orci in, scelerisque erat. Donec consequat fringilla nisi nec sodales.
                        </p>
                    </div>

                    <p className="text-center bg-verde-escuro w-full text-white py-1 text-xl">
                        Atendimento: das {secretariaAtual?.atendimento.manha} e {secretariaAtual?.atendimento.tarde}
                    </p>
                    <div className="flex flex-col w-full">
                        <Link href={''} className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white">
                            <FaPhoneVolume className="self-center" />
                            <p className="truncate">Telefone:{secretariaAtual?.telefone}</p>
                        </Link>
                        <Link href={`mailto:${secretariaAtual?.email}`} className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white">
                            <MdEmail className="self-center" />
                            <p className="truncate max-w-[90%]">Email:{secretariaAtual?.email}</p>
                        </Link>
                        {
                            secretariaAtual?.endereco && <Link
                                href={`https://www.google.com/maps?q=${encodeURIComponent(secretariaAtual?.endereco)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="grid grid-cols-[20px_1fr] p-1 duration-300 transition-all hover:bg-zinc-500 hover:text-white"
                            >
                                <FaMapLocationDot className="self-center" />
                                <p className="truncate max-w-[90%]">Endereço: {secretariaAtual?.endereco}</p>
                            </Link>
                        }
                    </div>
                </div>
            </Dialog>
        </div>
    )
}