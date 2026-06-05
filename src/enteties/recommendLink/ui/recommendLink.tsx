import React from 'react'
import { styled } from 'styled-components'

type Props = {
  nameBtn?: string;
  onClick: () => void;
  selected: boolean;
}

export const RecommendLink = ({ nameBtn, onClick, selected }: Props) => {
  return (
    <Styled.item>
        <Styled.link selected={selected} onClick={onClick}>{nameBtn}</Styled.link>
    </Styled.item>
  )
}

const Styled = {
  item: styled.li`
    &:not(:last-child) {
      margin-right: 20px;
    }

    @media (max-width: 800px) {
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  `,
  link: styled.button<{ selected: boolean }>`
    cursor: pointer;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    border: none;
    padding: 15px 21px;
    background-color: ${(props) => (props.selected ? '#e7e7e7' : 'transparent')};
    transition: background-color .2s ease-in-out;
    border-radius: 10px;

    &:hover {
      background-color: #f3f3f3;
    }

    @media (max-width: 800px) {
      padding: 12px 17px;
    }
  `
}