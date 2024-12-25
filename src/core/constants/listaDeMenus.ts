import { createSlugWithId } from "@/utils/createSlug";
import Menu from "../menu/Menu";
import { listaDeSecretarias } from "./listaDeSecretarias";

export const listaDeMenus: Menu[] = [
    {
        item: 'Governo Atual',
        submenu: [
            {
                link: '/governoAtual/conhecaNossoPrefeito',
                nome: "Conheça o Prefeito"
            },
            {
                link: '/governoAtual/galeriaDePrefeitos',
                nome: "Galeria de Prefeitos"
            },
            {
                link: '/governoAtual/composicaoDaCamara',
                nome: "Composição da Câmara"
            },
        ]
    },
    {
        item: 'Nossa Cidade',
        submenu: [
            {
                link: '/nossaCidade/aspectosEducacionais',
                nome: "Aspectos Educacionais"
            },
            {
                link: '/nossaCidade/aspectosHistoricos',
                nome: "Aspectos Históricos"
            },
            {
                link: '/nossaCidade/aspectosGeograficos',
                nome: "Aspectos Geográficos"
            },
            {
                link: '/nossaCidade/aspectosPopulacionaisSocioeconomicos',
                nome: "Aspectos Populacionas e Socioeconômicos"
            },
            {
                link: '/nossaCidade/aspectosSocioculturais',
                nome: "Aspectos Socioculturais"
            },
            {
                link: '/nossaCidade/demografia',
                nome: "Demografia"
            },
            {
                link: '/nossaCidade/etimologia',
                nome: "Etimologia"
            },
            {
                link: '/nossaCidade/simbolosMunicipais',
                nome: "Simbolos Municipais"
            },
        ]
    },
    {
        item: 'Secretarias',
        submenu: listaDeSecretarias.map(secretaria => {
            return {
                link: `/secretarias/${createSlugWithId(secretaria.nome, secretaria.id)}`,
                nome: secretaria.nome
            }
        })
    },
    {
        item: 'Serviços',
        submenu: [
            {
                link: '/',
                nome: "Transparência"
            },
            {
                link: '/',
                nome: "Licitações"
            },
            {
                link: '/',
                nome: "Legislação"
            },
            {
                link: '/',
                nome: "Concursos"
            },
            {
                link: '/',
                nome: "Obras"
            },
            {
                link: '/',
                nome: "Hospitais e Postos"
            },
            {
                link: '/',
                nome: "Escolas Municipais"
            },
        ]
    },
    {
        item: 'Imprensa',
        submenu: [
            {
                link: '/',
                nome: "Fale Conosco"
            },
            {
                link: '/',
                nome: "Fale com o Prefeito"
            },
            {
                link: '/',
                nome: "Ouvidoria"
            },
            {
                link: '/',
                nome: "Controladoria"
            },
        ]
    },
    {
        item: 'Comércio',
        submenu: [
            {
                link: '/comercio/comercioLocal',
                nome: "Comércio Local"
            },
            {
                link: '/comercio/adicionarComercio',
                nome: "Cadastre seu Comércio"
            },
        ]
    },
]