import { FaBirthdayCake } from "react-icons/fa";
import TituloSecao from "../base/tituloSecao/TituloSecao";
import Festa from "../festa/Festa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Aniversarios() {
    const funcionariosPublicos = [
        { id: 1, nome: "Maria da Silva", cargo: "Professora", setor: "Educação", nascimento: '04/11/2025' },
        { id: 2, nome: "João Pereira", cargo: "Agente Administrativo", setor: "Administração", nascimento: '04/11/2025' },
        { id: 3, nome: "Carla Souza", cargo: "Enfermeira", setor: "Saúde", nascimento: '04/11/2025' },
        { id: 4, nome: "Ricardo Almeida", cargo: "Fiscal de Obras", setor: "Infraestrutura", nascimento: '06/11/2025' },
        { id: 5, nome: "Ana Oliveira", cargo: "Assistente Social", setor: "Assistência Social", nascimento: '05/11/2025' }
    ]

    const hoje = new Date()
    const diaHoje = hoje.getDate().toString().padStart(2, '0')
    const mesHoje = (hoje.getMonth() + 1).toString().padStart(2, '0')

    const aniversariantesHoje = funcionariosPublicos.filter(func => {
        const [dia, mes] = func.nascimento.split('/')
        return dia === diaHoje && mes === mesHoje
    })

    return (
        <div className="p-4 flex flex-col gap-4 xl:p-0">
            <TituloSecao icone={<FaBirthdayCake />} texto="Aniversários" />
            <div className="h-full w-full bg-verde-escuro p-4 text-white flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-center">
                    Confira a lista dos aniversariantes de hoje:
                </h3>

                {aniversariantesHoje.length > 0 ? (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        loop={aniversariantesHoje.length > 1}
                        className="w-full h-full"
                    >
                        {aniversariantesHoje.map((funcionario) => (
                            <SwiperSlide key={funcionario.id} className="w-full h-full">
                                <div className="w-full h-[640px] relative bg-verde-claro sm:h-[580px] md:h-[300px] xl:h-full">
                                    <Festa />
                                    <div
                                        className="absolute top-[50%] left-[50%] w-full flex flex-col md:grid md:grid-cols-3 xl:flex"
                                        style={{ transform: 'translate(-50%,-50%)' }}
                                    >
                                        <div className="w-[150px] h-[150px] bg-green-500 rounded-full mx-auto mt-4 sm:w-[190px] sm:h-[190px] xl:h-[170px] xl:w-[170px]" />
                                        <p className="p-4 font-normal text-lg text-center sm:text-xl md:col-start-2 md:col-end-4 md:text-lg lg:text-xl">
                                            Hoje celebramos não apenas mais um ano de vida, mas também o compromisso, a dedicação e o trabalho que fazem toda a diferença no serviço público.
                                            Que esta data traga alegria, reconhecimento e muitas conquistas pessoais e profissionais.
                                            Parabéns a <b>{funcionario.nome}</b>, que com seu empenho contribui para um serviço público cada vez melhor!
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="w-full relative bg-verde-claro h-full flex justify-center items-center">
                        <h2
                            className="text-center uppercase font-bold py-2 xl:text-3xl"
                            style={{ textShadow: '1px 1px 2px black' }}
                        >
                            Nenhum aniversariante hoje!
                        </h2>
                    </div>
                )}
            </div>
        </div>
    )
}