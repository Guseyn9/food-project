import React from 'react'
import { styled } from 'styled-components'
import { COLORS } from '../../../shared/common/constants/COLORS'
import arrowSvg from '../config/arrow.svg';

type Props = {
  onClick?: () => void;
}

export const BackBtn = ({ onClick }: Props) => {
  return (
    <Styled.backBtn onClick={onClick}>
        <img src={arrowSvg} alt="" />
    </Styled.backBtn>
  )
}

const Styled = {
    backBtn: styled.button`
      position: absolute;
      left: 20px;
      top: 20px;
      border: none;
      cursor: pointer;
      width: 33px;
      height: 33px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: ${COLORS.GRAY_BACKGROUND_2};
      transition: opacity .3s ease-in-out;

      &:hover {
        opacity: .6;
      }
    `
}