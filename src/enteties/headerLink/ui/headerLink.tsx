import React from 'react'
import { styled } from 'styled-components'

type Props = {
  onClick?: () => void;
  nameLink?: string;
  selected: boolean
}

export const HeaderLink = ({ nameLink, onClick, selected }: Props) => {
  return (
    <Styled.headerItem>
        <Styled.headerLink selected={selected} onClick={onClick}>{nameLink}</Styled.headerLink>
    </Styled.headerItem>
  )
}

const Styled = {
  headerItem: styled.li`
    &:not(:last-child) {
      margin-right: 35px;
    }

    @media (max-width: 1400px) {
      &:not(:last-child) {
        margin-bottom: 35px;
      }
    }
  `,
  headerLink: styled.a<{ selected: boolean }>`
    cursor: pointer;
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    color: #000;
    transition: color .2s ease-in-out;
    // border-bottom: ${(props) => (props.selected ? '2px solid #FFB258' : 'none')};
    padding-bottom: 3px;

    &:hover {
      color: #FFB258;
    }

    @media (max-width: 1400px) {
      font-size: 19px;
    }
  `
}