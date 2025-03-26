import { createSlugWithId } from "@/utils/createSlug";
import Menu from "../menu/Menu";
import { listaDeSecretarias } from "./listaDeSecretarias";

export const listaDeMenus: Menu[] = [
    {
        id: 1,
        item: 'Governo Atual',
        submenu: [
            {
                link: '/governoAtual/conhecaNossoPrefeito',
                nome: "Conheça o Prefeito",
                id: 1
            },
            {
                link: '/governoAtual/galeriaDePrefeitos',
                nome: "Galeria de Prefeitos",
                id: 2
            },
            {
                link: '/governoAtual/composicaoDaCamara',
                nome: "Composição da Câmara",
                id: 3
            },
        ]
    },
    {
        id: 2,
        item: 'Nossa Cidade',
        submenu: [
            {
                link: '/nossaCidade/aspectosEducacionais',
                nome: "Aspectos Educacionais",
                id: 1
            },
            {
                link: '/nossaCidade/aspectosHistoricos',
                nome: "Aspectos Históricos",
                id: 2
            },
            {
                link: '/nossaCidade/aspectosGeograficos',
                nome: "Aspectos Geográficos",
                id: 3
            },
            {
                link: '/nossaCidade/aspectosPopulacionaisSocioeconomicos',
                nome: "Aspectos Populacionas e Socioeconômicos",
                id: 4
            },
            {
                link: '/nossaCidade/aspectosSocioculturais',
                nome: "Aspectos Socioculturais",
                id: 5
            },
            {
                link: '/nossaCidade/demografia',
                nome: "Demografia",
                id: 6
            },
            {
                link: '/nossaCidade/etimologia',
                nome: "Etimologia",
                id: 7
            },
            {
                link: '/nossaCidade/simbolosMunicipais',
                nome: "Simbolos Municipais",
                id: 8
            },
            {
                link: '/nossaCidade/pontosTuristicos',
                nome: "Pontos Turísticos",
                id: 9
            },
        ]
    },
    {
        id: 3,
        item: 'Secretarias',
        submenu: listaDeSecretarias.map((secretaria, i) => {
            return {
                id: i + 1,
                link: `/secretarias/${createSlugWithId(secretaria.nome, `${secretaria.id}`)}`,
                nome: secretaria.nome
            }
        })
    },
    {
        id: 4,
        item: 'Serviços',
        submenu: [
            {
                nome: 'Corte e Poda de Árvores',
                link: `/servicos/corteEPodaDeArvores`,
                id: 7
            },
            {
                nome: 'Solicitar Coleta de Entulho',
                link: `/servicos/solicitarColetaDeEntulho`,
                id: 8
            },
            {
                nome: 'Pedido de Manutenção de Estradas e Serviços de Maquinário',
                link: `/servicos/infraestruturaEMaquinario`,
                id: 9
            },
            {
                nome: 'Concerto Iluminação Pública',
                link: `/servicos/concertoIluminacaoPublica`,
                id: 6
            },
            {
                nome: 'Coleta de Lixo',
                link: `/servicos/coletaDeLixo`,
                id: 1
            },
            {
                nome: 'Coleta de Lixo Reciclavel',
                link: `/servicos/coletaDeLixoReciclavel`,
                id: 2
            },
            {
                nome: 'Pontos da Circular',
                link: `/servicos/pontosCircular`,
                id: 3
            },
            {
                nome: 'Instituições de Ensino',
                link: `/servicos/instituicoesDeEnsino`,
                id: 4
            },
            {
                nome: 'Hospitais e Postos',
                link: `/servicos/hospitaisEPostos`,
                id: 5
            },
            {
                link: '/servicos/galeriaDeObras',
                nome: "Galeria de Obras",
                id: 10
            },
            {
                link: '/servicos/',
                nome: "Transparência",
                id: 11
            },
            {
                link: '/servicos/',
                nome: "Licitações",
                id: 12
            },
            {
                link: '/servicos/',
                nome: "Legislação",
                id: 13
            },
            {
                link: '/servicos/',
                nome: "Concursos",
                id: 14
            },
        ]
    },
    {
        id: 5,
        item: 'Imprensa',
        submenu: [
            {
                link: '/',
                nome: "Fale Conosco",
                id: 1
            },
            {
                link: '/',
                nome: "Fale com o Prefeito",
                id: 2
            },
            {
                link: '/',
                nome: "Ouvidoria",
                id: 3
            },
            {
                link: '/',
                nome: "Controladoria",
                id: 4
            },
        ]
    },
    {
        id: 6,
        item: 'Comércio',
        submenu: [
            {
                link: '/comercio/comercioLocal',
                nome: "Comércio Local",
                id: 1
            },
            {
                link: '/comercio/adicionarComercio',
                nome: "Cadastre seu Comércio",
                id: 2
            },
        ]
    },
]