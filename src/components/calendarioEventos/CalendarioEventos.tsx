"use client";

import { useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import ptBrLocale from "@fullcalendar/core/locales/pt-br";
import TituloSecao from "../base/tituloSecao/TituloSecao";
import { FaCalendarDay } from "react-icons/fa";
import { useListaDeEventos } from "@/lib/hooks/useListaDeEventos";
import BotaoNavegar from "../base/botaoNavegar/BotaoNavegar";
import { FaLocationCrosshairs } from "react-icons/fa6";
import Evento from "@/interfaces/Evento";

interface EventoSelecionado {
    title: string;
    start: string | Date | null;
    tipo: Evento["tipo"];
    descricao: string;
    local: string;
    latitude: number;
    longitude: number;
}

interface EventoCalendar {
    id: string;
    title: string;
    start: string | Date;
    backgroundColor: string;
    borderColor: string;
    extendedProps: {
        tipo: Evento["tipo"];
        descricao: string;
        local: string;
        latitude: number;
        longitude: number;
    };
}


export default function CalendarioComEventos() {
    const [eventoSelecionado, setEventoSelecionado] = useState<EventoSelecionado | null>(null);
    const { eventos } = useListaDeEventos();

    const getCorPorTipo = (tipo: string) => {
        switch (tipo) {
            case "nacional":
                return "#e63946";
            case "municipal":
                return "#4361ee";
            case "evento":
                return "#2a9d8f";
            case "ponto-facultativo":
                return "#FF740A";
            default:
                return "#6c757d";
        }
    }

    const eventosCalendar: EventoCalendar[] = useMemo(
        () =>
            eventos.map((e: Evento) => ({
                id: e.id,
                title: e.titulo,
                start: e.comeco,
                backgroundColor: getCorPorTipo(e.tipo),
                borderColor: getCorPorTipo(e.tipo),
                extendedProps: {
                    tipo: e.tipo,
                    descricao: e.descricao,
                    local: e.local ?? "Não informado",
                    latitude: Number(e.latitude) || 0,
                    longitude: Number(e.longitude) || 0,
                },
            })),
        [eventos]
    )

    return (
        <div>
            <TituloSecao icone={<FaCalendarDay />} texto="Eventos" />
            <div className="flex flex-col lg:grid lg:grid-cols-[500px_1fr] gap-4 p-4 lg:gap-8">
                <div className="max-w-[500px] mx-auto">
                    <FullCalendar
                        plugins={[dayGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        locale={ptBrLocale}
                        height="auto"
                        dayMaxEventRows={1}
                        events={eventosCalendar}
                        eventClick={(info) => {
                            const { title, start, extendedProps } = info.event;
                            setEventoSelecionado({
                                title,
                                start: start ?? null,
                                tipo: extendedProps.tipo,
                                descricao: extendedProps.descricao,
                                local: extendedProps.local,
                                latitude: extendedProps.latitude,
                                longitude: extendedProps.longitude,
                            });
                        }}
                    />
                </div>
                <div className="border rounded-xl p-4 bg-white shadow">
                    {eventoSelecionado ? (
                        <div className="flex flex-col h-full">
                            <h2 className="text-xl font-bold mb-2">{eventoSelecionado.title}</h2>
                            <p className="text-sm text-gray-600 mb-1">
                                Tipo:{" "}
                                <span
                                    className="font-semibold capitalize"
                                    style={{ color: getCorPorTipo(eventoSelecionado.tipo) }}
                                >
                                    {eventoSelecionado.tipo}
                                </span>
                            </p>
                            <p className="text-sm text-gray-700 mb-2">
                                Data:{" "}
                                {eventoSelecionado.start
                                    ? new Date(eventoSelecionado.start).toLocaleDateString("pt-BR")
                                    : "Data não informada"}
                            </p>
                            <p className="text-gray-800">{eventoSelecionado.descricao}</p>
                            <div className="mt-auto flex flex-col gap-1">
                                <h2 className="font-bold text-lg">Local: {eventoSelecionado.local}</h2>
                                <BotaoNavegar label="Me Leve até Lá!" icone={<FaLocationCrosshairs />} link="/" />
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm">
                            Selecione um evento no calendário.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
