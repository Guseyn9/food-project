import React from 'react'
import { styled } from 'styled-components'
import plusIcon from '../config/plus.svg'
import minusIcon from '../config/minus.svg'
import deleteIcon from '../config/delete.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, minusItem, removeItem } from '../../../features/basketSlice/ui/basketSlice'
import { CloseBtn } from '../../closeBtn/ui/closeBtn'

export type BasketProps = {
  id: number;
  title: string;
  price: number;
  count: number;
  imageUrl: string;
  sizes?: number;
  types?: string;
}

export const BasketCard = ({ id, title, price, sizes, types, count, imageUrl }: BasketProps) => {
  const totalPrice = price * count;

  const dispatch = useDispatch()

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    )
  };

  const onClickMinus = () => {
    dispatch(minusItem(id), count--)
  };

  const removeItems = () => {
    if (window.confirm('Удалить товар?')) {
      dispatch(
        removeItem(id)
      )
    }
  }


  return (
    <Styled.content>
        <Styled.cardImage src={imageUrl} />
        <Styled.cardProperty>
            <Styled.cardTitle>{title}</Styled.cardTitle>
            {/* {types && types.length > 0 ? (
                <Styled.cardTypes>тип: {types}</Styled.cardTypes>
            ) : (
              <Styled.cardTypes>тип: среднее</Styled.cardTypes>
            )}

            {sizes && sizes !== undefined ? (
                <Styled.cardTypes>размер: {sizes} см</Styled.cardTypes>
            ) : (
              <Styled.cardTypes>размер: по умолчанию</Styled.cardTypes>
            )} */}
            <Styled.cardTypes>тип: {types && types.length > 0 ? types : 'среднее'}</Styled.cardTypes>
            <Styled.cardTypes>размер: {sizes ? `${sizes} см` : 'по умолчанию'}</Styled.cardTypes>
        </Styled.cardProperty>
        <Styled.cardContent>
        <Styled.cardCount>
            <Styled.cardBtn onClick={onClickPlus}>
              <Styled.cardBtnIcon src={plusIcon} />
            </Styled.cardBtn>
                <Styled.cardCountText>{count}</Styled.cardCountText>
            <Styled.cardBtn onClick={onClickMinus}>
              <Styled.cardBtnIcon src={minusIcon} />
            </Styled.cardBtn>
          </Styled.cardCount>
            <Styled.cardPrice>{totalPrice}р</Styled.cardPrice>
            <CardDelete onClick={removeItems} />
        </Styled.cardContent>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: #fff;
    border-radius: 20px;
    margin-bottom: 30px;

    @media (max-width: 760px) {
      max-width: 350px;
      flex-direction: column;
    }
  `,
  cardImage: styled.img`
    width: 182px;
    height: 187px;
    margin-right: 20px;

    @media (max-width: 760px) {
      margin-right: 0;
    }
  `,
  cardProperty: styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 760px) {
      align-items: center;
      margin-bottom: 20px;
    }
  `,
  cardTitle: styled.h3`
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 20px;
  `,
  cardTypes: styled.p`
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    color: #969696;
    margin: 0;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    @media (max-width: 410px) {
      text-align: center;
    }
  `,
  cardContent: styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 760px) {
      width: 100%;
    }
  `,
  cardCount: styled.div`
    display: flex;
  `,
  cardBtn: styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    &:active {
      transform: translate(0, 2px);
    }
  `,
  cardBtnIcon: styled.img`
    width: 22px;
    height: 22px;
  `,
  cardCountText: styled.span`
    font-family: "Montserrat";
    display: inline-block;
    font-size: 25px;
    line-height: 30px;
    font-weight: 600;
    margin-left: 10px;
    margin-right: 10px;
  `,
  cardPrice: styled.p`
    font-size: 24px;
    line-height: 29px;
    font-weight: 600;
    margin: 0;

    @media (max-width: 760px) {
      margin-right: 0;
    }
  `,
  cardDelete: styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: #8f8f8f;
    border-radius: 100%;
    padding: 4.5px 5px;
  `,
  cardDeleteIcon: styled.img`
    width: 20px;
    height: 22px;
  `
}

const CardDelete = styled(CloseBtn)`
  @media (max-width: 410px) {
    position: absolute; 
    top: 20px;
    right: 20px;
  }
`