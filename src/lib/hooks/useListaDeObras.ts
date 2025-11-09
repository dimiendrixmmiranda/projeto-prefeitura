'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import Obra from "@/interfaces/Obra";

export function useListaDeObras() {
    const [obras, setObras] = useState<Obra[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "listaDeObras"), orderBy("dataCriacao", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: Obra[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as Obra));
            setObras(lista);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao buscar obras:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { obras, loading };
}
