import React from 'react'
import { styled } from 'styled-components'
import { Header } from '../../../widgets/header/ui/header'
import { Home } from '../../../widgets/Home/ui/home'
import { Recommend } from '../../../widgets/recommend/ui/recommend'
import { Footer } from '../../../widgets/footer/ui/footer'

type Props = {
  searchValue: string;
}

export const HomePage = ({ searchValue }: Props) => {
  return (
    <Styled.container>
        <Home />
        <Styled.content>
          <Recommend searchValue={searchValue} title='Рекомендуем' />
          <Footer />
        </Styled.content>
    </Styled.container>
  )
}

const Styled = {
  container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  content: styled.div`
    margin-top: -20px;
  `
}