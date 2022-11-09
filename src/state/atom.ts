//é um átomo do recoil pq se refere a uma pequena porção do nosso estado aplicado ao componente
import { atom } from 'recoil';


export const listaParticipantesState = atom<string[]>({
    key: 'listaParticipantesState',
    default: []
})