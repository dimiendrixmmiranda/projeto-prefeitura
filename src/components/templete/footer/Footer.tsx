import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbMapShare } from "react-icons/tb";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoChatboxEllipses } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="bg-[--verde] flex flex-col mt-8 md:flex-row md:flex-wrap lg:mt-14 xl:mt-10 pb-3 rodape">
            <h3 className="text-center leading-6 text-xl font-bold w-full p-2 py-3 lg:text-2xl bg-[#236D45]">Horário de Atendimento: Segunda a Sexta, das 7h30 as 11h30 e das 13h as 17h</h3>
            <div className="mx-auto md:mx-0 md:w-full p-2 flex items-center">
                <Link href={'/'} className="flex items-center">
                    <img src="/logo-prefeitura.png" alt="" className="w-14 py-2 px-1 md:h-fit lg:w-[70px]" />
                    <div className="flex flex-col justify-center gap-2 md:h-fit">
                        <h2 className="leading-3 text-[20px] font-medium lg:text-[24px] xl:text-[30px]">Prefeitura Municipal</h2>
                        <h1 className="leading-5 text-[24px] font-black lg:text-[28px] lg:leading-7 xl:text-[40px] xl:mt-2">Joaquim Távora - PR</h1>
                    </div>
                </Link>
            </div>
            <div className="w-[95%] mx-auto flex flex-col md:mt-4" style={{gridRow:'2/4', gridColumn:'2/3'}}>
                <h3 className="text-center font-bold leading-5 text-lg">Rua:João Rodrigues de Almeida nº 387 - São Lucas - 86455-000 - JOAQUIM TAVORA - Paraná</h3>
                <div className="w-full h-full overflow-hidden max-h-[300px] mt-4 flex justify-center items-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.8725457271751!2d-49.925988581004994!3d-23.489737328138713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1d1f754e05967%3A0xbb434af845d4ca8e!2sPrefeitura%20de%20Joaquim%20T%C3%A1vora!5e0!3m2!1spt-BR!2sbr!4v1726921380873!5m2!1spt-BR!2sbr" width="600" height="450" style={{ border: '0' }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <Link href={'/'}
                    className="bg-white text-[--verde] uppercase self-center rounded-md mt-3 p-2 w-fit flex items-center justify-center font-bold gap-1 whitespace-nowrap cursor-pointer"><TbMapShare /> Me leve até lá!</Link>
            </div>
            <div className="flex flex-col">
                <ul className="w-[95%] mx-auto mt-3 flex flex-col gap-2">
                    <li className="w-full flex">
                        <Link href={'tel:4335591122'} className="justify-center items-center font-bold gap-1 lg:text-xl" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                            <FaPhoneAlt className="text-lg" />
                            <span>Telefone: (43) 3559-1122</span>
                        </Link>
                    </li>
                    <li className="w-full flex">
                        <Link href={'tel:08006432560'} className="justify-center items-center font-bold gap-1 lg:text-xl" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                            <FaHeadphones className="text-lg" />
                            <p>Ouvidoria Geral: 0800 643 2560</p>
                        </Link>
                    </li>
                    <li className="w-full flex">
                        <Link href={'mailto:portaltransparencia@joaquimtavora.pr.gov.br'} className="justify-center items-center font-bold gap-1 lg:text-xl" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                            <MdEmail className="text-lg" />
                            <p className="break-all leading-4">Email:portaltransparencia@joaquimtavora.pr.gov.br</p>
                        </Link>
                    </li>
                </ul>
                <div className='flex justify-around h-16 w-full xl:w-[500px] xl:h-20'>
                    <ul className="flex w-full items-end gap-2 lista-redes-sociais">
                        <li className="flex-1 w-full flex justify-center items-center mb-3" data-rede="facebook">
                            <Link href={'/'}><FaFacebookSquare className="text-2xl xl:text-4xl" /></Link>
                        </li>
                        <li className="flex-1 w-full flex justify-center items-center mb-3" data-rede="instagram">
                            <Link href={'/'}><AiFillInstagram className="text-2xl xl:text-4xl" /></Link>
                        </li>
                        <li className="flex-1 w-full flex justify-center items-center mb-3" data-rede="Email">
                            <Link href={'/'}><MdEmail className="text-2xl xl:text-4xl" /></Link>
                        </li>
                        <li className="flex-1 w-full flex justify-center items-center mb-3" data-rede="SAC">
                            <Link href={'/'}><IoChatboxEllipses className="text-2xl xl:text-4xl" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}