import { FaFacebookSquare, FaHeadphones, FaInstagramSquare } from "react-icons/fa";
import Rede from "@/interfaces/Rede";
import { MdEmail } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const redes: Rede[] = [
    {
        label: 'Facebook',
        icone: <FaFacebookSquare />,
        link: '/'
    },
    {
        label: 'Instagram',
        icone: <FaInstagramSquare />,
        link: '/'
    },
    {
        label: 'Email',
        icone: <MdEmail />,
        link: '/'
    },
    {
        label: 'Endereço',
        icone: <FaMagnifyingGlassLocation />,
        link: '/'
    },
    {
        label: 'FAQ',
        icone: <FaHeadphones />,
        link: '/'
    },
]

export { redes }