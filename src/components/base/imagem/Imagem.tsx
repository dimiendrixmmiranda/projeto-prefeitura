import React from 'react';
import { Image } from 'primereact/image';

interface ImagemProps {
    imagem: string
}

export default function Imagem({ imagem }: ImagemProps) {
    return (
        <div className="card flex justify-content-center relative w-12 h-10">
            <Image src={imagem} alt="Image" className='object-cover' preview />
        </div>
    )
}
