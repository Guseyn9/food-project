import React from 'react'
import { styled } from 'styled-components'

type Props = {
  nameSort?: string;
  onClick?: () => void;
  selected: boolean;
}

export const Sortby = ({ nameSort, onClick, selected }: Props) => {
  return (
    <Styled.sort selected={selected}>
        <Styled.sortText selected={selected} onClick={onClick}>{nameSort}</Styled.sortText>
    </Styled.sort>
  )
}

const Styled = {
  sort: styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    background-color: ${(props) => (props.selected ? '#FF9635' : 'inherit')};
    border-bottom: 2px solid #fff;
    padding-left: 23px;
    transition: background-color .2s ease-in-out;

    &:last-child {
      border: none;
      border-radius: 0 0 10px 10px;
    }

    &:hover {
      background-color: #ff96358a;
    }

    @media (max-width: 630px) {
      padding-left: 15px;
    }
  `,
  sortText: styled.p<{ selected: boolean }>`
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    color: ${(props) => (props.selected ? '#FD5B00' : '#fff')};
    padding: 11px 0;
    margin: 0
  `
}