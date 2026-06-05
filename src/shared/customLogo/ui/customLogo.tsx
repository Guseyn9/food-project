import React from 'react'
import logoSvg from '../config/logoSvg.svg'
import { styled } from 'styled-components'

type Props = {
  onClick?: () => void;
  className?: string; 
}

export const CustomLogo = ({ onClick, className }: Props) => {
  return (
    <Styled.headerLogo className={className} src={logoSvg} alt="" onClick={onClick} />
  )
}

const Styled = {
  headerLogo: styled.img`
    cursor: pointer;
    margin-right: 40px;
  `
}