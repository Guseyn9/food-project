import React from 'react'
import { styled, css } from 'styled-components'
import { ProductCardProperty } from '../../productCardProperty/ui/productCardProperty'
import { ProductBtn } from '../../productBtn/ui/productBtn'
import { createGlobalStyle } from 'styled-components'

type Props = {
  id: number;
  imageUrl?: string;
  title?: string;
  price?: number;
  sizes: number[];
  types: number[];
}

export const ProductCard = ({ title, price, imageUrl, id, sizes, types }: Props) => {

  const [showProperty, setShowProperty] = React.useState(false);

  const handleProductImgClick = () => {
    setShowProperty(true);
  };

  const closeProperty = () => {
    setShowProperty(false);
  };

  return (
    <StyledContent>
      <Styled.productImg src={imageUrl} alt='' onClick={handleProductImgClick} />
      <Styled.productTitle>{title}</Styled.productTitle>
      <Styled.productPrice>цена: {price}р</Styled.productPrice>
      {showProperty && (
              <ProductCardProperty
                title={title}
                price={price}
                imageUrl={imageUrl}
                id={id}
                onClose={closeProperty}
                sizes={sizes}
                types={types}
              />
        )}
        {showProperty && (
          <ProductCardPropertyWrapper showProperty={showProperty} onClick={() => closeProperty()}>
          </ProductCardPropertyWrapper>
        )
        }
        <GlobalStyled showProperty={showProperty} />
        {/* @ts-ignore */}
      <ProductBtn title={title} price={price} imageUrl={imageUrl} id={id} />
    </StyledContent>
  )
}

const StyledContent = styled.div`
    width: 216px;
    height: 372px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #fff;
    padding: 0 42px 28px 42px;
    border-radius: 23px;
    margin-bottom: 30px;

    &:not(:nth-child(4n)) {
      margin-right: 30px;
    }

    @media (max-width: 1390px) {
      width: 22.23%;
      align-items: center;
      
      &:not(:nth-child(4n)) {
        margin-right: 0px;
      }
    }

    @media (max-width: 950px) {
      width: 33.23%;
    }

    @media (max-width: 630px) {
      width: 100%;
      padding: 0 25px 28px 25px;
    }
  `;

const Styled = {
  productImg: styled.img`
    cursor: pointer;
    width: 215px;
    height: 227px;
    margin-bottom: 5px;
  `,
  productTitle: styled.h3`
    font-size: 21px;
    line-height: 27px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 14px;

    @media (max-width: 1390px) {
      text-align: center;
    }
  `,
  productPrice: styled.p`
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 28px;
  `,
  productCount: styled.span`
    justify-content: center;
    border-radius: 100%;
    padding: 3px 9px;
    background-color: #FF6B00;
    margin-left: 5px;
  `
}

interface GlobalStyledProps {
  showProperty: boolean;
}

const ProductCardPropertyWrapper = styled.div<GlobalStyledProps>`
  width: 100%;
  height: 100%;
  left: 0%;
  top: 0%;

  ${({ showProperty }) => showProperty && css`
      background-color: #333;
      position: fixed;
      opacity: 0.4;
      z-index: 2;
      transition: background-color .3s ease-in-out, opacity .3s ease-in-out;
  `}
`;

const GlobalStyled = createGlobalStyle<GlobalStyledProps>`
  body {
    ${({showProperty}) => showProperty && css`
      position: fixed;
      width: 100%;
      height: 100%;
    `}
  }
`