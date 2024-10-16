import React from 'react';
import { Galleria } from 'primereact/galleria';
import { Imagem } from '@/core/imagem/imagem';


interface GaleriaProps{
    imagens: Imagem[]
}

export default function Galeria({imagens}: GaleriaProps) { // Recebendo as imagens como prop
    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 2
        }
    ];

    const itemTemplate = (item: any) => {
        return <img src={item.src} alt={item.alt} style={{ width: '100%' }} />
    }

    const thumbnailTemplate = (item: any) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <div className="card flex mx-auto h-fit max-w-[650px] xl:w-[650px]">
            <Galleria value={imagens} responsiveOptions={responsiveOptions} numVisible={5}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
