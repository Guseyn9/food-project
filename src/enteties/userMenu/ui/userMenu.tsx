import React, { useEffect, useState } from 'react';
import { styled, keyframes } from 'styled-components';
import { COLORS } from '../../../shared/common/constants/COLORS';
import { CustomText } from '../../../shared/CustomText/ui/customText';
import userImg from '../config/userImg.svg';
import settingsImg from '../config/settings.svg';
import closeSvg from '../config/closeSvg.svg';
import { LogoutBtn } from '../../logoutBtn/ui/logoutBtn';

type Props = {
  changeShowMenu: (value: boolean) => void;
  stateShowMenu: boolean;
};

export const UserMenu = ({ changeShowMenu, stateShowMenu }: Props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (stateShowMenu) {
      setVisible(true);
    } else {
      setTimeout(() => setVisible(false), 300); // Duration of the fade-out animation
    }
  }, [stateShowMenu]);

  const userName = localStorage.getItem('owner');
  const owner = userName?.replace(/['"]+/g, '');

  return (
    <Styled.menu visible={visible} show={stateShowMenu}>
      <Styled.closeBtn onClick={() => changeShowMenu(false)}>
        <Styled.closeImg src={closeSvg} />
      </Styled.closeBtn>
      <MenuTitle fz={15} fw={600} color={COLORS.GRAY_TEXT_5}>Пользователь</MenuTitle>
      <Styled.userBlock>
        <Styled.user>
          <Styled.userImg src={userImg} />
          <div>
            <CustomText fw={600}>{owner}</CustomText>
            <CustomText fz={9} color={COLORS.GRAY_TEXT_5}>Это вы</CustomText>
          </div>
          <Styled.userSettings>
            <CustomText color={COLORS.GREEN_2} fz={10}>Настроить</CustomText>
            <Styled.settingsImg src={settingsImg} />
          </Styled.userSettings>
        </Styled.user>
      </Styled.userBlock>
      <LogoutBtn />
    </Styled.menu>
  );
};

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
`;

const Styled = {
  menu: styled.div<{ visible: boolean, show: boolean }>`
    position: absolute;
    top: 51px;
    right: 0;
    min-width: 210px;
    padding: 25px 20px 35px 20px;
    background-color: ${COLORS.WHITE};
    border-radius: 10px;
    box-shadow: 5px 5px 7px 3px #00000042;
    animation: ${({ show }) => (show ? slideDown : slideUp)} 0.3s ease-out;
    opacity: ${({ show }) => (show ? 1 : 0)};
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  `,
  userBlock: styled.div`
    border-bottom: 1px solid #8d8d8d36;
    padding-bottom: 20px;
    margin-bottom: 20px;
  `,
  user: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    background-color: #ffa84199;
    border-radius: 10px;
    padding: 8px 10px;
  `,
  userImg: styled.img`
    width: 30px;
    height: 30px;
    margin-right: 7px;
  `,
  userSettings: styled.button`
    cursor: pointer;
    position: absolute;
    bottom: 5px;
    right: 9px;
    display: flex;
    align-items: center;
  `,
  settingsImg: styled.img`
    width: 8px;
    height: 8px;
    margin-left: 3px;
  `,
  closeBtn: styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  `,
  closeImg: styled.img`
    width: 15px;
    height: 15px;
  `,
};

const MenuTitle = styled(CustomText)`
  margin-bottom: 20px;
`;
