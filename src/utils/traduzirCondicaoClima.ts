import axios from 'axios';
import possibilidadeCondicao from '../data/possibilidadesCondicao.json';

export default function condicaoClima(codigo: number): string {
    const condicao = possibilidadeCondicao.find(objeto => objeto.code === codigo);
    const dia = condicao != undefined ? condicao?.day : ''
    return dia
}