import React from 'react'
import { styled } from 'styled-components'

type Props = {
  name?: string;
  className?: string;
}

export const SectionTitle = ({ name, className }: Props) => {
  return (
    <Styled.sectionTitle className={className}>{name}</Styled.sectionTitle>
  )
}

const Styled = {
  sectionTitle: styled.h2`
    font-size: 35px;
    line-height: 43px;
    font-weight: 600;
    margin: 0;
  `
}