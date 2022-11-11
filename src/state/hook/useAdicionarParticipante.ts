//hook personalizado usando os hooks do recoil
//para usá-lo, basta importar onde for preciso

import { listaParticipantesState, erroState } from "../atom"
import { useRecoilValue, useSetRecoilState } from 'recoil';



export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    const lista = useRecoilValue(listaParticipantesState)
    const setErro = useSetRecoilState(erroState)
   
    return (nomeDoParticipante: string) => { //criando a funcionalidade de duplicidade por meio de hooks personalizados + condicionais
        if (lista.includes(nomeDoParticipante)) {
            setErro('Nomes duplicados não são permitidos')
            setTimeout(() => { //os erros vão ficar sendo exibidos somente por 3 segundos
                setErro('')
            }, 3000)
            return
        }
        return setLista(listaAtual => [...listaAtual, nomeDoParticipante])
    }
}
