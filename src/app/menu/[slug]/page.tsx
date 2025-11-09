'use client'
import ColetaDeLixo from "@/components/componentesMenu/coletaDeLixo/ColetaDeLixo"
import ColetaDeLixoReciclavel from "@/components/componentesMenu/coletaDeLixoReciclavel/page"
import CadastreComercio from "@/components/componentesMenu/cadastreComercio/CadastreComercio"
import ComposicaoDaCamara from "@/components/componentesMenu/composicaoDaCamara/ComposicaoDaCamara"
import ConhecaOPrefeito from "@/components/componentesMenu/conhecaOPrefeito/ConhecaOPrefeito"
import GaleriaDePrefeitos from "@/components/componentesMenu/galeriaDePrefeitos/GaleriaDePrefeitos"
import PontosCircular from "@/components/pontosCircular/PontosCircular"
import Template from "@/components/template/Template"
import ComercioLocal from "@/components/componentesMenu/comercioLocal/page"
import { useParams } from "next/navigation"
import React, { JSX } from 'react';
import AspectosEducacionais from "@/components/componentesMenu/aspectosEducacionais/AspectosEducacionais"
import AspectosHistoricos from "@/components/componentesMenu/aspectosHistoricos/AspectosHistoricos"
import AspectosGeograficos from "@/components/componentesMenu/aspectosGeograficos/AspectosGeograficos"
import AspectosPopulacionais from "@/components/componentesMenu/aspectosPopulacionais/AspectosPopulacionais"
import AspectosSocioculturais from "@/components/componentesMenu/aspectosSocioculturais/AspectosPopulacionais"
import AspectosSocioeconomicos from "@/components/componentesMenu/aspectosSocioeconomicos/AspectosEconomicos"
import Demografia from "@/components/componentesMenu/demografia/Demografia"
import Etimologia from "@/components/componentesMenu/etimologia/Etimologia"
import SimbolosMunicipais from "@/components/componentesMenu/simbolosMunicipais/SimbolosMunicipais"
import PontosTuristicos from "@/components/componentesMenu/pontosTuristicos/PontosTuristicos"
import HospitaisEPostos from "@/components/componentesMenu/hospitaisEPostos/HospitaisEPostos"
import InstituicoesDeEnsino from "@/components/componentesMenu/instituicoesDeEnsino/InstituicoesDeEnsino"
import IluminacaoPublica from "@/components/componentesMenu/iluminacaoPublica/IluminacaoPublica"
import CorteEPodaDeArvore from "@/components/componentesMenu/corteEPodaDeArvore/CorteEPodaDeArvore"
import ColetaDeEntulho from "@/components/componentesMenu/coletaDeEntulho/ColetaDeEntulho"
import ServicosRurais from "@/components/componentesMenu/servicosRurais/ServicosRurais"
import FocosDeDengue from "@/components/componentesMenu/focosDeDengue/FocosDeDengue"


export default function Page() {
    const componentesPorSlug: Record<string, JSX.Element> = {
        ['conheca-o-prefeito']: <ConhecaOPrefeito />,
        ['galeria-de-prefeitos']: <GaleriaDePrefeitos />,
        ['composicao-da-camara']: <ComposicaoDaCamara />,
        ['aspectos-educacionais']: <AspectosEducacionais />,
        ['aspectos-historicos']: <AspectosHistoricos />,
        ['aspectos-geograficos']: <AspectosGeograficos />,
        ['aspectos-populacionais']: <AspectosPopulacionais />,
        ['aspectos-socieconomicos']: <AspectosSocioeconomicos />,
        ['aspectos-socioculturais']: <AspectosSocioculturais />,
        ['demografia']: <Demografia />,
        ['hospitais-e-postos']: <HospitaisEPostos />,
        ['instituicoes-de-ensino']: <InstituicoesDeEnsino />,
        ['etimologia']: <Etimologia />,
        ['simbolos-municipais']: <SimbolosMunicipais />,
        ['pontos-turisticos']: <PontosTuristicos />,
        ['comercio-local']: <ComercioLocal />,
        ['cadastre-comercio-servico']: <CadastreComercio />,
        ['coleta-de-lixo']: <ColetaDeLixo />,
        ['coleta-de-lixo-reciclavel']: <ColetaDeLixoReciclavel />,
        ['pontos-circular']: <PontosCircular />,
        ['iluminacao-publica']: <IluminacaoPublica />,
        ['corte-e-poda-de-arvore']: <CorteEPodaDeArvore />,
        ['coletar-entulho']: <ColetaDeEntulho />,
        ['servicos-rurais']: <ServicosRurais />,
        ['focos-de-dengue']: <FocosDeDengue />,
    }

    const { slug } = useParams()

    const componente = componentesPorSlug[slug as string]

    if (!componente) {
        return <p>Matéria não encontrada.</p>
    }

    return (
        <Template>
            {componente}
        </Template>
    )
}