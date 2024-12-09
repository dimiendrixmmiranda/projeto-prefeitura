import { useState } from "react";
import { Paginator } from "primereact/paginator";
import CardNoticia from "../cardNoticia/CardNoticia";
import { listaDeNoticias } from "@/core/constants/listaDeNoticias";

type PaginatorPageChangeEvent = {
    first: number; // O índice do primeiro item da nova página
    rows: number;  // O número de itens por página
    page: number;  // O índice da nova página
    pageCount: number; // O número total de páginas
};

export default function ListaDeNoticias() {
    const [first, setFirst] = useState(0); // Índice inicial dos itens na página
    const [rows, setRows] = useState(4); // Número de itens por página

    const onPageChange = (event: PaginatorPageChangeEvent) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    const noticiasExibidas = listaDeNoticias.slice(4).slice(first, first + rows);

    return (
        <div>
            <ul className="flex flex-col mt-2 gap-1 lg:max-w-[900px] lg:h-[870px] lg:mx-auto lg:gap-4 xl:mt-6">
                {noticiasExibidas.map((noticia, index) => (
                    <CardNoticia key={index} noticia={noticia}></CardNoticia>
                ))}
            </ul>
            <Paginator
                first={first}
                rows={rows}
                totalRecords={listaDeNoticias.length}
                rowsPerPageOptions={[4, 8, 12]} // Opcional: opções para alterar o número de itens por página
                onPageChange={onPageChange}
                pageLinkSize={2}
                className="mt-4 border border-[--verde]"
            />
        </div>
    );
}
