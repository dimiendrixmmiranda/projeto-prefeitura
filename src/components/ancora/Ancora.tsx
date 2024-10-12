import Link from "next/link";
import { IoIosArrowRoundBack, IoIosArrowRoundUp } from "react-icons/io";

interface AncoraProps{
    estilo: string
}

export default function Ancora({estilo}: AncoraProps) {
    return (
        <div className={estilo}>
            <Link href={'#topo'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center'>
                Voltar ao Topo<IoIosArrowRoundUp className='text-xl font-bold' />
            </Link>
            <Link href={'/'} className='bg-[--verde] p-2 font-black rounded-md flex gap-1 whitespace-nowrap justify-center items-center'>
                Voltar ao Início<IoIosArrowRoundBack className='text-xl font-bold' />
            </Link>
        </div>
    )
}