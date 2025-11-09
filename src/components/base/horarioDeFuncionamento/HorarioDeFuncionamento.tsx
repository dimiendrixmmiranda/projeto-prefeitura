"use client";
import Horario from "@/interfaces/Horario";
import { useState } from "react";
import StatusDeFuncionamento from "../statusFuncionamento/StatusFuncionamento";

interface HorariosProps {
    horarios: Horario[];
}

export default function HorarioDeFuncionamento({ horarios }: HorariosProps) {
    const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    const hoje = diasSemana[new Date().getDay()]
    const [diaSelecionado, setDiaSelecionado] = useState(hoje)

    const horarioAtual = horarios.find((h) => h.dia === diaSelecionado)

    return (
        <div className="w-full bg-white rounded-xl shadow-md p-2">
            <h3 className="font-bold text-lg mb-3 text-center">
                Horário de Funcionamento
            </h3>

            <select
                value={diaSelecionado}
                onChange={(e) => setDiaSelecionado(e.target.value)}
                className="w-full p-2 rounded-md border border-gray-300 text-sm mb-3 focus:ring-2 focus:ring-green-600"
            >
                {horarios.map((h, i) => (
                    <option key={i} value={h.dia}>
                        {h.dia}
                    </option>
                ))}
            </select>

            {horarioAtual ? (
                horarioAtual.aberto ? (
                    <div className="flex items-center gap-2">
                        <p className="text-center text-sm font-medium">
                            {horarioAtual.abertura} - {horarioAtual.fechamento} -
                        </p>
                        <StatusDeFuncionamento horarios={horarios}/>
                    </div>
                ) : (
                    <p className="text-center text-sm text-red-600 font-semibold">Fechado</p>
                )
            ) : (
                <p className="text-center text-sm text-gray-500">Horário não disponível</p>
            )}
        </div>
    );
}
