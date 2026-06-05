import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../shared/common/constants/COLORS'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import logoutSvg from '../config/logout.svg';

type Props = {}

export const LogoutBtn = (props: Props) => {
  return (
    <LogoutButton width='100%' bgColor={COLORS.RED} borderRadius='10px' padding='8px 0' textColor={COLORS.RED_2} fz='12px' fw='600'>
      Выход
      <Styled.logoutImg src={logoutSvg} />
    </LogoutButton>
  )
}

const Styled = {
  logoutImg: styled.img`
    width: 15px;
    height: 15px;
    margin-left: 2px;
  `,
}

const LogoutButton = styled(CustomButton)`
  display: flex;
  justify-content: center;
  align-items: center;
`;