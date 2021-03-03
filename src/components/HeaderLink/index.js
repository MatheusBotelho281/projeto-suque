import React from 'react'
import { Wrapper } from '../Header/styles'
import { Anchor } from './styles'

export default function HeaderLink(props) {
  return (
    <Anchor>{props.nomeOpcao}</Anchor>
  )
}
