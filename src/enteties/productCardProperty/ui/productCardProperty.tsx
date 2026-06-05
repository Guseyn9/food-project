import React from 'react'
import { styled, css } from 'styled-components'
import { ProductBtn } from '../../productBtn/ui/productBtn'
import { ProductCardFeatures } from '../../productCardFeatures/ui/productCardFeatures'
import { CloseBtn } from '../../closeBtn/ui/closeBtn'

type Props = {
  id: number;
  imageUrl?: string;
  title?: string;
  price?: number;
  onClose: () => void;
  sizes: number[];
  types: number[];
}

export const ProductCardProperty = ({ id, imageUrl, title, price, onClose, sizes, types }: Props) => {
  const [typeNames, setTypeNames] = React.useState<string[]>(['среднее', 'большое']);
  const [activeType, setActiveType] = React.useState(0);

  const handleTypeChange = (newTypeNames: string[], newActiveType: number) => {
    setTypeNames(newTypeNames);
    setActiveType(newActiveType);
  };

  const [activeSize, setActiveSize] = React.useState(0);

  const handleSizeChange = (newActiveSize: number) => {
    setActiveSize(newActiveSize);
  };
  console.log(sizes)

  return (
    <Styled.container>
      <Styled.content>
        <Styled.cardImage src={imageUrl} />
        <Styled.cardContent>

            <Styled.cardTitle>{title}</Styled.cardTitle>
            <ProductCardFeatures sizes={sizes} types={types} onTypeChange={handleTypeChange} onSizeChange={handleSizeChange} />
            <Styled.cardBottom>
                <Styled.cardPrice>цена: {price}р</Styled.cardPrice>
                <BtnProperty id={id} title={title} imageUrl={imageUrl} price={price} sizes={sizes && sizes.length > 0 ? sizes[activeSize] : undefined} types={typeNames[activeType]} />
            </Styled.cardBottom>
            <CardClose onClick={onClose} />
        </Styled.cardContent>
      </Styled.content>
    </Styled.container>
  )
}

const Styled = {
  container: styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  content: styled.div`
    width: 808px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px;
    background-color: #fff;
    border-radius: 20px;
    z-index: 3;

    @media (max-width: 975px) {
      width: 618px;
      padding: 30px;
    }

    @media (max-width: 730px) {
      width: 338px;
      padding: 25px;
      flex-direction: column;
    }

    @media (max-width: 450px) {
      width: 238px;
    }
  `,
  cardImage: styled.img`
    width: 245px;
    height: 264px;

    @media (max-width: 975px) {
      width: 195px;
      height: 194px;
    }

    @media (max-width: 730px) {
      width: 165px;
      height: 164px;
    }
  `,
  cardContent: styled.div`
    width: 493px;
    display: flex;
    flex-direction: column;

    @media (max-width: 975px) {
      width: 393px;
    }

    @media (max-width: 730px) {
      width: 333px;
    }

    @media (max-width: 450px) {
      width: 263px;
    }
  `,
  cardTitle: styled.div`
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 27px;

    @media (max-width: 730px) {
      font-size: 25px;
      margin-bottom: 10px;
    }

    @media (max-width: 450px) {
      font-size: 23px;
      margin-bottom: 10px;
    }
  `,
  cardBottom: styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
  `,
  cardPrice: styled.p`
    font-size: 22px;
    line-height: 27px;
    font-weight: 400;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 19px;
    }
  `,
  cardClose: styled.button`
    position: absolute;
    top: 30px;
    right: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    background-color: #8f8f8f;
    border-radius: 100%;
    padding: 4.5px 5px;
  `,
}

const BtnProperty = styled(ProductBtn)`
  @media (max-width: 450px) {
    font-size: 16px;
    padding: 11px 13px;
  }
`

const CardClose = styled(CloseBtn)`
  position: absolute;
  top: 30px;
  right: 30px;
`