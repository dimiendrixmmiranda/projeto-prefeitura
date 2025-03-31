'use client'

import Template from '@/components/template/Template';
import AncoraContainer from '@/components/ancora/AncoraContainer';
import dynamic from "next/dynamic";
import Item from "@/core/ItemMapa/ItemMapa";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import CardComercio from '@/components/cardComercio/CardComercio';
import Comercio from '@/core/comercio/Comercio';
const Mapa = dynamic(() => import("@/components/mapaComercio"), { ssr: false });


interface Comercios {
    nome: string
    endereco: string
    bairro: string
    localizacao: string[]
    categoriaComercio: string
    id: string
    horarioDeAtendimento: string
    telefone: string
    situacao: boolean
    imagem?: string
    data: Date
}


export default function ListaDeComercios() {
    function identificarCategoria(categoria: string) {
        switch (categoria) {
            case 'padaria':
                return 'icone-padaria.png'
            case 'mercado':
                return 'icone-supermercado.png'
            case 'farmacia':
                return 'icone-farmacia.png'
            case 'petshop':
                return 'icone-petshop.png'
            case 'veterinaria':
                return 'icone-veterinaria.png'
            default:
                break;
        }
    }


    const [solicitacoes, setSolicitacoes] = useState<Comercios[]>([])
    const [solicitacoesMapa, setSolicitacoesMapa] = useState<Item[]>([]);
    const [comercios, setComercios] = useState<Comercio[]>([])

    useEffect(() => {
        const fetchSolicitacoes = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "solicitacacaoDeCadastroDeComercio"));
                const solicitacoesArray: Comercios[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        nome: data.nome || "Nome não informado",
                        endereco: data.endereco || "Endereço não informado",
                        bairro: data.bairro || "Bairro não informado",
                        localizacao: data.localizacao || [],
                        horarioDeAtendimento: data.horarioDeAtendimento || "Horário não informado",
                        telefone: data.telefone || "Telefone não informado",
                        imagem: data.imagem || "",
                        situacao: data.situacao,
                        categoriaComercio: data.categoriaComercio,
                        data: data.data,
                    };
                });

                setSolicitacoes(solicitacoesArray);

                const comerciosFormatados: Comercio[] = solicitacoesArray.map((s) => ({
                    id: s.id,
                    localizacao: s.localizacao ?? [], // Garante que seja um array
                    nome: s.nome ?? "Nome não informado",
                    imagem: s.imagem ?? "/icones/default.png",
                    horarioDeAtendimento: s.horarioDeAtendimento ?? "Horário não informado",
                    telefone: s.telefone ?? "Telefone não informado",
                    endereco: s.endereco ?? "Endereço não informado",
                    categoriaComercio: s.categoriaComercio ?? "Desconhecido",
                    data: s.data ?? new Date(), // Garante uma data padrão
                    situacao: s.situacao ?? false,
                }));
                

                setComercios(comerciosFormatados);


                const solicitacoesFormatadas = solicitacoesArray
                    .filter(s => s.localizacao?.length === 2) // Filtra somente as que têm coordenadas
                    .filter(s => s.situacao === true)
                    .map((s) => ({
                        nome: s.nome,
                        latitude: parseFloat(s.localizacao[0]),
                        longitude: parseFloat(s.localizacao[1]),
                        id: s.id,
                        categoriaComercio: s.categoriaComercio,
                        icone: `/icones/${identificarCategoria(s.categoriaComercio)}`, // Defina um ícone padrão
                        telefone: s.telefone,
                        imagem: s.imagem,
                        endereco: s.endereco,
                        horarioDeAtendimento: s.horarioDeAtendimento
                    }));

                setSolicitacoesMapa(solicitacoesFormatadas);

            } catch (error) {
                console.error("Erro ao buscar solicitações:", error);
            }
        }
        fetchSolicitacoes()
    }, [])

    console.log(solicitacoes)
    console.log(solicitacoesMapa)
    console.log(comercios)

    return (
        <Template>
            <div className="p-4 text-black flex flex-col gap-4 md:gap-8">
                {/* Enunciado */}
                <div className='flex flex-col justify-center items-center gap-3 text-[--verde] lg:max-w-[1000px] lg:mx-auto xl:text-xl xl:max-w-[1200px]'>
                    <h2 className='uppercase font-black text-2xl text-center xl:text-4xl'>Incentive o Comércio Local!</h2>
                    <p>Apoie o comércio local e fortaleça nossa comunidade! Encontre os melhores estabelecimentos próximos a você e descubra opções como supermercados, padarias, farmácias e muito mais! Filtre por tipo e faça suas compras de forma rápida e conveniente.</p>
                </div>

                <div className="flex flex-col gap-4 lg:gap-8 lg:my-4">
                    <h2 className="text-2xl font-bold text-[--verde] uppercase leading-6 text-center md:text-3xl lg:text-4xl">Mapa do Comércio Local</h2>
                    <div className="w-full max-w-[1100px] mx-auto h-[300px] bg-black border-2 border-[--verde] overflow-hidden md:h-[400px] xl:h-[500px]">
                        <Mapa latitude={-23.49783040582745} longitude={-49.92295585808861} zoom={15} arrayPontosGeral={solicitacoesMapa}
                        />
                    </div>
                </div>

                <ul className='flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        comercios.map((comercio, i) => {
                            return (
                                <CardComercio key={i} comercio={comercio}></CardComercio>
                            )
                        })
                    }
                </ul>
                <AncoraContainer></AncoraContainer>
            </div>
        </Template>
    );
}
