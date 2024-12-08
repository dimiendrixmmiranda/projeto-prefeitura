'use client'
import { listaDeBanners } from "@/core/constants/listaDeBanners";
import Image from "next/image";
import Link from "next/link";

interface BannerProps {
    estilo: string
}

export default function Banners({ estilo }: BannerProps) {
    return (
        <ul className={`${estilo}`}>
            {
                listaDeBanners.map((banner, i) => {
                    return (
                        <li key={i} className="w-full h-full overflow-hidden border border-black">
                            <Link href={banner.link}>
                                <div className="relative w-full h-full">
                                    <Image alt={banner.texto} src={banner.imagem} fill className="object-cover"></Image>
                                </div>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}