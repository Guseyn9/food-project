import React from 'react'
import { styled } from 'styled-components'
import aboutImg from '../config/aboutImg.jpg'
import { SectionTitle } from '../../../enteties/sectionTitle/ui/sectionTitle'

type Props = {}

export const AboutUs = (props: Props) => {
  return (
    <Styled.aboutUs>
      <Styled.container>
          <AboutTitle name='О нас' />
          <Styled.content>
              <Styled.descr>
                Друзья, мы будем очень рады, если вы поможете стать нам лучше.
                Мы только начинаем развиваться в этой деятельности и поэтому 
                нам важна поддержка каждого! Нам важен каждый клиент, поэтому 
                вы можете поделиться обратной связью о нашем интернет магазине, 
                понравилась ли вам еда и вообще обо всём! Это можно сделать либо 
                написав нам в форме в разделе контакты, либо кликнув на наши 
                соц.сети в подвале сайта. Спасибо! 
              </Styled.descr>
              <Styled.aboutImage src={aboutImg} alt='' />
          </Styled.content>
      </Styled.container>
    </Styled.aboutUs>
  )
}

const Styled = {
  aboutUs: styled.section`
    padding: 60px 50px 0 50px;
    height: 90vh;
    background-color: #e7e7e7;

    @media (max-width: 1400px) {
      height: 94vh;
    }

    @media (max-width: 500px) {
      padding: 30px 30px;
      height: 97vh;
    }
  `,
  container: styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  content: styled.div`
    display: flex;

    @media (max-width: 980px) {
      flex-direction: column;
    }
  `,
  descr: styled.p`
    font-family: sans-serif;
    font-size: 19px;
    line-height: 30px;
    font-weight: 400;
    margin: 0;
    margin-right: 34px;

    @media (max-width: 980px) {
      margin-right: 0;
      margin-bottom: 30px;
    }

    @media (max-width: 500px) {
      font-size: 17px;
      line-height: 27px;
    }
  `,
  aboutImage: styled.img`
    max-width: 608px;
    height: 272px;
    border-radius: 20px;

    @media (max-width: 1150px) {
      max-width: 458px;
    }

    @media (max-width: 980px) {
      max-width: 100%;
    }
  `
}

const AboutTitle = styled(SectionTitle)`
  margin-bottom: 35px;

  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`