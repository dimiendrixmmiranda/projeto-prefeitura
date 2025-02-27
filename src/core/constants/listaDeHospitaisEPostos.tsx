import { FaFacebookSquare, FaInstagramSquare, FaPhone } from "react-icons/fa";
import HospitalEPosto from "../hospitalEPosto/HospitalEPosto";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

const listaDeHospitaisEPostos: HospitalEPosto[] =[
    {
        bairro:'Centro',
        endereco: 'Rua Tenente Ubirajara de Souza, 633',
        imagem: '/wireframe.png',
        texto: 'Hospital Comunitário Doutor Linconl Graça',
        latitude: -23.501693954902528,
        longitude: -49.9245195553529,
        telefone: '(43)3559-1421',
        icone: '/icones/hospital.png',
        redesSociais: [
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
    },
]

export {listaDeHospitaisEPostos}