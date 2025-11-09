"use client";

import { useParams } from "next/navigation";
import Template from "@/components/template/Template";
import { useListaDeNoticias } from "@/lib/hooks/useListaDeNoticias";
import { useEffect, useState } from "react";
import Noticia from "@/interfaces/Noticia";
import { FaArrowLeft, FaExclamationCircle } from "react-icons/fa";
import BotaoNavegar from "@/components/base/botaoNavegar/BotaoNavegar";
import CardNoticia from "@/components/base/cardNoticia/cardNoticia";
import { Image } from 'primereact/image';
import useAuth from "@/lib/hooks/useAuth";
import { arrayUnion, doc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/Firebase";
import Link from "next/link";
import { RiQuestionAnswerFill } from "react-icons/ri";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

export default function Page() {
    const { usuario } = useAuth();
    const params = useParams();
    const slug = params.slug;

    const { noticias } = useListaDeNoticias();

    // Extrair id da notícia a partir do slug
    const match = slug?.toString().match(/-([^-\s]+)$/);
    const id = match ? match[1] : null;

    const [noticiaAtual, setNoticiaAtual] = useState<Noticia | null>(null);
    const [outrasNoticias, setOutrasNoticias] = useState<Noticia[]>([]);

    const [comentario, setComentario] = useState('');
    const [responderComentario, setResponderComentario] = useState('');
    const [comentarioIndexRespondido, setComentarioIndexRespondido] = useState<number | null>(null);
    const [visibleResponderComentario, setVisibleResponderComentario] = useState<'visivel' | 'nao-visivel'>('nao-visivel');

    // Atualizar noticiaAtual quando a lista de noticias mudar
    useEffect(() => {
        if (!id) return;
        const noticia = noticias.find(n => n.id === id);
        if (noticia) setNoticiaAtual(noticia);
    }, [noticias, id]);

    // Atualizar lista de outras noticias (exceto a atual)
    useEffect(() => {
        if (!noticiaAtual) return;
        const noticiasSemAtual = noticias.filter(n => n.id !== noticiaAtual.id);
        const ultimasCinco = noticiasSemAtual.slice(-4).reverse();
        setOutrasNoticias(ultimasCinco);
    }, [noticias, noticiaAtual]);

    // Enviar novo comentário
    async function enviarComentario() {
        if (!comentario.trim() || !usuario || !noticiaAtual) return;

        const comentarioObj = {
            nome: usuario.nome,
            imagem: usuario.imagemURL,
            nomeFormatado: `${usuario.nome.split(' ')[0]} ${usuario.nome.split(' ').at(-1)}`,
            mensagem: comentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: []
        };

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios: arrayUnion(comentarioObj) });

            setNoticiaAtual({
                ...noticiaAtual,
                comentarios: [...(noticiaAtual.comentarios ?? []), comentarioObj]
            });
            setComentario('');
        } catch (error) {
            console.error("Erro ao enviar comentário:", error);
        }
    }

    // Curtir comentário
    async function toggleLike(index: number) {
        if (!usuario || !noticiaAtual) return;
        const uid = usuario.uid;
        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentario = { ...comentarios[index] };

        const curtiu = comentario.likes?.includes(uid) ?? false;
        const descurtiu = comentario.deslikes?.includes(uid) ?? false;

        comentario.likes = curtiu
            ? comentario.likes.filter(id => id !== uid)
            : [...(comentario.likes || []), uid];

        if (descurtiu) comentario.deslikes = comentario.deslikes.filter(id => id !== uid);

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao curtir:", error);
        }
    }

    // Descurtir comentário
    async function toggleDeslike(index: number) {
        if (!usuario || !noticiaAtual) return;
        const uid = usuario.uid;
        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentario = { ...comentarios[index] };

        const descurtiu = comentario.deslikes?.includes(uid) ?? false;
        const curtiu = comentario.likes?.includes(uid) ?? false;

        comentario.deslikes = descurtiu
            ? comentario.deslikes.filter(id => id !== uid)
            : [...(comentario.deslikes || []), uid];

        if (curtiu) comentario.likes = comentario.likes.filter(id => id !== uid);

        comentarios[index] = comentario;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
        } catch (error) {
            console.error("Erro ao descurtir:", error);
        }
    }

    // Mostrar campo para responder comentário
    function mostrarCampoDeRespostaDeComentario(index: number) {
        setComentarioIndexRespondido(prev => prev === index ? null : index);
        setVisibleResponderComentario('visivel');
    }

    // Responder comentário
    async function responder(e: React.FormEvent) {
        e.preventDefault();
        if (!usuario || !noticiaAtual || !responderComentario.trim() || comentarioIndexRespondido === null) return;

        const novaResposta = {
            nome: usuario.nome,
            imagem: usuario.imagemURL,
            nomeFormatado: `${usuario.nome.split(' ')[0]} ${usuario.nome.split(' ').at(-1)}`,
            mensagem: responderComentario.trim(),
            data: Timestamp.fromDate(new Date()),
            likes: [],
            deslikes: []
        };

        const comentarios = [...(noticiaAtual.comentarios ?? [])];
        const comentarioOriginal = { ...comentarios[comentarioIndexRespondido] };
        comentarioOriginal.respostas = comentarioOriginal.respostas || [];
        comentarioOriginal.respostas.push(novaResposta);
        comentarios[comentarioIndexRespondido] = comentarioOriginal;

        try {
            const ref = doc(db, "listaDeNoticias", noticiaAtual.id);
            await updateDoc(ref, { comentarios });
            setNoticiaAtual({ ...noticiaAtual, comentarios });
            setResponderComentario('');
            setVisibleResponderComentario('nao-visivel');
            setComentarioIndexRespondido(null);
        } catch (error) {
            console.error("Erro ao responder comentário:", error);
        }
    }

    return (
        <Template>
            <div className="p-4 flex flex-col gap-4 max-w-[1250px] mx-auto text-verde-escuro">
                {/* Título da notícia */}
                <h2 className="font-black text-2xl lg:text-3xl xl:text-4xl">{noticiaAtual?.titulo}</h2>
                <h3 className="font-semibold text-lg leading-6">{noticiaAtual?.subtitulo}</h3>

                {/* Imagem e conteúdo da notícia */}
                <div className="flex flex-col justify-center items-center gap-4 lg:grid lg:grid-cols-2 lg:max-w-full">
                    {noticiaAtual && (
                        <div className="relative flex w-full h-full sm:max-w-[500px] md:max-w-full">
                            <div className="card flex justify-content-center w-full h-full">
                                <Image src={noticiaAtual.imagemBase64} alt="Imagem da notícia" preview className="object-cover" />
                            </div>
                        </div>
                    )}
                    <p className="lg:h-[450px] overflow-y-scroll xl:h-[550px] xl:text-lg">{noticiaAtual?.conteudo}</p>
                </div>

                {/* Seção de comentários */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold">
                        Comentários ({noticiaAtual?.comentarios?.length ?? 0})
                    </h3>
                    <p className="text-xs">
                        Os comentários são de inteira responsabilidade de seus autores e não refletem a opinião deste site...
                    </p>

                    {/* Formulário para comentar */}
                    {usuario ? (
                        <div className="flex flex-col gap-2">
                            <textarea
                                name="comentario"
                                className="h-[150px] rounded-md p-3 sm:text-lg border-2 border-verde-escuro"
                                maxLength={300}
                                value={comentario}
                                onChange={(e) => setComentario(e.target.value)}
                            />
                            <button className="bg-verde-escuro text-white uppercase font-bold text-xl py-1" onClick={enviarComentario}>
                                Comentar!
                            </button>
                        </div>
                    ) : (
                        <div className="border-2 border-black p-4 flex flex-col gap-2 md:items-center">
                            <span className="text-lg leading-5">
                                Crie ou acesse sua conta para participar da conversa
                            </span>
                            <Link href="/login" className="text-2xl uppercase font-bold bg-verde-escuro text-white py-1 w-full max-w-[300px] mx-auto text-center">
                                Participe!
                            </Link>
                        </div>
                    )}

                    {/* Lista de comentários */}
                    <ul className="flex flex-col gap-4 mt-4">
                        {noticiaAtual != undefined && noticiaAtual?.comentarios?.length > 0 &&
                            noticiaAtual?.comentarios
                                .sort((a, b) => b.data.toDate().getTime() - a.data.toDate().getTime())
                                .map((com, i) => (
                                    <li key={i} className="flex flex-col gap-2 bg-zinc-100 p-2 rounded-md">
                                        {/* Cabeçalho do comentário */}
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                                <Image alt={com.nome} src={com.imagem} className="object-cover" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold leading-5">{com.nome}</h3>
                                                <p className="text-xs leading-5">{com.data.toDate().toLocaleString('pt-BR')}</p>
                                            </div>
                                        </div>

                                        {/* Mensagem */}
                                        <div className="p-2">
                                            <p className="md:text-xl">{com.mensagem}</p>
                                        </div>

                                        {/* Botões de ação */}
                                        <div className="w-full grid grid-cols-4">
                                            <button onClick={() => toggleLike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                <AiFillLike className="text-2xl" />
                                                <p className="absolute -top-2 right-0 font-bold text-xs md:-right-2">{com.likes?.length || 0}</p>
                                            </button>

                                            <button onClick={() => toggleDeslike(i)} className="relative flex items-center justify-self-center md:gap-1">
                                                <AiFillDislike className="text-2xl" />
                                                <p className="absolute -top-2 right-0 font-bold text-xs md:-right-2">{com.deslikes?.length || 0}</p>
                                            </button>

                                            {usuario ? (
                                                <button className="relative flex items-center justify-self-center md:gap-1" onClick={() => mostrarCampoDeRespostaDeComentario(i)}>
                                                    <RiQuestionAnswerFill className="text-2xl" />
                                                </button>
                                            ) : (
                                                <div className="flex flex-col items-center text-center text-xs text-red-600 font-bold">
                                                    <RiQuestionAnswerFill className="text-xl" />
                                                    <span className="hidden md:block">Entre para responder</span>
                                                </div>
                                            )}

                                            <button className="relative flex items-center justify-self-center md:gap-1">
                                                <FaExclamationCircle className="text-2xl" />
                                            </button>
                                        </div>

                                        {/* Respostas */}
                                        {com.respostas != undefined && com.respostas?.length > 0 && (
                                            <div className="ml-6 mt-4 border-l-2 border-zinc-300 pl-4">
                                                {com.respostas.map((resposta, rIdx) => (
                                                    <div key={rIdx} className="bg-white border p-2 rounded-md mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                                                <Image alt={resposta.nome} src={resposta.imagem} className="object-cover" />
                                                            </div>
                                                            <div>
                                                                <p className="font-bold text-sm">{resposta.nome}</p>
                                                                <p className="text-xs">{resposta.data.toDate().toLocaleString('pt-BR')}</p>
                                                            </div>
                                                        </div>
                                                        <p className="mt-1 text-sm">{resposta.mensagem}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Campo de resposta */}
                                        {visibleResponderComentario === 'visivel' && comentarioIndexRespondido === i && usuario && (
                                            <form className="mt-4 flex flex-col gap-2" onSubmit={responder}>
                                                <textarea
                                                    className="w-full border border-zinc-400 h-[150px] rounded-md p-4"
                                                    maxLength={300}
                                                    value={responderComentario}
                                                    onChange={(e) => setResponderComentario(e.target.value)}
                                                />
                                                <div className="grid grid-cols-2 gap-2">
                                                    <button
                                                        type="button"
                                                        className="uppercase font-bold w-full py-2 bg-red-500 text-white"
                                                        onClick={() => {
                                                            setVisibleResponderComentario('nao-visivel');
                                                            setComentarioIndexRespondido(null);
                                                        }}
                                                    >
                                                        Cancelar
                                                    </button>
                                                    <button type="submit" className="uppercase font-bold w-full py-2 bg-green-600 text-white">
                                                        Responder
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </li>
                                ))}
                    </ul>
                </div>

                {/* Outras notícias */}
                <div className="flex flex-col gap-4 md:gap-8">
                    <h4 className="text-verde-escuro font-bold text-2xl md:text-4xl">Outras Notícias:</h4>
                    <ul className="flex flex-col gap-4 md:gap-6" id="lista-de-noticias">
                        {outrasNoticias.map((noticia, i) => (
                            <CardNoticia key={i} noticia={noticia} isLast={i === outrasNoticias.length - 1} />
                        ))}
                    </ul>
                </div>

                {/* Botão voltar */}
                <div className="self-center w-full flex justify-end">
                    <BotaoNavegar label="Voltar" icone={<FaArrowLeft />} link="/" />
                </div>
            </div>
        </Template>
    );
}
