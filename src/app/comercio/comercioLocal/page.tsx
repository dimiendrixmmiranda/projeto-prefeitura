'use client'

import { useState } from 'react';
import { listaDeComercio } from '@/core/constants/listaDeComercios';
import Template from '@/components/template/Template';
import CardComercio from '@/components/cardComercio/CardComercio';
import AncoraContainer from '@/components/ancora/AncoraContainer';

import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function ListaDeComercios() {
    const [tipoSelecionado, setTipoSelecionado] = useState<string>('geral');

    const tiposDeComercio = ['geral', ... new Set(listaDeComercio.map(comercio => {
        if (comercio.tipo != undefined) {
            return comercio.tipo.toLowerCase()
        }
    }))]

    const comerciosFiltrados = tipoSelecionado === 'geral'
        ? listaDeComercio
        : listaDeComercio.filter(comercio => {
            if (comercio.tipo != null && comercio.tipo != undefined) {
                return comercio.tipo.toLowerCase() === tipoSelecionado.toLowerCase()
            }
        });

    return (
        <Template>
            <div className="p-4 text-black flex flex-col gap-4 md:gap-8">
                {/* Enunciado */}
                <div className='flex flex-col justify-center items-center gap-3 text-[--verde] lg:max-w-[1000px] lg:mx-auto xl:text-xl xl:max-w-[1200px]'>
                    <h2 className='uppercase font-black text-2xl text-center xl:text-4xl'>Incentive o Comércio Local!</h2>
                    <p>Apoie o comércio local e fortaleça nossa comunidade! Encontre os melhores estabelecimentos próximos a você e descubra opções como supermercados, padarias, farmácias e muito mais! Filtre por tipo e faça suas compras de forma rápida e conveniente.</p>
                </div>

                {/* Mapa dos comercios */}
                <div className="w-full mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[600px]">
                    <Map latitude={comerciosFiltrados[0].latitude} longitude={comerciosFiltrados[0].longitude} zoom={15} arrayPontosGeral={comerciosFiltrados}/>
                </div>

                {/* Filtros */}
                <ul className='flex flex-col gap-2 md:flex-row'>
                    <li>
                        <div className='flex flex-col'>
                            <label className="font-bold">Buscar por nome:</label>
                            <input type="text" name="nome" id="nome" className='h-[30px] px-2' />
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-col'>
                            <label className="font-bold">Filtrar por tipo:</label>
                            <select
                                className="h-[30px] px-2"
                                value={tipoSelecionado}
                                onChange={(e) => setTipoSelecionado(e.target.value)}
                            >
                                {tiposDeComercio.map((tipo, index) => (
                                    tipo != undefined ? (
                                        <option key={index} value={tipo}>{tipo}</option>
                                    ) : ('')
                                ))}
                            </select>
                        </div>
                    </li>
                </ul>

                {/* Cards */}
                <ul className="grid grid-cols-1 gap-2 pb-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
                    {comerciosFiltrados.map((comercio, index) => (
                        <CardComercio comercio={comercio} key={index}></CardComercio>
                    ))}
                </ul>

                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    );
}
