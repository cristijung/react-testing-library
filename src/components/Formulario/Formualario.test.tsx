import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { RecoilRoot } from 'recoil';
import Formulario from './Formulario';

//teste 1
test('quando o input está vazio, novos participantes não podem ser add', () => {
    //o teste será feito na renderização do componente formulario
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
        )
    //encontrar no DOM o elemento Input que contenha o placeholder 'Insira ....'
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    //encontrar o botão que possui a regra de button
    const botao = screen.getByRole('button')
    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
})

//teste 2
test('adicionar um participante caso exista um nome preenchido', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
        )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')
    //inserir um valor no input usano um helper do testing-library para disparar um evento do input
    //o valor do target é uma simulação
    fireEvent.change(input, {
        target: {
            value: 'Josefina'
         }
     })
     //clicar no botão
     fireEvent.click(botao)
     //garantir que o input estea com o foco ativo - fazer o teste
     expect(input).toHaveFocus()
     //precisamos garantir que o input não tenha um valor
     expect(input).toHaveValue('')
 })

 //teste 3
 test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
        )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')   
    //no teste, clicamos no input, vai  o nome, clica no botão e depois repete
    //novamente
    fireEvent.change(input, {
        target: {
            value: 'Josefina'
         }
     })     
     fireEvent.click(botao)
     fireEvent.change(input, {
        target: {
            value: 'Josefina'
         }
     })     
     fireEvent.click(botao)

     const mensagemDeErro = screen.getByRole('alert')
     expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos')
 })

 //teste 4
 test('a mensagem de erro deve sumir após os timers', () => {
    jest.useFakeTimers() //integrando o jest junto a testing library e usando um hook  especifico dele
    render(
        <RecoilRoot>
            <Formulario />
        </RecoilRoot>
        )
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
    const botao = screen.getByRole('button')   
    //no teste, clicamos no input, vai  o nome, clica no botão e depois repete
    //novamente
    fireEvent.change(input, {
        target: {
            value: 'Josefina'
         }
     })     
     fireEvent.click(botao)
     fireEvent.change(input, {
        target: {
            value: 'Josefina'
         }
     })     
     fireEvent.click(botao)

     let mensagemDeErro = screen.queryByRole('alert')
     expect(mensagemDeErro).toBeInTheDocument()
     //espera a quantidade de segundos definida
     //function act do library
     act(() => {
        jest.runAllTimers() //solicitando que o jest rode tudo o que tenha timers
     });     
     mensagemDeErro = screen.queryByRole('alert')
     expect(mensagemDeErro).toBeNull()
 })

