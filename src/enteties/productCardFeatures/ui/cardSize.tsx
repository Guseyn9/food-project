import React from 'react'
import { styled } from 'styled-components'

type Props = {
  sizes: number[]
}

export const CardSize = ({ sizes }: Props) => {
  const [activeSize, setActiveSize] = React.useState(0);

  const handleSizeClick = (index: number) => {
    setActiveSize(index);
  };
  return (
    <>
      {
        sizes.map((size, index) => {
          return (
            <Styled.cardSize
              key={index}
              onClick={() => handleSizeClick(index)}
              isActiveSize={activeSize === index}
            >{size}см</Styled.cardSize>
          )
        })
      }
    </>
  )
}

const Styled = {
  cardSize: styled.div<{ isActiveSize: boolean }>`
    border-radius: 10px;
    cursor: pointer;
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    padding: 12px 29px;
    background-color: ${({ isActiveSize }) => (isActiveSize ? '#fff' : 'transparent')};
  `,
}