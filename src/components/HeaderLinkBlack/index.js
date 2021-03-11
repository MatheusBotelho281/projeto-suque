import React from 'react'
import { Wrapper } from '../Header/styles'
import { Anchor } from './styles'
import Link from 'next/link'

export default function HeaderLink(props) {

  return (
    <Link href={props.pageUrl ? props.pageUrl : '/'}><Anchor>{props.nomeOpcao}</Anchor></Link>
  )
}
