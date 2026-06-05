import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../features/basketSlice/ui/basketSlice'
import { styled } from 'styled-components'

type Props = {
  id: number;
  imageUrl?: string;
  title?: string;
  price?: number;
  sizes?: number;
  types?: string;
  className?: string;
}

export const ProductBtn = ({ title, price, imageUrl, id, sizes, types, className }: Props) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const cartCount = useSelector(state => state.cart.items.find(obj => obj.id == id))

  const addCount = cartCount ? cartCount.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      sizes,
      types
    }
    dispatch(addItem(item))
  }
  return (
    <Styled.productBtn className={className} onClick={onClickAdd}>
        В корзину
        {
          addCount > 0 && <Styled.productCount>{addCount}</Styled.productCount>
        }
    </Styled.productBtn>
  )
}

const Styled = {
  productBtn: styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    padding: 13px 18px;
    background-color: #FFA841;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    border-radius: 10px;
    color: #fff;
    transition: background-color .2s ease-in-out;

    &:hover {
      background-color: #ffbb6b;
    }

    &:active {
      background-color: #ff813d;
    }
  `,
  productCount: styled.span`
    justify-content: center;
    border-radius: 100%;
    padding: 3px 9px;
    background-color: #FF6B00;
    margin-left: 5px;
  `
}