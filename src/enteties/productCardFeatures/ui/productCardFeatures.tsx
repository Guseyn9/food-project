import React from 'react'
import { styled } from 'styled-components'
import { CardSize } from './cardSize'

type Props = {
  sizes: number[];
  types: number[];
  onTypeChange: (typeNames: string[], activeType: number) => void;
  onSizeChange: (activeSize: number) => void;
}

export const ProductCardFeatures = ({ sizes, types, onTypeChange, onSizeChange }: Props) => {
  const typeNames = ['среднее', 'большое']

  const [activeType, setActiveType] = React.useState(0);

  const handleTypeClick = (index: number) => {
    setActiveType(index);
    onTypeChange(typeNames, index);
  };

  const [activeCardSize, setActiveSize] = React.useState(0);

  const handleSizeClick = (index: number) => {
    setActiveSize(index);
    onSizeChange(index)
  };

  return (
    <Styled.cardProperty>
        <Styled.cardTypes>
          {
            types.map((type, index) => {
              return (
                <Styled.cardType
                  key={index}
                  onClick={() => handleTypeClick(index)}
                  isActive={activeType === index}
                ><Styled.cardTypeText>
                    {typeNames[type]}
                  </Styled.cardTypeText>
                </Styled.cardType>
              )
            })
          }
        </Styled.cardTypes>
        <Styled.cardSizes>
          {sizes && sizes.length > 0 && (
              <>
                {
                  sizes.map((size, index) => {
                    return (
                      <Styled.cardSize
                        key={index}
                        onClick={() => handleSizeClick(index)}
                        isActiveSize={activeCardSize === index}
                      ><Styled.cardSizeText>
                          {size}см
                        </Styled.cardSizeText>
                      </Styled.cardSize>
                    )
                  })
                }
            </>
          )}
        </Styled.cardSizes>
    </Styled.cardProperty>
  )
}

const Styled = {
  cardProperty: styled.div`
    background-color: #E7E7E7;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 450px) {
      padding: 10px;
    }
  `,
  cardTypes: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
  `,
  cardType: styled.div<{ isActive: boolean }>`
    border-radius: 10px;
    cursor: pointer;
    padding: 15px 50px;
    background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};

    @media (max-width: 975px) {
      padding: 15px 40px;
    }

    @media (max-width: 730px) {
      padding: 10px 30px;
    }

    @media (max-width: 450px) {
      padding: 10px 20px;
    }
  `,
  cardTypeText: styled.span`
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;

    @media (max-width: 450px) {
      font-size: 18px;
    }
  `,
  cardSizes: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  cardSize: styled.div<{ isActiveSize: boolean }>`
    border-radius: 10px;
    cursor: pointer;
    padding: 12px 29px;
    background-color: ${({ isActiveSize }) => (isActiveSize ? '#fff' : 'transparent')};

    @media (max-width: 730px) {
      padding: 10px 25px;
    }

    @media (max-width: 450px) {
      padding: 10px 20px;
    }
  `,

  cardSizeText: styled.span`
    display: inline-block;
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;

    @media (max-width: 450px) {
      font-size: 16px;
    }
  `,
}