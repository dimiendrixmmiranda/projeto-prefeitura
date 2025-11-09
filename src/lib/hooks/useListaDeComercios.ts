'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, query, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import Comercio from "@/interfaces/Comercio";

export function useListaDeComercios() {
    const [comercios, setComercios] = useState<Comercio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "listaDeComercios"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: Comercio[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Comercio));
            setComercios(lista);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao buscar comercios:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
            const q = query(collection(db, "listaDeComercios"));
    
            const unsubscribe = onSnapshot(q, (snapshot) => {
                const lista: Comercio[] = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                } as Comercio));
    
                const listaOrdenada = lista.sort((a, b) => {
                    if (a.aprovado !== b.aprovado) {
                        return a.aprovado ? 1 : -1
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
    
                setComercios(listaOrdenada);
                setLoading(false)
            }, (error) => {
                console.error("Erro ao buscar solicitacaoCorteEPodaDeArvore:", error)
                setLoading(false)
            });
    
            return () => unsubscribe()
        }, [])

    return { comercios, loading };
}
