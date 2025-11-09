'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import PontoTuristico from "@/interfaces/PontoTuristico";

export function usePontosTuristicos() {
    const [pontosTuristicos, setPontosTuristicos] = useState<PontoTuristico[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const q = query(collection(db, "listaDePontosTuristicos"), orderBy("dataCriacao", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const lista: PontoTuristico[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as PontoTuristico));
            setPontosTuristicos(lista);
            setLoading(false);
        }, (error) => {
            console.error("Erro ao buscar pontosTuristicos:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { pontosTuristicos, loading };
}
