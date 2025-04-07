// components/caixaImagem/CaixaImagem.tsx
'use client'
import React from "react";
import { Dialog } from 'primereact/dialog';
import Image from "next/image";

interface CaixaImagemProps {
    imagem: string;
    visivel: boolean;
    onFechar: () => void;
}

export default function CaixaImagem({ imagem, visivel, onFechar }: CaixaImagemProps) {
    return (
        <Dialog 
            header="Imagem da Denúncia" 
            visible={visivel} 
            style={{ width: '95%' }} 
            onHide={onFechar}
        >
            {imagem ? (
                <Image
                    src={imagem}
                    alt="Imagem da denúncia"
                    width={500}
                    height={500}
                    className="w-full h-auto object-contain"
                />
            ) : (
                <p>Imagem não disponível</p>
            )}
        </Dialog>
    );
}
