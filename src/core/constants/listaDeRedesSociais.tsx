import { FaFacebookSquare, FaHeadphones, FaInstagramSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import RedesSociais from "../redesSociais/RedesSociais";

export const listaDeRedesSociais: RedesSociais[] = [
    {
        icone: <FaFacebookSquare />,
        nome: "Facebook",
        link: 'https://www.facebook.com/prefeituraJT/?locale=sw_KE'
    },
    {
        icone: <FaInstagramSquare />,
        nome: "Instagram",
        link: 'https://www.instagram.com/prefeituradejoaquimtavora/'
    },
    {
        icone: <MdEmail />,
        nome: "Email",
        link: '/'
    },
    {
        icone: <FaHeadphones />,
        nome: "SAC",
        link: 'tel:+08006432560/'
    },
    {
        icone: <FaPhone />,
        nome: "Telefone",
        link: 'tel:+4335591122'
    },
    {
        icone: <IoLocation />,
        nome: "Endereço",
        link: 'https://maps.app.goo.gl/Y6kJUGmzotebgNBY9'
    },
]