'use client'

import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar"
import CardComercio from "@/components/base/cardComercio/CardComercio"
import Mapa from "@/components/base/mapa/Mapa"
import Comercio from "@/interfaces/Comercio"
import { useListaDeComercios } from "@/lib/hooks/useListaDeComercios"
import { useEffect, useState } from "react"

export default function InstituicoesDeEnsino() {
    const { comercios } = useListaDeComercios()
    const [instituicoesDeEnsino, setInstituicoesDeEnsino] = useState<Comercio[] | null>(null)

    useEffect(() => {
        const instituicoesDeEnsino = comercios.filter(comercio => comercio.tipo == 'escola')
        setInstituicoesDeEnsino(instituicoesDeEnsino)
    }, [comercios])
    
    return (
        <div className="p-4 flex flex-col gap-4 text-verde-escuro max-w-[1440px] mx-auto lg:p-8">
            <h2 className="text-2xl font-bold text-center md:text-3xl xl:text-4xl">Instituições de Ensino da Cidade de Joaquim Távora - PR</h2>
            <div>
                {instituicoesDeEnsino && <Mapa comercios={instituicoesDeEnsino} />}
            </div>
            <ul className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {
                    instituicoesDeEnsino?.map((hospitalEPosto, i) => {
                        return (
                            <CardComercio comercio={hospitalEPosto} key={i} />
                        )
                    })
                }
            </ul>
            <BotaoVoltar />
        </div>
    )
}