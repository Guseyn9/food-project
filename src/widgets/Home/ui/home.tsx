import React from 'react';
import { styled } from 'styled-components';
import homeBg from '../config/homeBg.jpg';
import homeBg2 from '../config/homeBg_2.jpg';
import homeBg3 from '../config/homeBg_3.jpg';
import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperSlide from 'swiper';

import 'swiper/css';

import { Autoplay, Pagination } from 'swiper/modules';

type Props = {}

export const Home = (props: Props) => {
  const navigate = useNavigate()

  const goAssortment = () => {
    navigate('/assortment')
  }
  return (
    <Styled.home>
        <Swiper
            loop={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[ Autoplay, Pagination ]}
          >
              <SwiperSlide><Styled.homeBg src={homeBg} alt="" /></SwiperSlide>
              <SwiperSlide><Styled.homeBg src={homeBg2} alt="" /></SwiperSlide>
              <SwiperSlide><Styled.homeBg src={homeBg3} alt="" /></SwiperSlide>
        </Swiper>
      <Styled.container>
        <Styled.content>
            <Styled.homeTitle>
                Заказывай еду с доставкой на дом
            </Styled.homeTitle>
            <Styled.homeDescr>
                Интернет магазин еды с доставкой на дом, позволит тебе поесть не выходя из дома
            </Styled.homeDescr>
            <Styled.homeBtn onClick={goAssortment}>
              Заказать
              <Styled.homeBtnSvg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31.7071 9.03198C32.0976 8.64146 32.0976 8.00829 31.7071 7.61777L25.3431 1.25381C24.9526 0.863283 24.3195 0.863283 23.9289 1.25381C23.5384 1.64433 23.5384 2.2775 23.9289 2.66802L29.5858 8.32487L23.9289 13.9817C23.5384 14.3723 23.5384 15.0054 23.9289 15.3959C24.3195 15.7865 24.9526 15.7865 25.3431 15.3959L31.7071 9.03198ZM1.32477e-09 9.32487L31 9.32487L31 7.32487L-1.32477e-09 7.32487L1.32477e-09 9.32487Z" fill="white"/></Styled.homeBtnSvg>
            </Styled.homeBtn>
          </Styled.content>
      </Styled.container>
    </Styled.home>
  )
}

const Styled = {
    home: styled.section`
      z-index: 0;
      top: -20px;
      position: relative;
      background-color: #000;
      max-height: 600px;

      @media (max-width: 800px) {
        height: 400px;
      }

      @media (max-width: 420px) {
        height: 360px;
      }
    `,
    container: styled.div`
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
    `,
    content: styled.div`
      z-index: 2;
      position: absolute;
      top: 0;
      padding-top: 100px;

      @media (max-width: 1400px) {
        padding: 100px 0 0 50px;
      }

      @media (max-width: 1000px) {
        padding: 60px 0 0 50px;
      }

      @media (max-width: 500px) {
        padding: 60px 20px 0 30px;
      }
    `,
    homeBg: styled.img`
      opacity: 75%; 
      width: 100%;
      height: 100%;

      @media (max-width: 800px) {
        height: 400px;
      }

      @media (max-width: 420px) {
        height: 360px;
      }
    `,
    homeTitle: styled.h1`
      max-width: 497px;
      font-size: 50px;
      line-height: 61px;
      font-weight: 700;
      color: #fff;
      margin: 0;
      margin-bottom: 25px;

      @media (max-width: 1400px) {
        font-size: 42px;
        line-height: 51px;
      }

      @media (max-width: 1000px) {
        font-size: 37px;
        line-height: 46px;
        margin-bottom: 20px;
      }

      @media (max-width: 800px) {
        font-size: 33px;
        line-height: 41px;
        margin-bottom: 15px;
      }

      @media (max-width: 420px) {
        font-size: 29px;
        line-height: 35px; 
      } 
    `,
    homeDescr: styled.p`
      max-width: 444px;
      font-size: 23px;
      line-height: 30px;
      color: #fff;
      font-weight: 600;
      margin: 0;
      margin-bottom: 50px;

      @media (max-width: 1400px) {
        font-size: 20px;
        line-height: 27px;
        margin-bottom: 30px;
      }

      @media (max-width: 1000px) {
        font-size: 18px;
        line-height: 25px;
        margin-bottom: 25px;
      }

      @media (max-width: 800px) {
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 20px;
      }

      @media (max-width: 420px) {
        font-size: 14px;
        line-height: 21px;
      }
    `,
    homeBtn: styled.button`
      display: flex;
      align-items: center;
      cursor: pointer;
      border: none;
      background-color: #FF6B00;
      font-size: 22px;
      line-height: 27px;
      font-weight: 600;
      padding: 18px 23px;
      border-radius: 36px;
      color: #fff;
      transition: background-color .2s ease-in-out;

      &:hover {
        background-color: #ff852d;
      }

      &:active {
        background-color: #e56000;
      }

      @media (max-width: 800px) {
        font-size: 18px;
        padding: 14px 18px;
      }
    `,
    homeBtnSvg: styled.svg`
      margin-left: 7px;
    `
  }