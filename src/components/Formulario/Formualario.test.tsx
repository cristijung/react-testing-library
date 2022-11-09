import { fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';


test('quando o input está vazio, novos participantes não podem ser add', () => {
    //o teste será feito na renderização do componente formulario
    render(<Formulario />)
    //encontrar no DOM o elemento Input que contenha o placeholder 'Insira ....'
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botão que possui a regra de button
    const botao = screen.getByRole('button')
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})

// test('adicionar um participante caso exista um nome preenchido', () => {
//     render(<Formulario />)
//     const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
//     const botao = screen.getByRole('button')
//     //inserir um valor no input usano um helper do testing-library para disparar um evento do input
//     //o valor do target é uma simulação
//     fireEvent.change(input, {
//         target: {
//             value: 'Josefina'
//         }
//     })
//     //clicar no botão


// })

