import { RiGovernmentFill } from "react-icons/ri";
import { FaNewspaper, FaTreeCity } from "react-icons/fa6";
import { FaBuildingUser } from "react-icons/fa6";
import { MdAddBusiness, MdMiscellaneousServices } from "react-icons/md";
import Menu from "@/interfaces/Menu";

const menu: Menu[] = [
    {
        label: "Governo Atual",
        icone: <RiGovernmentFill />,
        submenu: [
            {
                label: "Conheça o Prefeito",
                link: '/menu/conheca-o-prefeito'
            },
            {
                label: "Galeria de Prefeitos",
                link: '/menu/galeria-de-prefeitos'
            },
            {
                label: "Composição da Câmara",
                link: '/menu/composicao-da-camara'
            }
        ]
    },
    {
        label: "Nossa Cidade",
        icone: <FaTreeCity />,
        submenu: [
            {
                label: "Aspectos Educacionais",
                link: '/menu/aspectos-educacionais'
            },
            {
                label: "Aspectos Históricos",
                link: '/menu/aspectos-historicos'
            },
            {
                label: "Aspectos Geográficos",
                link: '/menu/aspectos-geograficos'
            },
            {
                label: "Aspectos Populacionais",
                link: '/menu/aspectos-populacionais'
            },
            {
                label: "Aspectos Socioecônomicos",
                link: '/menu/aspectos-socieconomicos'
            },
            {
                label: "Aspectos Socioculturais",
                link: '/menu/aspectos-socioculturais'
            },
            {
                label: "Demografia",
                link: '/menu/demografia'
            },
            {
                label: "Etimologia",
                link: '/menu/etimologia'
            },
            {
                label: "Símbolos Municipais",
                link: '/menu/simbolos-municipais'
            },
            {
                label: "Pontos Túristicos",
                link: '/menu/pontos-turisticos'
            },
        ]
    },
    {
        label: "Secretarias",
        icone: <FaBuildingUser />,
        submenu: [
            {
                label: "Secretaria da Saúde",
                link: '/menu/secretarias/secretaria-da-saude'
            },
            {
                label: "Secretaria da Educação",
                link: '/menu/secretarias/secretaria-da-educacao'
            },
            {
                label: "Secretaria de Obras",
                link: '/menu/secretarias/secretaria-de-obras'
            },
            {
                label: "Secretaria da Assistência Social",
                link: '/menu/secretarias/assistencia-social'
            },
            {
                label: "Secretaria do Meio Ambiente",
                link: '/menu/secretarias/secretaria-do-meio-ambiente'
            },
            {
                label: "Secretaria da Segurança Pública",
                link: '/menu/secretarias/secretaria-da-seguranca-publica'
            },
            {
                label: "Secretaria da Cultura",
                link: '/menu/secretarias/secretaria-da-cultura'
            },
            {
                label: "Secretaria dos Esportes",
                link: '/menu/secretarias/secretaria-de-esportes'
            },
            {
                label: "Secretaria do Transporte",
                link: '/menu/secretarias/secretaria-do-transporte'
            },
        ]
    },
    {
        label: "Serviços",
        icone: <MdMiscellaneousServices />,
        submenu: [
            {
                label: "Solicitar Corte e Poda de Árvores",
                link: '/menu/corte-e-poda-de-arvore'
            },
            {
                label: "Solicitar Coleta de Entulho",
                link: '/menu/coletar-entulho'
            },
            {
                label: "Solicitar Serviços Rurais",
                link: '/menu/servicos-rurais'
            },
            {
                label: "Solicitar Concerto Iluminação Pública",
                link: '/menu/iluminacao-publica'
            },
            {
                label: "Denunciar Possíveis Focos de Dengue",
                link: '/menu/focos-de-dengue'
            },
            {
                label: "Coleta de Lixo",
                link: '/menu/coleta-de-lixo'
            },
            {
                label: "Coleta de Lixo Reciclável",
                link: '/menu/coleta-de-lixo-reciclavel'
            },
            {
                label: "Pontos da Circular",
                link: '/menu/pontos-circular'
            },
            {
                label: "Hospitais e Postos",
                link: '/menu/hospitais-e-postos'
            },
            {
                label: "Instituições de Ensino",
                link: '/menu/instituicoes-de-ensino'
            },
            {
                label: "Galeria de Obras",
                link: '/'
            },
            {
                label: "Transparênica",
                link: '/'
            },
            {
                label: "Licitações",
                link: '/'
            },
            {
                label: "Legislação",
                link: '/'
            },
            {
                label: "Concursos",
                link: '/'
            },
        ]
    },
    {
        label: "Imprensa",
        icone: <FaNewspaper />,
        submenu: [
            {
                label: "Fale Conosco",
                link: 'tel:43988252886'
            },
            {
                label: "Fale com o Prefeito",
                link: 'tel:43988252886'
            },
            {
                label: "Ouvidoria",
                link: 'tel:43988252886'
            },
            {
                label: "Controladoria",
                link: 'tel:43988252886'
            },
        ]
    },
    {
        label: "Comércio",
        icone: <MdAddBusiness />,
        submenu: [
            {
                label: "Comércio Local",
                link: '/menu/comercio-local'
            },
            {
                label: "Cadastre seu Comércio ou Serviço",
                link: '/menu/cadastre-comercio-servico'
            },
        ]
    },
]

export { menu }