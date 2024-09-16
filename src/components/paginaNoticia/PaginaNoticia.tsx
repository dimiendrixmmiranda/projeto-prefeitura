import noticias from "@/data/noticias";
import { notFound } from "next/navigation";

export default function NoticiaPage({ params }: { params: { slug: string } }) {
    const id = parseInt(params.slug.split('-').pop()!, 10); // Extrai o id do final do slug
    const noticia = noticias.find(noticia => noticia.id === id);

    if (!noticia) {
        notFound();
    }

    return (
        <div>
            <h1>{noticia.titulo}</h1>
            {/* Resto do conteúdo */}
        </div>
    );
}
