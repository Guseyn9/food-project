import React from 'react'
import { styled } from 'styled-components'
import basketSvg from '../config/basketSvg.svg'
import trashcanSvg from '../config/trashcanSvg.svg'
import { useDispatch, useSelector } from 'react-redux'
import { BasketCard, BasketProps } from '../../../enteties/basketCard/ui/basketCard'
import { RecomBtn } from '../../../enteties/recombtn/ui/recomBtn'
import { clearItems } from '../../../features/basketSlice/ui/basketSlice'
import { EmptyBasketPage } from '../../emptyBasketPage/ui/emptyBasketPage'

type Props = {}

export const BasketPage = (props: Props) => {
  const dispatch = useDispatch();
  // @ts-ignore
  let { totalPrice, items } = useSelector(state => state.cart)

  const clearItem = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(
        clearItems()
      )
    }
  }

  if (!totalPrice) {
    return <EmptyBasketPage title='Корзина пока пуста 😕' descr='Перейдите на главную, чтобы выбрать продукты' />
  }

  return (
    <Styled.basketPage>
      <Styled.container>
            <Styled.basketTitle>
                <Styled.basketIcon src={basketSvg} alt='basket' />
                <Styled.title>Корзина</Styled.title>
            </Styled.basketTitle>
            <Styled.cleanBasket>
                <Styled.cleanBasketIcon src={trashcanSvg} alt='trashcan' />
                <Styled.cleanBasketTitle onClick={clearItem}>Очистить корзину</Styled.cleanBasketTitle>
            </Styled.cleanBasket>
            <Styled.basketCardContent>
              {
                items.map((item: BasketProps) => <BasketCard key={item.id} {...item} />)
              }
            </Styled.basketCardContent>
            <Styled.basketBottom>
              <Styled.orderAmount>Сумма заказа: {totalPrice}р</Styled.orderAmount>
              <ToPay name='Оплатить' />
          </Styled.basketBottom>
      </Styled.container>
    </Styled.basketPage>
  )
}

const Styled = {
  basketPage: styled.section`
    background-color: #E7E7E7;
    padding: 80px 50px;

    @media (max-width: 410px) {
      padding: 40px 30px;
    }
  `,
  container: styled.div`
    width: 100%;
    max-width: 906px;
    margin: 0 auto;
  `,
  basketTitle: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,
  title: styled.h2`
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    color: #000;
    margin: 0;

    @media (max-width: 410px) {
      font-size: 26px;
    }
  `,
  basketIcon: styled.img`
    width: 35px;
    height: 35px; 
    margin-right: 10px;

    @media (max-width: 410px) {
      width: 31px;
      height: 31px; 
    }
  `,
  cleanBasket: styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  `,
  cleanBasketIcon: styled.img`
    width: 25px;
    height: 25px;
    margin-right: 3px;
  `,
  cleanBasketTitle: styled.p`
    font-size: 19px;
    line-height: 23px;
    font-weight: 600;
    margin: 0;
    color: #A8A8A8;
  `, 
  basketCardContent: styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 760px) {
      align-items: center;
    }
  `,
  basketBottom: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 550px) {
      flex-direction: column;
    }
  `,
  orderAmount: styled.h3`
    font-size: 24px;
    line-height: 29px;
    font-weight: 600;
    margin: 0;

    @media (max-width: 550px) {
      margin-bottom: 20px;
    }
  `
}

const ToPay = styled(RecomBtn)`
  border-radius: 36px;
  padding: 20px 30px;
`