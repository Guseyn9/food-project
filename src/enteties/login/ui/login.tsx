import React from 'react';
import { styled } from 'styled-components';
import { COLORS } from '../../../shared/common/constants/COLORS';
import { CustomText } from '../../../shared/CustomText/ui/customText';
import loginImg from '../config/loginImg.svg';

type Props = {
  onClick?: () => void;
}

export const Login = ({ onClick }: Props) => {
  return (
    <Styled.loginBtn onClick={onClick}>
        <CustomText fz={17} fw={600}>Войти</CustomText>
        <Styled.loginImg src={loginImg} />
    </Styled.loginBtn>
  )
}

const Styled = {
    loginBtn: styled.button`
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      padding: 7px 13px;
      margin: 0;
      border-left: 1px solid ${COLORS.GRAY_BACKGROUND_2};
      transition: background-color .3s ease-in-out, border-radius .3s ease-in-out;

      &:hover {
        background-color: ${COLORS.GRAY_BACKGROUND_2};
        border-radius: 10px;
      }
    `,
    loginImg: styled.img`
      width: 20px;
      height: 20px;
      margin-left: 5px;
      border-radius: 10px;
    `
}