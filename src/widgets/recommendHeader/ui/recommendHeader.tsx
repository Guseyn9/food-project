import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { RecommendLink } from '../../../enteties/recommendLink/ui/recommendLink'

type Props = {
  value?: number;
  onClickCategory: (id: number) => void;
}

export const RecommendHeader = ({ value, onClickCategory }: Props) => {

  const nameLink = ['Все', 'Бургеры', 'Пиццы', 'Роллы', 'Напитки', 'Салаты']
  const [selectedLink, setSelectedLink] = React.useState<string>('')

  const handleLinkClick = (name: string) => {
    setSelectedLink(name)
  }
  return (
    <Styled.content>
        <Styled.list>
            {nameLink.map((name, i) => {
              return (
                <RecommendLink
                  key={i}
                  nameBtn={name} 
                  onClick={() => onClickCategory(i)}
                  selected={value === i}
                 />
              )
            })}
        </Styled.list>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 15px;
    padding: 10px 30px 10px 25px;
    margin-bottom: 30px;

    @media (max-width: 1200px) {
      padding: 0;
      padding-top: 10px;
      justify-content: center;
      align-items: flex-start;
    }

    @media (max-width: 800px) {
      width: 100%;
    }

    @media (max-width: 630px) {
      overflow: scroll;
    }
  `,
  list: styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 800px) {
      width: 100%;
      justify-content: space-between;
      padding: 0 20px;
    }
  `
}