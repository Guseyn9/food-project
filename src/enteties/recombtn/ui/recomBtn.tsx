import React from 'react'
import { styled } from 'styled-components'

type Props = {
  onClick?: () => void;
  name?: string;
  className?: string;
}

export const RecomBtn = ({ onClick, name, className }: Props) => {
  return (
    <Styled.recomBtn className={className} onClick={onClick}>{name}</Styled.recomBtn>
  )
}

const Styled = {
  recomBtn: styled.button`
    cursor: pointer;
    border: none;
    background-color: #FF6B00;
    font-size: 22px;
    line-height: 27px;
    font-weight: 700;
    padding: 17px 31px;
    border-radius: 10px;
    color: #fff;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: #ff852d;
    }

    &:active {
      background-color: #e56000;
    }
  `
}