import React from 'react'
import { Wrapper } from './styles'

export default function ContatoForm() {
  return (
    <Wrapper>
      <div className='titulo'>
        Preencha o formulário abaixo com seus dados e entraremos em contato
        o mais rápido possível.
      </div>
      <form>
        <div className='inputs1'>
          <input placeholder='Seu Nome'></input>
          <input placeholder='Seu Email'></input>
          <input placeholder='Seu Telefone'></input>
        </div>
        <div className='inputs2'>
          <select>
            <option>
              Opção
            </option>
          </select>
          <select>
            <option>
              Opção
            </option>
          </select>
        </div>
        <div className='inputs3'>
          <textarea placeholder='Conte-nos mais sobre seu projeto'>
          </textarea>
        </div>
      </form>
    </Wrapper>
  )
}
