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
                                <div className='w-full bg-[--verde-escuro] h-40 relative md:h-44 xl:h-48'>
                                    <div className='w-[130px] h-[130px] bg-zinc-300 absolute left-2 top-[50%] md:w-[150px] md:h-[150px] xl:w-[175px] xl:h-[175px]' style={{ transform: 'translate(0, -50%)', borderRadius: '100%' }}>
                                        <img src={aniversariante.urlImg} alt="Imagem do aniversariante" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-[50%] h-[95%] absolute right-2 top-[50%] sm:w-[60%] sm:py-3 md:py-4 md:w-[75%] lg:w-[65%] lg:py-2 xl:w-[70%]' style={{ transform: 'translate(0,-50%)' }}>
                                        <div className='w-full h-full relative flex flex-col justify-between'>
                                            <h2 className='leading-5 font-black text-center text-[1em] md:text-[1.5em] md:leading-7 lg:text-[1.3em] xl:text-[1.7em] xl:leading-8'>
                                                Hoje quem apaga as velinhas é o servidor(a) {aniversariante.nome.toUpperCase()}!
                                            </h2>
                                            <h3 className='font-semibold leading-[14px] text-[.7em] text-center md:text-[1.2em] md:leading-5 lg:text-[.95em] xl:text-[1.2em] xl:leading-6'>Obrigado pelos seus {aniversariante.anosDeServico} anos de serviço. Muitas felicidades e muitos anos de vida!</h3>
                                            <h4 className='leading-3 text-[.7em] text-center md:text-[1em] lg:text-[.75em] xl:text-[.9em]'>ATT: Prefeitura Municipal de Joaquim Távora</h4>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    ) : (
                        <SwiperSlide>
                            <div className='w-full bg-zinc-400 h-40 relative md:h-44 xl:h-48'>
                                <h2 className='absolute top-[50%] left-[50%] whitespace-nowrap text-lg font-black sm:text-2xl md:text-3xl' style={{transform: 'translate(-50%, -50%)'}}>Sem Aniversariantes Hoje!</h2>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper >
        </div >
    )
}