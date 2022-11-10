//é um átomo do recoil pq se refere a uma pequena porção do nosso estado aplicado ao componente
import { atom } from 'recoil';


export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})

export const erroState = atom<string>({
    //passando a Key, lembrando que as chaves sempre tem que ser única
    //default que vai ser uma string vazia
    key: 'erroState',
    default: ''
})