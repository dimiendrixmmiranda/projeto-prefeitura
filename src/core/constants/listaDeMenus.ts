import Menu from "../menu/Menu";

export const listaDeMenus: Menu[] = [
    {
        item: 'Governo Atual',
        submenu: [
            {
                link: '/',
                nome: "Conheça o Prefeito"
            },
            {
                link: '/',
                nome: "Galeria de Prefeitos"
            },
            {
                link: '/',
                nome: "Composição da Câmara"
            },
        ]
    },
    {
        item: 'Nossa Cidade',
        submenu: [
            {
                link: '/',
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
                link: '/',
                nome: "Etimologia"
            },
            {
                link: '/',
                nome: "Simbolos Municipais"
            },
        ]
    },
    {
        item: 'Secretarias',
        submenu: [
            {
                link: '/',
                nome: "Secretaria da Educação"
            },
            {
                link: '/',
                nome: "Secretaria da Saúde"
            },
            {
                link: '/',
                nome: "Secretaria de Urbanismo, Obras Públicas, Transporte e Viação"
            },
            {
                link: '/',
                nome: "Secretaria da Cultura"
            },
            {
                link: '/',
                nome: "Secretaria do Esporte, Lazer e Turismo"
            },
            {
                link: '/',
                nome: "Secretaria da Agricultura"
            },
            {
                link: '/',
                nome: "Secretaria da Indústria, Comércio, Habitação e Inovação"
            },
        ]
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
                link: '/',
                nome: "Comércio Local"
            },
            {
                link: '/',
                nome: "Cadastre seu Comércio"
            },
        ]
    },
]