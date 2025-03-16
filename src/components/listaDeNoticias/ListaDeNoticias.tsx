import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Paginator } from "primereact/paginator";
import CardNoticia from "../cardNoticia/CardNoticia";
import { db } from "@/lib/firebase";
import Noticia from "@/core/noticia/Noticia";

type PaginatorPageChangeEvent = {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
};

export default function ListaDeNoticias() {
    const [noticias, setNoticias] = useState<Noticia[]>([]);
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(4);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "noticias"));
                const noticiasArray: Noticia[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id || null,
                        titulo: data.titulo || "Sem título",
                        descricao: data.descricao || "Sem descrição",
                        autor: data.autor || 'Sem Autor',
                        imagem: data.imagem || "",
                        materia: data.materia || "",
                        data: data.data || "",
                    };
                })
                // Ordenar as notícias por data
                noticiasArray.sort((a, b) => {
                    const dateA = new Date(a.data).getTime();
                    const dateB = new Date(b.data).getTime();
                    return dateB - dateA; // Ordenar de forma decrescente (mais recente primeiro)
                });

                setNoticias(noticiasArray)
            } catch (error) {
                console.error("Erro ao buscar notícias:", error);
            }
        }

        fetchNoticias();
    }, []);

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const noticiasExibidas = noticias.slice(4).slice(first, first + rows);

    return (
        <div>
            <ul className="flex flex-col mt-2 gap-1 lg:max-w-[900px] lg:h-[900px] lg:mx-auto lg:gap-4 xl:mt-6">
                {noticiasExibidas.map((noticia) => (
                    <CardNoticia key={noticia.id || noticia.titulo} noticia={noticia} />
                ))}
            </ul>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={noticias.length}
                rowsPerPageOptions={[4, 8, 12]}
                onPageChange={onPageChange}
                pageLinkSize={2}
                className="mt-4 border border-[--verde]"
            />
        </div>
    );
}
