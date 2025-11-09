'use client'

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import Noticia from "@/interfaces/Noticia";

export function useListaDeNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 🔽 Ordena pela data de forma decrescente (mais recente primeiro)
        const q = query(
            collection(db, "listaDeNoticias"),
            orderBy("data", "desc")
        );

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const lista: Noticia[] = snapshot.docs.map(
                    (doc) =>
                    ({
                        id: doc.id,
                        ...doc.data(),
                    } as Noticia)
                );
                setNoticias(lista);
                setLoading(false);
            },
            (error) => {
                console.error("Erro ao buscar noticias:", error);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    return { noticias, loading };
}
