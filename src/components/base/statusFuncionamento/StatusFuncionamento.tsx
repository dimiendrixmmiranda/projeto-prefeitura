"use client";
import Horario from "@/interfaces/Horario";
import { useEffect, useState } from "react";

interface Props {
    horarios: Horario[];
}

export default function StatusDeFuncionamento({ horarios }: Props) {
    const [abertoAgora, setAbertoAgora] = useState<boolean | null>(null);

    useEffect(() => {
        const verificarAberto = () => {
            const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
            const agora = new Date();
            const diaAtual = diasSemana[agora.getDay()];
            const horarioHoje = horarios.find((h) => h.dia === diaAtual);

            if (!horarioHoje || !horarioHoje.aberto) {
                setAbertoAgora(false);
                return;
            }

            const [horaAbertura, minutoAbertura] = horarioHoje.abertura.split(":").map(Number);
            const [horaFechamento, minutoFechamento] = horarioHoje.fechamento.split(":").map(Number);

            const horaAtual = agora.getHours();
            const minutoAtual = agora.getMinutes();

            const minutosAtuais = horaAtual * 60 + minutoAtual;
            const minutosAbertura = horaAbertura * 60 + minutoAbertura;
            const minutosFechamento = horaFechamento * 60 + minutoFechamento;

            // aberto se estiver dentro do intervalo
            setAbertoAgora(minutosAtuais >= minutosAbertura && minutosAtuais <= minutosFechamento);
        };

        verificarAberto();

        // atualiza a cada minuto para refletir mudanças automáticas
        const interval = setInterval(verificarAberto, 60000);
        return () => clearInterval(interval);
    }, [horarios]);

    if (abertoAgora === null) return null;

    return (
        <>
            {abertoAgora ? (
                <p className="text-green-600 font-semibold leading-5">Aberto agora</p>
            ) : (
                <p className="text-red-600 font-semibold leading-5">Fechado no momento</p>
            )}
        </>
    )
}