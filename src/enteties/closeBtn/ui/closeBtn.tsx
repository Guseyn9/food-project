import React from 'react'
import { styled } from 'styled-components'
import closeIcon from '../config/delete.svg'

type Props = {
  onClick: () => void;
  className?: string;
}

export const CloseBtn = ({ onClick, className }: Props) => {
  return (
    <Styled.cardDelete className={className}>
        <Styled.cardDeleteIcon onClick={onClick} src={closeIcon} />
    </Styled.cardDelete>
  )
}

const Styled = {
  cardDelete: styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: #8f8f8f;
    border-radius: 100%;
    padding: 4.5px 5px;

    @media (max-width: 470px) {
      width: 26px;
      height: 26px;
    }
  `,
  cardDeleteIcon: styled.img`
    width: 20px;
    height: 22px;

    @media (max-width: 470px) {
      width: 16px;
      height: 18px;
    }
  `
}