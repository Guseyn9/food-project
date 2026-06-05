import React from 'react'
import { styled } from 'styled-components'
import cartSvg from '../config/cart.svg'

type Props = {
  onClick?: () => void;
  totalPrice: number;
  className?: string;
}

export const HeaderCart = ({ onClick, totalPrice, className }: Props) => {
  return (
    <Styled.headerCart className={className} onClick={onClick}>
        <Styled.cartPrice>{totalPrice}р</Styled.cartPrice>
        <img src={cartSvg} alt="" />
    </Styled.headerCart>
  )
}

const Styled = {
  headerCart: styled.div`
    cursor: pointer;
    display: flex;

    @media (max-width: 630px) {
      visibility: hidden;
      position: absolute;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
  `,
  cartPrice: styled.p`
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    margin: 0;
    margin-right: 8px;
  `
}