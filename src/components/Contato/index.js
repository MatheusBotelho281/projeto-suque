import React from 'react'
import { Wrapper } from './styles'

export default function ContatoForm() {
  return (
    <Wrapper>
      <div className='titulo'>
        Fill out the form below and we will
        contact you as soon as possible
      </div>
      <form>
        <div className='inputs1'>
          <input placeholder='Your Name'></input>
          <input placeholder='Email Address'></input>
          <input placeholder='Phone Number'></input>
        </div>
        <div className='inputs2'>
          <select>
            <option>
              Choose an Option
            </option>
          </select>
          <select>
            <option>
              Choose an Option
            </option>
          </select>
        </div>
        <div className='inputs3'>
          <textarea placeholder='Tell us about your project'>
          </textarea>
        </div>
      </form>
    </Wrapper>
  )
}
