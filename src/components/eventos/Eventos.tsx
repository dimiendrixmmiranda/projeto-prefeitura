'use client'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core";
import ptBr from "@fullcalendar/core/locales/pt-br";
import { MdEvent } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { CgMathPlus } from "react-icons/cg";

export default function Eventos() {
    const [eventoAtual, setEventoAtual] = useState<EventInput | null>(null)
    const [visible, setVisible] = useState(false)

    const eventos: EventInput[] = [
        { id: "1", title: "Feira da Lua - Especial de Carnaval", start: "2025-03-10T10:00:00", imagem: '/wireframe.png' },
        { id: "2", title: "Evento 2", start: "2025-03-12T12:00:00", imagem: '/wireframe.png' },
        { id: "3", title: "Evento 3", start: "2025-03-15T14:00:00", imagem: '/wireframe.png' }
    ];
    return (
        <div className='bg-red'>
            <h2 className='bg-[--verde] mt-4 text-white w-full py-3 text-2xl font-black uppercase flex justify-center gap-1 items-center leading-4 mb-3 lg:mb-5 lg:p-3 lg:text-3xl xl:mb-6'>
                <MdEvent />
                Eventos
            </h2>
            <div className="flex flex-col p-4 gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 xl:gap-10">
                <div className='max-w-[500px] mx-auto w-full text-black'>
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        events={eventos}
                        editable={true}
                        selectable={true}
                        locale={ptBr}
                    />
                </div>
                <ul className="text-black flex flex-col gap-2 xl:col-start-2 lg:h-[430px] lg:overflow-y-auto xl:col-end-4 xl:h-[400px] xl:pr-3">
                    {
                        eventos.map((evento) => {
                            return (
                                <li key={evento.id} className="relative grid grid-cols-3 gap-2 border-2 border-[--verde] p-1 cursor-pointer lg:border-0 lg:pb-4 lg:border-b-2 lg:border-b-[--verde] xl:gap-4">
                                    <div className="relative w-full max-w-[150px] mx-auto h-[100px] overflow-hidden md:h-[170px] md:max-w-[400px] lg:h-[140px] xl:h-[170px]">
                                        <Image src={evento.imagem} alt="evn" fill className="object-cover"></Image>
                                    </div>
                                    <div className="col-start-2 col-end-4 flex flex-col">
                                        <h2 className="uppercase font-bold leading-5 md:text-xl xl:text-2xl">{evento.title}</h2>
                                        <p className="line-clamp-2 text-xs sm:text-sm md:text-lg md:leading-6 xl:line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum nisi in nulla vulputate, quis varius dolor interdum. Pellentesque vel elit scelerisque elit imperdiet congue a non leo. Etiam eros magna, volutpat et nunc nec, efficitur consequat magna. Vivamus ex massa, tristique eget dui eu, pulvinar venenatis enim.</p>
                                        <div className="mt-auto">
                                            <p className="line-clamp-1 text-sm bg-[--verde] text-white text-center md:text-xl md:line-clamp-2">15/03, as 18:00 Próximo ao Ginásio de esportes</p>
                                        </div>
                                    </div>
                                    <button className="w-6 h-6 flex bg-[--verde] text-white justify-center items-center absolute top-1 right-1" onClick={() => {
                                        setEventoAtual(evento)
                                        setVisible(true)
                                    }}><CgMathPlus /></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            {
                eventoAtual != null ? (
                    <Dialog
                        visible={visible}
                        className='w-[90%] h-[90%] sm:h-[85%] md:h-[75%] lg:w-[70%] xl:w-[35%]'
                        onHide={() => setVisible(false)}
                    >
                        <div className="flex flex-col gap-4 items-center text-[--verde]">
                            <h2>Um evento bem legal</h2>
                        </div>
                    </Dialog>
                ) : ''
            }
        </div>
    );
}