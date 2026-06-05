import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

type Props = {
  title?: string;
  descr?: string;
}

export const EmptyBasketPage = ({title, descr}: Props) => {
  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  return (
    <Styled.contentPage>
      <Styled.container>
          <Styled.content>
              <Styled.basketTitle>{title}</Styled.basketTitle>
              <Styled.basketDescr>{descr}</Styled.basketDescr>
              <Styled.basketBtn onClick={goHome}>Вернуться на главную</Styled.basketBtn>
          </Styled.content>
      </Styled.container>
    </Styled.contentPage>
  )
}

const Styled = {
  contentPage: styled.section`
    padding: 0 50px;
    background-color: #E7E7E7;

    @media (max-width: 460px) {
      padding: 0 20px;
    } 
  `,
  container: styled.div`
    padding: 60px 0;
    height: 80vh;
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  content: styled.div`
    display: flex;
    max-height: 286px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    padding: 0 124px;

    @media (max-width: 800px) {
      padding: 0 64px;
    }
    
    @media (max-width: 580px) {
      max-height: 266px;
      padding: 0 29px;
    }
  `,
  basketTitle: styled.h2`
    text-align: center;
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 30px;
    color: #000;

    @media (max-width: 580px) {
      font-size: 26px;
      margin-bottom: 10px;
    } 

    @media (max-width: 460px) {
      font-size: 22px;
      line-height: 24px;
    } 
  `,
  basketDescr: styled.p`
    max-width: 627px;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 30px;
    color: #8D8D8D;

    @media (max-width: 580px) {
      font-size: 17px;
      line-height: 21px;
      margin-bottom: 20px;
    } 

    @media (max-width: 460px) {
      font-size: 15px;
    } 
  `,
  basketBtn: styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: #FF6B00;
    font-size: 22px;
    line-height: 27px;
    font-weight: 600;
    padding: 18px 23px;
    border-radius: 36px;
    color: #fff;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: #ff852d;
    }

    &:active {
      background-color: #e56000;
    }

    @media (max-width: 580px) {
      font-size: 18px;
      padding: 15px 18px;
    } 

    @media (max-width: 460px) {
      font-size: 16px;
      padding: 14px 17px;
    } 
  `
}