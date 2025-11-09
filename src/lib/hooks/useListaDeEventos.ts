'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import Evento from "@/interfaces/Evento";

export function useListaDeEventos() {
    const [eventos, setEventos] = useState<Evento[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "listaDeEventos"))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: Evento[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Evento));
            setEventos(lista);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao buscar eventos:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { eventos, loading };
}
