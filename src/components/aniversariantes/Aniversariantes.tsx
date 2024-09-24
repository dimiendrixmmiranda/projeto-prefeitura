'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { aniversariantes } from '@/data/dados';
export default function Aniversariantes() {
    const dia = new Date().getDate() <= 9 ? `0${new Date().getDate()}`.toString() : new Date().getDate().toString()
    const mes = new Date().getMonth() + 1 <= 9 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1
    const ano = new Date().getFullYear()
    const data = `${dia}-${mes}`

    const aniversariantesDoDia = aniversariantes.filter(aniversariante => aniversariante.dataNascimento === data)

    return (
        <div className="aniversariantes lg:w-[50%]">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    aniversariantesDoDia.length > 0 ? (
                        aniversariantesDoDia.map((aniversariante, i) => (
                            <SwiperSlide key={i}>
                                <div className='w-full flex items-center gap-2 p-2 bg-[--verde-escuro] h-40 relative md:h-44 xl:h-48'>
                                    <div className='bg-white w-[130px] h-[130px] rounded-full p-1'>
                                        <img src={aniversariante.urlImg} alt="" className='w-full' />
                                    </div>
                                    <div className='flex flex-col justify-evenly max-w-[50%] h-full sm:max-w-[60%] md:max-w-[80%] lg:max-w-[70%]'>
                                        <h2 className='font-black leading-4 text-[.9em] md:text-[1.4em] md:leading-7 lg:text-[1.2em]'>Hoje quem apaga as velinhas é o nosso querido funcionário {aniversariante.nome}! Obrigado pelos seus {aniversariante.anosDeServico} anos de serviço</h2>
                                        <h3 className='font-medium leading-4 text-[.7em] md:text-[1em] md:leading-5 lg:text-[.9em]'>A Prefeitura Municipal de Joaquim Távora te deseja muita SÁUDE e PROSPERIDADE!</h3>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div className='w-full bg-zinc-400 h-40 relative md:h-44 xl:h-48' style={{ boxShadow: '2px 2px 4px black' }}>
                                <h2 className='absolute top-[50%] left-[50%] whitespace-nowrap text-lg font-black sm:text-2xl md:text-3xl' style={{ transform: 'translate(-50%, -50%)' }}>Sem Aniversariantes Hoje!</h2>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper >
        </div >
    )
}