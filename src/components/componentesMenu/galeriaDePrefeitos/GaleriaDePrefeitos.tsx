'use client'
import BotaoVoltar from "@/components/base/botaoVoltar/BotaoVoltar"
import Link from "next/link"
import { useState } from "react"

export default function GaleriaDePrefeitos() {
    const prefeitos = [
        {
            prefeito: "Gelson Mansur Nassar",
            vicePrefeito: "Jair Mazzoti",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2025 - 2028"
        },
        {
            prefeito: "Luiz Antônio de Souza",
            vicePrefeito: "Carlos Eduardo Mendes",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2021 - 2024"
        },
        {
            prefeito: "José Roberto Pinto",
            vicePrefeito: "Ana Paula Ribeiro",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2017 - 2020"
        },
        {
            prefeito: "Marcos Aurélio Silva",
            vicePrefeito: "Renata Oliveira Costa",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2013 - 2016"
        },
        {
            prefeito: "Francisco Mendes de Lima",
            vicePrefeito: "Joana Batista Alves",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2009 - 2012"
        },
        {
            prefeito: "Carlos Alberto Moreira",
            vicePrefeito: "Rita de Cássia Souza",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2005 - 2008"
        },
        {
            prefeito: "Paulo Sérgio Ramos",
            vicePrefeito: "Helena Martins Rocha",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "2001 - 2004"
        },
        {
            prefeito: "José Almeida Lopes",
            vicePrefeito: "Nilza Ferreira Lima",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "1997 - 2000"
        },
        {
            prefeito: "Antônio Luiz Borges",
            vicePrefeito: "Maria Aparecida Tavares",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "1993 - 1996"
        },
        {
            prefeito: "Sebastião Pereira Filho",
            vicePrefeito: "Helio Barbosa",
            imagemPrefeito: '/',
            imagemVicePrefeito: '/',
            mandato: "1989 - 1992"
        }
    ]
    const [prefeitoAtual, setPrefeitoAtual] = useState(prefeitos[0])

    return (
        <div className="flex flex-col p-4 gap-4 max-w-[1600px] mx-auto lg:p-8 lg:gap-6">
            <div className="flex flex-col gap-2">
                <div className="border-b-2 border-verde-escuro w-full flex pb-2 justify-center">
                    <div className="w-[200px] h-[200px] bg-zinc-900 rounded-full border-2 border-verde-claro z-20 lg:w-[250px] lg:h-[250px] 2xl:w-[320px] 2xl:h-[320px]"></div>
                    <div className="w-[100px] h-[100px] bg-zinc-900 rounded-full border-2 border-verde-claro mt-auto -ml-4 z-10 lg:w-[160px] lg:h-[160px] 2xl:w-[200px] 2xl:h-[200px]"></div>
                </div>
                <h2 className="text-2xl font-bold text-center leading-7 lg:text-4xl">{prefeitoAtual.prefeito} e {prefeitoAtual.vicePrefeito}</h2>
            </div>
            <div>
                <h2 className="text-lg font-semibold leading-6 lg:text-2xl">Sobre o mandato:</h2>
                <ul className="flex flex-col gap-2">
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum lacus ac aliquam rhoncus. In et nulla sit amet arcu rutrum pellentesque. Suspendisse vitae congue velit, eget pretium eros. Quisque sit amet turpis lorem. Quisque laoreet luctus erat, nec volutpat lectus dapibus vitae. Phasellus dolor diam, bibendum ac est nec, commodo dapibus nisi. Sed nec ipsum ipsum. Nulla consectetur tempus nulla ut ultrices. Maecenas a arcu non justo aliquam sagittis vitae sed massa.
                        </p>
                    </li>
                    <li>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum lacus ac aliquam rhoncus. In et nulla sit amet arcu rutrum pellentesque. Suspendisse vitae congue velit, eget pretium eros. Quisque sit amet turpis lorem. Quisque laoreet luctus erat, nec volutpat lectus dapibus vitae. Phasellus dolor diam, bibendum ac est nec, commodo dapibus nisi. Sed nec ipsum ipsum. Nulla consectetur tempus nulla ut ultrices. Maecenas a arcu non justo aliquam sagittis vitae sed massa.
                        </p>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-lg font-semibold leading-6 lg:text-2xl">Históricos de Prefeitos da Cidade de Joaquim Távora:</h2>
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5">
                    {
                        prefeitos.map((prefeito, i) => {
                            return (
                                <li className="mx-auto" key={i} onClick={() => setPrefeitoAtual(prefeito)}>
                                    <Link href={''} className="w-full">
                                        <div className="relative w-[140px] h-[180px] bg-zinc-900 sm:w-[180px] sm:h-[220px] lg:w-[220px] lg:h-[280px]">

                                        </div>
                                        <h2 className="max-w-[140px] line-clamp-1 bg-verde-escuro text-center text-white font-bold p-1 sm:max-w-[180px] lg:max-w-[280px]">{prefeito.prefeito}</h2>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <BotaoVoltar />
        </div>
    )
}