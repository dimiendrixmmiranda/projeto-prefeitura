import Menu from "@/interfaces/Menu";

// Ícones variados
import { RiGalleryFill, RiSchoolFill, RiCustomerService2Fill } from "react-icons/ri";
import { FaTrashAlt, FaRecycle, FaBusAlt, FaHospitalAlt, FaHandshake, FaStore, FaUserTie } from "react-icons/fa";
import { MdOutlineLocalLibrary, MdOutlineGavel, MdContactMail } from "react-icons/md";
import { GiTreeBranch, GiBrickWall } from "react-icons/gi";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa6";

const menuAcessoRapido: Menu[] = [
    {
        label: 'Conheça o Prefeito',
        icone: <FaUserTie />,
        link: '/menu/conheca-o-prefeito'
    },
    {
        label: 'Galeria de Prefeitos',
        icone: <RiGalleryFill />,
        link: '/menu/galeria-de-prefeitos'
    },
    {
        label: 'Aspectos Educacionais',
        icone: <MdOutlineLocalLibrary />,
        link: '/menu/aspectos-educacionais'
    },
    {
        label: 'Símbolos Municipais',
        icone: <BsFillBuildingFill />,
        link: '/menu/simbolos-municipais'
    },
    {
        label: 'Corte e Poda de Árvores',
        icone: <GiTreeBranch />,
        link: '/'
    },
    {
        label: 'Solicitar Coleta de Entulho',
        icone: <FaTrashAlt />,
        link: '/'
    },
    {
        label: 'Coleta de Lixo',
        icone: <FaTrashAlt />,
        link: '/menu/coleta-de-lixo'
    },
    {
        label: 'Coleta de Lixo Reciclavel',
        icone: <FaRecycle />,
        link: '/menu/coleta-de-lixo-reciclavel'
    },
    {
        label: 'Pontos da Circular',
        icone: <FaBusAlt />,
        link: '/menu/pontos-circular'
    },
    {
        label: 'Instituições de Ensino',
        icone: <RiSchoolFill />,
        link: '/menu/instituicoes-de-ensino'
    },
    {
        label: 'Hospitais e Postos',
        icone: <FaHospitalAlt />,
        link: '/menu/hospitais-e-postos'
    },
    {
        label: 'Galeria de Obras',
        icone: <GiBrickWall />,
        link: '/'
    },
    {
        label: 'Transparência',
        icone: <FaRegEye />,
        link: '/'
    },
    {
        label: 'Licitações',
        icone: <MdOutlineGavel />,
        link: '/'
    },
    {
        label: 'Fale Conosco',
        icone: <MdContactMail />,
        link: 'tel:43988252886'
    },
    {
        label: 'Fale com o Prefeito',
        icone: <RiCustomerService2Fill />,
        link: 'tel:43988252886'
    },
    {
        label: 'Comércio Local',
        icone: <FaStore />,
        link: '/menu/comercio-local'
    },
    {
        label: 'Cadastre seu Comércio',
        icone: <FaHandshake />,
        link: '/menu/cadastre-comercio-servico'
    },
];

export default menuAcessoRapido;
