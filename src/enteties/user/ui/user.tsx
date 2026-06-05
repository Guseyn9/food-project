import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../../shared/common/constants/COLORS';
import loginImg from '../../login/config/loginImg.svg';
import { UserMenu } from '../../userMenu/ui/userMenu';

type Props = {}

export const User = (props: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const userName = localStorage.getItem('owner');
  const owner = userName?.replace(/['"]+/g, '');

  return (
    <>
      <Styled.loginBtn onClick={() => setShowMenu(true)}>
        {owner}
        <Styled.loginImg src={loginImg} />
      </Styled.loginBtn>
      <UserMenu changeShowMenu={setShowMenu} stateShowMenu={showMenu} />
    </>
  );
}

const Styled = {
  loginBtn: styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    line-height: 22.1px;
    border: none;
    background-color: transparent;
    padding: 7px 13px;
    margin: 0;
    border-left: 1px solid ${COLORS.GRAY_BACKGROUND_2};
    transition: all .2s ease-in-out;

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
  `,
};
