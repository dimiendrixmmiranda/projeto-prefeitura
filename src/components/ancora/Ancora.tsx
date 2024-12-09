import Link from "next/link"

interface AncoraProps{
    icone: React.ReactElement,
    texto: string,
    link: string
}

export default function Ancora({icone, texto, link}: AncoraProps){
    return(
        <Link href={link} className="flex justify-center items-center w-fit font-bold gap-1 bg-[--verde] px-2 py-1 rounded-lg text-white">
            {icone}
            <h3>{texto}</h3>
        </Link>
    )
}