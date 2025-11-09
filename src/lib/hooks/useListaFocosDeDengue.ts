'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import ListaFocosDeDengue from "@/interfaces/ListaFocosDeDengue";

export function useListaFocosDeDengue() {
    const [listaFocosDeDengue, setListaFocosDeDengue] = useState<ListaFocosDeDengue[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "listaDenunciasFocoDeDengue"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: ListaFocosDeDengue[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as ListaFocosDeDengue));

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

            setListaFocosDeDengue(listaOrdenada);
            setLoading(false)
        }, (error) => {
            console.error("Erro ao buscar solicitacaoCorteEPodaDeArvore:", error)
            setLoading(false)
        });

        return () => unsubscribe()
    }, [])

    return { listaFocosDeDengue, loading };
}
