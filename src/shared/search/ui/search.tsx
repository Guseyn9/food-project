import React from 'react'
import { styled } from 'styled-components'
import { CloseBtn } from '../../../enteties/closeBtn/ui/closeBtn'

type Props = {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({searchValue, setSearchValue}: Props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <Styled.search className={isVisible ? 'visible' : ''}>
        <Styled.searchInput value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder='Поиск товаров' />
        <Styled.searchSvg className={isVisible ? 'visible' : ''} onClick={() => setIsVisible(true)} width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="16.6428" y1="15.234" x2="22.7711" y2="20.3763" stroke="#969696" stroke-width="2"/><circle cx="10" cy="10" r="9" stroke="#969696" stroke-width="2"/></Styled.searchSvg>
        <SearchClose className={isVisible ? 'visible' : ''} onClick={() => setIsVisible(false)} />
    </Styled.search>
  )
}

const Styled = {
  search: styled.div`
    position: relative;
    margin-right: 25px;

    @media (max-width: 950px) {
      margin-right: 20px;
    }

    @media (max-width: 630px) {
      margin-right: 0;
    }

    @media (max-width: 470px) {
      position: absolute;
      right: 30px;
      top: -50px;
      transition: top .3s ease-in-out;

      &.visible {
        top: 13px;
      }
    }
  `,
  searchInput: styled.input`
    width: 370px;
    background-color: inherit;
    padding: 11px 36px;
    border: 1px solid #e7e7e7;
    font-size: 16px;
    line-height: 20px;
    border-radius: 10px;
    transition: border .2s ease-in-out;

    &:focus {
      outline: none;
    }

    @media (max-width: 950px) {
      width: 300px;
      margin-right: 0;
    }

    @media (max-width: 800px) {
      width: 220px;
      padding: 11px 20px;
    }

    @media (max-width: 470px) {
      position: relative;
      z-index: 2;
      background: #fff;
    }
  `,
  searchSvg: styled.svg`
    cursor: pointer;
    position: absolute;
    right: 36px; 
    top: 11px;

    line {
      transition: stroke .2s ease-in-out;
    }

    circle {
      transition: stroke .2s ease-in-out;
    }

    &:hover line {
      stroke: #000;
    }

    &:hover circle {
      stroke: #000;
    }

    @media (max-width: 470px) {
      top: 75px;
      z-index: 3;
      right: 20px;

      &.visible {
        top: 12px;
        right: 50px;
      }
    }
  `
}

const SearchClose = styled(CloseBtn)`
  display: none;

  @media (max-width: 470px) {
    visibility: hidden;
    position: absolute;
    right: 15px;
    top: 10px;
    z-index: 3;

    &.visible {
      visibility: visible;
      display: flex;
    }
  }
`