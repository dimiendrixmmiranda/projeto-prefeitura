import Image from "next/image";
import Link from "next/link";

interface BannersProps {
    estilo: string
}

export default function Banners({ estilo }: BannersProps) {
    return (
        <nav>
            <ul className={`${estilo}`}>
                <li className="max-w-[235px] mx-auto w-full lg:max-w-[300px] h-[180px] hover:scale-105 transition-all duration-300 lg:h-[250px]">
                    <Link href={'/'}>
                        <div className="flex flex-col justify-center items-center w-full h-full p-2 border-2 border-zinc-500" style={{ borderRadius: '8px' }}>
                            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] relative">
                                <Image alt="imagem" src={'/banners/diario-oficial-online.png'} fill className="object-contain" />
                            </div>
                            <h2 className="uppercase font-bold text-sm text-center leading-5 sm:text-lg sm:leading-6 2xl:text-2xl 2xl:leading-[26px]">Diário Oficial</h2>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[235px] mx-auto w-full lg:max-w-[300px] h-[180px] hover:scale-105 transition-all duration-300 lg:h-[250px]">
                    <Link href={'/'}>
                        <div className="flex flex-col justify-center items-center w-full h-full p-2 border-2 border-zinc-500" style={{ borderRadius: '8px' }}>
                            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] relative">
                                <Image alt="imagem" src={'/banners/sala-do-empreendedor.png'} fill className="object-contain" />
                            </div>
                            <h2 className="uppercase font-bold text-sm text-center leading-5 sm:text-lg sm:leading-6 2xl:text-2xl 2xl:leading-[26px]">Sala do Empreendedor</h2>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[235px] mx-auto w-full lg:max-w-[300px] h-[180px] hover:scale-105 transition-all duration-300 lg:h-[250px]">
                    <Link href={'/'}>
                        <div className="flex flex-col justify-center items-center w-full h-full p-2 border-2 border-zinc-500" style={{ borderRadius: '8px' }}>
                            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] relative">
                                <Image alt="imagem" src={'/banners/atende-net.png'} fill className="object-contain" />
                            </div>
                            <h2 className="uppercase font-bold text-sm text-center leading-5 sm:text-lg sm:leading-6 2xl:text-2xl 2xl:leading-[26px]">ATENDE.NET</h2>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[235px] mx-auto w-full lg:max-w-[300px] h-[180px] hover:scale-105 transition-all duration-300 lg:h-[250px]">
                    <Link href={'/'}>
                        <div className="flex flex-col justify-center items-center w-full h-full p-2 border-2 border-zinc-500" style={{ borderRadius: '8px' }}>
                            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] relative">
                                <Image alt="imagem" src={'/banners/radar-da-transparencia.png'} fill className="object-contain" />
                            </div>
                            <h2 className="uppercase font-bold text-sm text-center leading-5 sm:text-lg sm:leading-6 2xl:text-2xl 2xl:leading-[26px]">Radar da Transparência</h2>
                        </div>
                    </Link>
                </li>
                <li className="max-w-[235px] mx-auto w-full lg:max-w-[300px] h-[180px] hover:scale-105 transition-all duration-300 lg:h-[250px]">
                    <Link href={'/'}>
                        <div className="flex flex-col justify-center items-center w-full h-full p-2 border-2 border-zinc-500" style={{ borderRadius: '8px' }}>
                            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] relative">
                                <Image alt="imagem" src={'/banners/fila-de-espera.png'} fill className="object-contain" />
                            </div>
                            <h2 className="uppercase font-bold text-sm text-center leading-5 sm:text-lg sm:leading-6 2xl:text-2xl 2xl:leading-[26px]">Educação - Fila de Espera</h2>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}