'use client'

import { useState } from 'react';
import { listaDeComercio } from '@/core/constants/listaDeComercios';
import Template from '@/components/template/Template';
import CardComercio from '@/components/cardComercio/CardComercio';
import AncoraContainer from '@/components/ancora/AncoraContainer';

export default function ListaDeComercios() {
    const [tipoSelecionado, setTipoSelecionado] = useState<string>('geral');

    const tiposDeComercio = ['geral', ... new Set(listaDeComercio.map(comercio => comercio.tipo.toLowerCase()))]

    const comerciosFiltrados = tipoSelecionado === 'geral'
        ? listaDeComercio
        : listaDeComercio.filter(comercio => comercio.tipo.toLowerCase() === tipoSelecionado.toLowerCase());

    return (
        <Template>
            <div className="px-4 text-black">
                <div className='flex flex-col justify-center items-center gap-3 py-6 text-[--verde] lg:max-w-[1000px] lg:mx-auto xl:text-xl xl:max-w-[1200px]'>
                    <h2 className='uppercase font-black text-2xl text-center xl:text-4xl'>Incentive o Comércio Local!</h2>
                    <p>Apoie o comércio local e fortaleça nossa comunidade! Encontre os melhores estabelecimentos próximos a você e descubra opções como supermercados, padarias, farmácias e muito mais! Filtre por tipo e faça suas compras de forma rápida e conveniente.</p>
                </div>
                <div className="mb-4">
                    <label className="font-bold">Filtrar por tipo:</label>
                    <select
                        className="ml-2 border rounded p-1"
                        value={tipoSelecionado}
                        onChange={(e) => setTipoSelecionado(e.target.value)}
                    >
                        {tiposDeComercio.map((tipo, index) => (
                            <option key={index} value={tipo}>{tipo}</option>
                        ))}
                    </select>
                </div>

                <ul className="grid grid-cols-1 gap-2 pb-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
                    {comerciosFiltrados.map((comercio, index) => (
                        <CardComercio comercio={comercio} key={index}></CardComercio>
                    ))}
                </ul>

                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    );
}
