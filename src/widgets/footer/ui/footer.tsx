import React from 'react'
import { CustomLogo } from '../../../shared/customLogo/ui/customLogo'
import { styled } from 'styled-components'
import { FooterLink } from '../../../enteties/footerLink/ui/footerLink'
import { FooterSocial } from '../../../enteties/footerSocial/ui/footerSocial'
import { useNavigate } from 'react-router-dom'

import instSvg from '../../../enteties/footerSocial/config/inst.svg'
import vkSvg from '../../../enteties/footerSocial/config/vk.svg'
import twitterSvg from '../../../enteties/footerSocial/config/twitter.svg' 

type Props = {}

export const Footer = (props: Props) => {
  const footerLink = ['Ассортимент', 'Контакты', 'О нас', 'Акции',]
  const footerSocial = [instSvg, vkSvg, twitterSvg]
  const navigate = useNavigate()

  const goAssortment = () => {
    navigate('/assortment')
  }
  const goAbout = () => {
    navigate('/about')
  }
  const goContacts = () => {
    navigate('/contacts')
  }
  const goStocks = () => {
    navigate('/stocks')
  }
  return (
    <Styled.footer>
        <Styled.container>
          <Styled.content>
            <FooterLogo />
            <Styled.listLinks>
                <FooterLink onClick={goAssortment} nameLink='Ассортимент' />
                <FooterLink onClick={goContacts} nameLink='Контакты' />
                <FooterLink onClick={goAbout} nameLink='О нас' />
                <FooterLink onClick={goStocks} nameLink='Акции' />
            </Styled.listLinks>
            <Styled.listSocial>
                {
                  footerSocial.map((social, i) => {
                    return (
                      <FooterSocial key={i} imageUrl={social} />
                    )
                  })
                }
            </Styled.listSocial>
            </Styled.content>
        </Styled.container>
        <Styled.footerYear>food ® 2023</Styled.footerYear>
    </Styled.footer>
  )
}

const Styled = {
  footer: styled.footer`
    position: relative;
    padding-top: 40px;
    padding-bottom: 84px;
  `,
  container: styled.div`
    display: flex;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  content: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;

    @media (max-width: 1130px) {
      flex-direction: column;
    }

    @media (max-width: 500px) {
      padding: 0 30px;
    }
  `,
  listLinks: styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    @media (max-width: 1130px) {
      margin-bottom: 20px;
    }

    @media (max-width: 700px) {
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  `,
  listSocial: styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  footerYear: styled.div`
    position: absolute;
    bottom: 5px;
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid #7E7E7E;
    font-size: 30px;
    line-height: 37px;
    font-weight: 600;
    color: #7E7E7E;

    @media (max-width: 700px) {
      font-size: 25px;
    }
  `
}

const FooterLogo = styled(CustomLogo)`
  @media (max-width: 1130px) {
    margin-bottom: 20px;
    margin-right: 0;
  }
`