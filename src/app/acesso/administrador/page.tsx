'use client'
import Template from "@/components/template/Template"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import useAuth from "@/lib/hooks/useAuth"
import { FaNewspaper, FaTools, FaCalendarAlt, FaMapMarkedAlt, FaStore, FaTree, FaTrashAlt, FaTractor, FaLightbulb } from "react-icons/fa";
import { FaMosquito } from "react-icons/fa6";
import { RiStore3Fill } from "react-icons/ri";

export default function Page() {
    const { logout } = useAuth()

    const menuAdministrador = [
        {
            icone: <FaNewspaper style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Notícia",
            descricao: "Publique novas notícias e mantenha os cidadãos informados sobre tudo o que acontece na cidade.",
            link: "/acesso/administrador/adicionarNoticia"
        },
        {
            icone: <FaTools style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Obra",
            descricao: "Cadastre obras em andamento ou concluídas, destacando os avanços e melhorias da administração.",
            link: "/acesso/administrador/adicionarObra"
        },
        {
            icone: <FaCalendarAlt style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Evento",
            descricao: "Divulgue eventos oficiais, culturais e esportivos para engajar a população e promover a participação.",
            link: "/acesso/administrador/adicionarEvento"
        },
        {
            icone: <FaMapMarkedAlt style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Ponto Turístico",
            descricao: "Adicione novos pontos turísticos e fortaleça o turismo local com informações e imagens dos locais.",
            link: "/acesso/administrador/adicionarPontoTuristico"
        },
        {
            icone: <FaStore style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Adicionar Seu Comércio",
            descricao: "Cadastre seu comércio e destaque seu negócio em nossa cidade!",
            link: "/acesso/administrador/adicionarPontoTuristico"
        },
        {
            icone: <FaTree style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitações de Corte e Poda de Árvore",
            descricao: "Peça o corte ou a poda de árvores que estejam causando riscos ou obstruções em vias públicas.",
            link: "/acesso/administrador/solicitacaoCortePodaArvore"
        },
        {
            icone: <FaTrashAlt style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitações de Coleta de Entulho",
            descricao: "Solicite a retirada de entulhos, restos de obras ou materiais volumosos da sua região.",
            link: "/acesso/administrador/solicitacaoColetaDeEntulho"
        },
        {
            icone: <FaTractor style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitações de Serviços Rurais",
            descricao: "Peça serviços voltados à zona rural, como patrolamento, cascalhamento e melhorias em estradas.",
            link: "/acesso/administrador/solicitacaoServicosRurais"
        },
        {
            icone: <FaLightbulb style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitações de Concerto de Iluminação Pública",
            descricao: "Informe pontos de iluminação pública com falhas, lâmpadas queimadas ou piscando.",
            link: "/acesso/administrador/solicitacaoConcertoIluminacaoPublica"
        },
        {
            icone: <RiStore3Fill style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Solicitação para Validação de Comércio",
            descricao: "Envie sua solicitação para validar o cadastro do seu comércio no sistema municipal.",
            link: "/acesso/administrador/solicitacaoValidacaoComercio"
        },
        {
            icone: <FaMosquito style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.5))" }} />,
            titulo: "Denúncias de Foco de Dengue",
            descricao: "Comunique locais com possíveis focos do mosquito da dengue e ajude a combater o Aedes aegypti.",
            link: "/acesso/administrador/denunciasDengue"
        }
    ]

    return (
        <Template>
            <div className="p-4 flex flex-col gap-4 lg:min-h-[75vh] lg:p-8">
                <h2 className="text-2xl font-black text-center text-verde-escuro md:text-4xl lg:text-5xl xl:text-6xl">Menu de Administrador</h2>
                <div className="mx-auto max-w-[1440px]">
                    <HoverEffect items={menuAdministrador} className="md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
                </div>
                <button onClick={() => logout && logout('/')} className="font-bold text-2xl bg-red-600 max-w-[500px] w-full text-white py-2 mx-auto">Sair</button>
            </div>
        </Template>
    )
}