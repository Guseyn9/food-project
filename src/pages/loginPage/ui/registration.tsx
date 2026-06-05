import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BackBtn } from '../../../enteties/backBtn/ui/backBtn';
import { CustomInput } from '../../../enteties/CustomInput/ui/CustomInput';
import { COLORS } from '../../../shared/common/constants/COLORS';
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton';
import { CustomText } from '../../../shared/CustomText/ui/customText';
import { Footer } from '../../../widgets/footer/ui/footer';
import { User } from '../config/interfaceUser';
import { LoginPage } from './loginPage';

type Props = {
  changeShowReg: (value: boolean) => void;
}

export const Registration = ({ changeShowReg }: Props) => {
    const [users, setUsers] = useState<User[]>([])
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      password: '',
    });

    const generateToken = () => {
      // Генерация уникального токена
      return Math.random().toString(36).substr(2, 9);
    };
    const token = generateToken();

    const handleSubmit = async () => {
      if (!formData.name || !formData.phone || !formData.password) {
        setErrorMessage('Заполните все поля');
        return;
      } else {
        setErrorMessage('');
      }

      axios.get('http://localhost:3001/api/getUsers')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Ошибка при получении пользователей:', error))

      const isUserAlreadyRegistered = users.some((user: { phone: string }) => user.phone.toString() === formData.phone); 

      if (isUserAlreadyRegistered) {
        setErrorMessage('Пользователь с таким номером телефона уже зарегистрирован');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3001/api/users', {
          name: formData.name,
          password: formData.password,
          phone: formData.phone,
          token: token,
        });
      } catch (error) {
        setErrorMessage('Ошибка запроса!');
      }

      setFormData({ name: '', phone: '', password: '', });
    }

    // Отправление данных юзера в базу данных

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const showReg = (value: boolean) => {
      changeShowReg(value)
    }
    return (
      <>
      <Styled.container>
        <Styled.login>
          <BackBtn onClick={() => showReg(false)} />
          <Styled.title>Регистрация</Styled.title>
          {errorMessage && <CustomText color={COLORS.ORANGE_BG_2}>{errorMessage}</CustomText>}
          <LoginInput type="text" required name='name' value={formData.name} placeholder='Имя' onChange={handleChange} />
          <LoginInput type="phone" required name='phone' value={formData.phone} placeholder='Телефон' onChange={handleChange} />
          <LoginInput type="password" required name='password' value={formData.password} placeholder='Пароль' onChange={handleChange} />
          <Styled.loginBtn>
            <CustomButton fz='22px' width='100%' fw='700' bgColor={COLORS.ORANGE_BG} padding='13px 0' hoverBgColor={COLORS.ORANGE_BG_1} onClick={handleSubmit}>Зарегестрироваться</CustomButton>
          </Styled.loginBtn>
          <LoginBtn bgColor='transparent' border='2px solid #A8A8A8' 
                    borderRadius='10px' fz='18px' fw='600' width='100%' 
                    padding='16px 0' textColor={COLORS.GRAY_TEXT}
                    onClick={() => showReg(false)}
                    >Войти в аккаунт
            </LoginBtn>
        </Styled.login>
      </Styled.container>
      <Footer /> 
      </>
    )
}

const Styled = {
    container: styled.div`
      display: flex;
      justify-content: center;
      width: 100%;
      padding-top: 70px;
      padding-bottom: 100px;
      background-color: ${COLORS.GRAY_BACKGROUND};
    `,
    login: styled.div`
      position: relative;
      width: 340px;
      display: flex;
      min-height: 465px;
      flex-direction: column;
      align-items: center;
      background-color: ${COLORS.WHITE};
      border-radius: 10px;
      padding: 30px;
    `,
    loginBtn: styled.div`
      width: 100%;
      border-bottom: 1px solid ${COLORS.GRAY_BACKGROUND_2};
      padding-bottom: 30px;
      margin-bottom: 30px;
    `,
    title: styled.h3`
      font-size: 30px;
      line-height: 37px;
      font-weight: 600;
      margin: 0;
      margin-bottom: 50px;
      color: ${COLORS.DARK};
    `,
}

const LoginInput = styled(CustomInput)`
  outline: none;
  max-width: 290px;
  margin-bottom: 20px;
`

const LoginBtn = styled(CustomButton)`
  transition: opacity .3s ease-in-out;

  &:hover {
    opacity: .6;
  }
`