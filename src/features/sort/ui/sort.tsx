import React from 'react'
import { styled } from 'styled-components'
import { Sortby } from '../../sortBy/ui/sortby'

type Props = {
  value: { name: string; sortPropery: string; }; 
  onChangeSort: (sortType: any) => void;
}

export const Sort = ({ value, onChangeSort }: Props) => {
  const sortList = [
    { name: 'Популярности ▼', sortPropery: 'rating' }, 
    { name: 'Популярности ▲', sortPropery: '-rating' }, 
    { name: 'Цене ▼', sortPropery: 'price' }, 
    { name: 'Цене ▲', sortPropery: '-price' }, 
    { name: 'Алфавиту ▼', sortPropery: 'title' }, 
    { name: 'Алфавиту ▲', sortPropery: '-title' },
  ]
  const [open, setOpen] = React.useState(false)
  const [selectedSort, setSelectedSort] = React.useState<string>('Популярности ▼');

  const handleSortClick = (category: number) => {
    onChangeSort(category);
    setSelectedSort(value.name);
    setOpen(false);
  };
  return (
    <Styled.content onClick={() => setOpen(!open)}>
        <Styled.sortText>Сортировка по:</Styled.sortText>
        <Styled.sort>{value.name}</Styled.sort>
        {
          open && (
            <Styled.sortBy>
              {
                sortList.map((obj, i) => {
                  return (
                    <Sortby
                      key={i}
                      nameSort={obj.name}
                      // @ts-ignore
                      onClick={() => handleSortClick(obj)}
                      selected={value.sortPropery === obj.sortPropery}
                    />
                  )
                })
              }
          </Styled.sortBy>
          )
        }
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    cursor: pointer;
    position: absolute;
    border-radius: 10px;
    background-color: #FFB258;
    padding: 14px 23px;
    right: 30px;
    top: 10px;

    @media (max-width: 1200px) {
      position: relative;
      top: 0;
      right: 0;
    }

    @media (max-width: 630px) {
      padding: 9px 15px;
    }

    @media (max-width: 400px) {
      max-width: 150px;
    }
  `,
  sortText: styled.p`
    display: inline-block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #fff;
    margin: 0;
    margin-right: 17px;

    @media (max-width: 630px) {
      font-size: 15px;
    }
  `,
  sort: styled.p`
    display: inline-block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    color: #FF6B00;
    border-bottom: 2px dotted #FF6B00;
    margin: 0;

    @media (max-width: 630px) {
      font-size: 15px;
    }
  `,
  sortBy: styled.div`
    width: 100%;
    border-radius: 0 0 10px 10px;
    padding-bottom: 5px;
    top: 44px;
    padding-top: 10px;
    left: 0;
    position: absolute;
    background-color: #FFB258;

    @media (max-width: 630px) {
      top: 35px;
    }
  `
}