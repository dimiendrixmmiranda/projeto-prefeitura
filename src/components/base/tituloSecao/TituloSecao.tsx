interface TituloSecaoProps{
    icone: React.ReactElement,
    texto: string
}

export default function TituloSecao({icone, texto}:TituloSecaoProps) {
    return (
        <div className="flex items-center bg-verde-escuro text-center justify-center gap-2 text-3xl font-bold py-2 text-white 2xl:p-3" style={{ textShadow: '1px 1px 2px black' }}>
            {icone}
            <h2>{texto}</h2>
        </div>
    )
}