import React from 'react'
import { styled } from 'styled-components'

type Props = {
    onClick: () => void;
}

export const Burger = ({ onClick }: Props) => {
  return (
    <Styled.burgerBtn onClick={onClick}>
        <Styled.burgerItem></Styled.burgerItem>
        <Styled.burgerItem></Styled.burgerItem>
        <Styled.burgerItem></Styled.burgerItem>
    </Styled.burgerBtn>
  )
}

const Styled = {
  burgerBtn: styled.button`
    border: none;
    background-color: unset;

    @media (max-width: 1400px) {
        cursor: pointer;
        position: relative;
        width: 21px;
        height: 15px;
        padding: 0;
        margin-right: 25px;
    }
  `,
  burgerItem: styled.span`
  @media (max-width: 1400px) {
    position: absolute;
    display: inline-block;
    width: 21px;
    height: 3px;
    left: 0;
    background-color: grey;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 14px;
    }
  }
  `
}