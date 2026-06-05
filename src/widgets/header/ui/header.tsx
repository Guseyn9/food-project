import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { CustomLogo } from '../../../shared/customLogo/ui/customLogo'
import { Search } from '../../../shared/search/ui/search'
import { useNavigate } from 'react-router-dom'
import { HeaderLink } from '../../../enteties/headerLink/ui/headerLink'
import { HeaderCart } from '../../../enteties/headerCart/ui/headerCart'
import { useSelector } from 'react-redux'
import { Burger } from '../../../shared/burger/ui/burger'
import { CloseBtn } from '../../../enteties/closeBtn/ui/closeBtn'
import { Login } from '../../../enteties/login/ui/login'
import { selectUser } from '../../../shared/common/model/useStore/selector'
import { useAppDispatch } from '../../../app/store/store'
import { retrieveToken } from '../../../shared/common/model/useStore/slice'
import { User } from '../../../enteties/user/ui/user'

type Props = {
  searchValue?: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ searchValue, setSearchValue }: Props) => {
  // @ts-ignore
  const {items, totalPrice} = useSelector((state) => state.cart)
  const headerLinks = ['Главная', 'О нас', 'Ассортимент', 'Контакты', 'Акции']
  const [activeLink, setActiveLink] = React.useState<string>('Главная');
  const isMounted = React.useRef(false);
  const [isMenuVisible, setMenuVisible] = React.useState(false);

  const { user } = useSelector(selectUser)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(retrieveToken())
  }, [])

  const handleLinkClick = (name: string) => {
    setActiveLink(name)
  }

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items)
      localStorage.setItem('card', json)
    }
    isMounted.current = true;
  }, [items])

  const pathname = window.location.pathname;

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }
  const goBasket = () => {
    navigate('/emptybasket')
  }
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
  const goLogin = () => {
    navigate('/login')
  }
  return (
    <Styled.header>
      <Styled.content>
        <Styled.logo>
          <Burger onClick={() => setMenuVisible(!isMenuVisible)} />
          <HeaderLogo onClick={goHome} />
        </Styled.logo>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        <Styled.headerNav className={isMenuVisible ? 'visible' : ''}>
            <Styled.headerList>
            {headerLinks.map((name, i) => (
            <HeaderLink
              key={i}
              nameLink={name}
              onClick={() => {
                handleLinkClick(name);
                switch (name) {
                  case 'Главная':
                    goHome();
                    break;
                  case 'О нас':
                    goAbout();
                    break;
                  case 'Ассортимент':
                    goAssortment();
                    break;
                  case 'Контакты':
                    goContacts();
                    break;
                  case 'Акции':
                    goStocks();
                    break;
                  default:
                    break;
                }
              }}
              selected={activeLink === name}
            />
          ))}
            </Styled.headerList>
            <CloseNav onClick={() => setMenuVisible(false)} />
        </Styled.headerNav>
          <HeaderBasket className={isMenuVisible ? 'visible' : ''} totalPrice={totalPrice} onClick={goBasket} />
      </Styled.content>
    </Styled.header>
  )
}

const Styled = {
  header: styled.header`
    position: relative;
    z-index: 2;
    padding: 18px 0;
    border-radius: 0 0 20px 20px;
    background-color: #ffffff;
    box-shadow: 0px 4px 20px -10px;

    @media (max-width: 1400px) {
      padding: 18px 50px;
    }

    @media (max-width: 500px) {
      padding: 18px 30px;
    }
  `,
  content: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    @media (max-width: 1400px) {
      justify-content: space-between;
    }
  `,
  logo: styled.div`
    display: flex;
    align-items: center;
  `,
  headerNav: styled.nav`
    margin-right: auto;

    @media (max-width: 1400px) {
      visibility: hidden;
      align-items: normal;
      position: absolute;
      left: 0;
      top: 0;
      height: 100vh;
      background-color: #fff;
      border-radius: 0px 0px 24px 24px;
      padding-left: 50px;
      padding-top: 50px;
      width: 40%;
      transform: translateX(-100%);
      z-index: 2;
      transition: visibility 0.3s ease-in-out, transform 0.3s ease-in-out;

      &.visible {
        visibility: visible;
        transform: none;
        z-index: 4;
      }
    }

    @media (max-width: 630px) {
      padding-top: 90px;
      width: 50%;
    }
  `,
  headerList: styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;

    @media (max-width: 1400px) {
      flex-direction: column;
    }
  `,
  headerRight: styled.div`
    position: relative;
    display: flex;
    align-items: center;
  `
}

const CloseNav = styled(CloseBtn)`
  display: none;

  @media (max-width: 1400px) {
    display: flex;
    position: absolute;
    top: 30px;
    right: 30px;
  }

  @media (max-width: 630px) {
    right: unset;
    left: 50px;
  }
`

const HeaderLogo = styled(CustomLogo)`
  @media (max-width: 1400px) {
    margin-right: 0;
  }

  @media (max-width: 800px) {
    width: 94px;
  }
`

const HeaderBasket = styled(HeaderCart)`
  &.visible {
    visibility: visible;
    transform: none;
    z-index: 5;
    right: 30px;
    top: 36px;
    left: 35%;
  }
  margin-right: 15px;
`