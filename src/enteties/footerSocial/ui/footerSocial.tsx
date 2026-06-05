import React from 'react'
import { styled } from 'styled-components'

type Props = {
  imageUrl?: any;
}

export const FooterSocial = ({ imageUrl }: Props) => {
  return (
    <Styled.item>
        <Styled.link>
          <Styled.linkImg src={imageUrl} alt="" />
        </Styled.link>
    </Styled.item>
  )
}

const Styled = {
  item: styled.li`
    &:not(:last-child) {
      margin-right: 30px;
    }
  `,
  link: styled.a`
    cursor: pointer;
  `,
  linkImg: styled.img`
    width: 58px;
    height: 58px;

    @media (max-width: 500px) {
      width: 45px;
      height: 45px;
    }
  `
}