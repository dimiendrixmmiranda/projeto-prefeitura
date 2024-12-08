import { FaFacebookSquare, FaHeadphones, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import RedesSociais from "../redesSociais/RedesSociais";

export const listaDeRedesSociais: RedesSociais[] = [
    {
        icone: <FaFacebookSquare />,
        nome: "Facebook",
        link: '/'
    },
    {
        icone: <FaInstagramSquare />,
        nome: "Instagram",
        link: '/'
    },
    {
        icone: <MdEmail />,
        nome: "Email",
        link: '/'
    },
    {
        icone: <FaHeadphones />,
        nome: "SAC",
        link: '/'
    },
    {
        icone: <FaPhone />,
        nome: "Telefone",
        link: '/'
    },
    {
        icone: <IoLocation />,
        nome: "Endereço",
        link: '/'
    },
]