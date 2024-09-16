import React from 'react';
import { Galleria } from 'primereact/galleria';

export default function Galeria(props: any) { // Recebendo as imagens como prop
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
        <div className="card flex mx-auto">
            <Galleria value={props.images} responsiveOptions={responsiveOptions} numVisible={5}
                item={itemTemplate} thumbnail={thumbnailTemplate} />
        </div>
    )
}
