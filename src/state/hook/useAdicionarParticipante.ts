//hook personalizado usando os hooks do recoil
//para usá-lo, basta importar onde for preciso

import { listaParticipantesState } from "../atom"
import { useSetRecoilState } from 'recoil';


export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    return (nomeDoParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}