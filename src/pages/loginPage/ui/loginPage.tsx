import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BackBtn } from '../../../enteties/backBtn/ui/backBtn'
import { CustomInput } from '../../../enteties/CustomInput/ui/CustomInput'
import { COLORS } from '../../../shared/common/constants/COLORS'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { Footer } from '../../../widgets/footer/ui/footer'
import { Registration } from './registration'
import { User } from '../config/interfaceUser'
import axios from 'axios'
import { CustomText } from '../../../shared/CustomText/ui/customText'

type Props = {
  
}

export const LoginPage = (props: Props) => {
  const [showReg, setShowReg] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([])
  const [loginData, setLoginData] = useState({
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const goHome = () => {
    navigate('/')
  }

  useEffect(() => {
    // Запрос для получения списка пользователей
    axios.get('http://localhost:3001/api/getUsers')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Ошибка при получении пользователей:', error))
      // console.log(users)
  }, [])
  console.log(users)

  const handleLogin = async () => {
    if (!loginData.phone || !loginData.password) {
      setErrorMessage('Заполните все поля');
      return;
    } else {
      setErrorMessage('');
    }
    const user = users.find(user => user.phone.toString() === loginData.phone && user.password === loginData.password)
    console.log(user)

    if (!user) {
      setErrorMessage('Неправильный номер телефона или пароль');
      console.log('Неправильный номер телефона или пароль')
      return;
    } else {
        try {
          const response = await axios.post('http://localhost:3001/api/getUsers/auth', {
            name: user?.name,
            password: loginData.password,
            phone: loginData.phone,
            token: user?.token,
          });
        } catch (error) {
          console.error('Ошибка запроса!', error);
        }
        navigate('/')
    }

    localStorage.setItem('owner', user.name)
    localStorage.setItem('token', user.token)
    
    setLoginData({ phone: '', password: '', });
  }
  return (
    <>
    {showReg ? (
      <Registration changeShowReg={(value: boolean) => setShowReg(value)}  />
    ) : 
      <>
        <Styled.container>
          <Styled.login>
            <BackBtn onClick={() => goHome()} />
            <Styled.title>Вход</Styled.title>
            {errorMessage && <CustomText color={COLORS.ORANGE_BG_2}>{errorMessage}</CustomText>}
            <LoginInput type="phone" required name='phone' value={loginData.phone} placeholder='Телефон' onChange={handleChange} />
          <LoginInput type="password" required name='password' value={loginData.password} placeholder='Пароль' onChange={handleChange} />
            <Styled.loginBtn>
              <CustomButton fz='22px' width='100%' fw='700' bgColor={COLORS.ORANGE_BG} padding='13px 0' hoverBgColor={COLORS.ORANGE_BG_1} onClick={handleLogin}>Войти</CustomButton>
            </Styled.loginBtn>
            <LoginBtn bgColor='transparent' border='2px solid #A8A8A8' 
                      borderRadius='10px' fz='18px' fw='600' width='100%' 
                      padding='16px 0' textColor={COLORS.GRAY_TEXT}
                      onClick={() => setShowReg(true)}
                      >Создать аккаунт
            </LoginBtn> 
          </Styled.login>
        </Styled.container>
        <Footer />  
      </>
      }
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
      max-height: 400px;
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