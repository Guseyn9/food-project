import { returnGlobalStyle } from '../config/style';
import { Routes, Route } from 'react-router-dom';
import React from 'react'
import { HomePage } from '../../pages/homePage/ui/homePage'
import { Header } from '../../widgets/header/ui/header';
import { EmptyBasketPage } from '../../pages/emptyBasketPage/ui/emptyBasketPage';
import { Recommend } from '../../widgets/recommend/ui/recommend';
import { AboutUs } from '../../pages/aboutUs/ui/aboutUs';
import { Contacts } from '../../pages/contacts/ui/contacts';
import { BasketPage } from '../../pages/basketPage/ui/basketPage';
import { styled } from 'styled-components'
import { LoginPage } from '../../pages/loginPage/ui/loginPage';

type Props = {}

export const RoutesApp = (props: Props) => {
  const GlobalStyled = returnGlobalStyle()
  const [searchValue, setSearchValue] = React.useState('') 
  return (
    <>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
          <Route path="/" element={<HomePage searchValue={searchValue} />} />
          <Route path="/emptybasket" element={<BasketPage />} />
          <Route path="/assortment" element={<Assortment searchValue={searchValue} title='Ассортимент' />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/stocks" element={<EmptyBasketPage title='Акций пока нет 😕' descr='
            Мы постараемся как можно быстрее ввести новые акции, а пока возвращайтесь на главную
          ' />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
      <GlobalStyled />
    </>
  )
}

const Assortment = styled(Recommend)`
  padding-bottom: 265px;
`