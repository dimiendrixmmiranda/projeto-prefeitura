import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function stringDataHora(){
    const hora = new Date().getHours() <= 9 ? '0' + new Date().getHours() : new Date().getHours()
    const minutos = new Date().getMinutes() <= 9 ? '0' + new Date().getMinutes() : new Date().getMinutes() 
    const dataAtual = new Date();
    const dataFormatada = format(dataAtual, "d 'de' MMMM", { locale: ptBR });

    return `${dataFormatada}, ${hora}:${minutos}`
}

