'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import { SolicitacaoCortePodaArvore } from "@/interfaces/SolicitacaoCortePodaArvore";

export function useSolicitacoesCortePodaDeArvores() {
    const [solicitacaoCorteEPodaDeArvore, setSolicitacaoCorteEPodaDeArvore] = useState<SolicitacaoCortePodaArvore[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const q = query(collection(db, "listaSolicitacoesCorteEPodaDeArvores"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: SolicitacaoCortePodaArvore[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as SolicitacaoCortePodaArvore));

            const listaOrdenada = lista.sort((a, b) => {
                if (a.situacao !== b.situacao) {
                    return a.situacao ? 1 : -1
                }
                const getDataMs = (data: string | Timestamp | undefined): number => {
                    if (!data) return 0
                    if (typeof data === "string") {
                        return new Date(data).getTime()
                    }
                    if (typeof data === "object" && "seconds" in data) {
                        return data.seconds * 1000
                    }
                    return 0
                };

                return getDataMs(b.data) - getDataMs(a.data);
            });

            setSolicitacaoCorteEPodaDeArvore(listaOrdenada);
            setLoading(false)
        }, (error) => {
            console.error("Erro ao buscar solicitacaoCorteEPodaDeArvore:", error)
            setLoading(false)
        });

        return () => unsubscribe()
    }, [])


    return { solicitacaoCorteEPodaDeArvore, loading }
}
