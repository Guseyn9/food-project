import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import { axiosInastanse } from '../../../shared/common/api/axiosInstance'
import { RecommendHeader } from '../../recommendHeader/ui/recommendHeader'
import { useNavigate } from 'react-router-dom'
import { ProductCard } from '../../../enteties/productCard/ui/productCard'
import { RecomBtn } from '../../../enteties/recombtn/ui/recomBtn'
import { SectionTitle } from '../../../enteties/sectionTitle/ui/sectionTitle'
import { Sort } from '../../../features/sort/ui/sort'
import Skeleton from './skeleton'

type Props = {
  title?: string;
  searchValue: string;
  className?: string;
}

export const Recommend = ({ title, searchValue, className }: Props) => {

  const [categoryId, setCategoryId] = React.useState(0)
  const [sortType, setSortType] = React.useState({
    name: 'Популярности ▼', 
    sortPropery: 'rating'
  })
  const [isLoading, setIsLoading] = React.useState(true)
  const navigate = useNavigate()

  const goAssortment = () => {
    navigate('/assortment')
  }
  const [items, setItems] = React.useState([])

  const nameLink = ['Все', 'Бургеры', 'Пиццы', 'Роллы', 'Напитки', 'Салаты']
  const [selectedLink, setSelectedLink] = React.useState<string>('')

  const handleLinkClick = (name: string) => {
    setSelectedLink(name)
  }

  useEffect(() => {
    setIsLoading(true)

    const sortBy = sortType.sortPropery.replace('-', '');
    const order = sortType.sortPropery.includes('-') ? 'asc' : 'desc'
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    const getGoods = async () => {
      try {
        const resp = await axiosInastanse.get(`/items?${category}&sortBy=${sortBy}&order=${order}`,)
        .then((resp) => {
          setItems(resp.data)
          setIsLoading(false)
        })
      } catch (error) {}
    }
    getGoods()
  }, [categoryId, sortType])

  const pathName = window.location.pathname
  const skeletons = [...new Array(8)].map((_, index) => <SkeletonMargin key={index} />);

  const pizzas = items
  .filter(obj => {
    // @ts-ignore
    if (obj.title && obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  }) // @ts-ignore
  .map((obj) => <ProductCard {...obj} />);

  return (
    <Styled.recommend className={className}>
        <Styled.container>
            <RecomTitle name={title} />
                <Styled.recomendHeader>
                  <RecommendHeader value={categoryId} onClickCategory={(id: number) => setCategoryId(id)} />
                  <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
                </Styled.recomendHeader>
            <Styled.productsContent>
                {
                  isLoading ? skeletons : pizzas
                }
            </Styled.productsContent>
            <Styled.btnBlock>
              {pathName === '/' && <RecomBtn name='Все продукты' onClick={goAssortment} />}
            </Styled.btnBlock>
        </Styled.container>
    </Styled.recommend>
  )
}

const Styled = {
  recommend: styled.section`
    top: -20px;
    padding: 60px 50px;
    background-color: #e7e7e7;

    @media (max-width: 500px) {
      padding: 30px 30px;
    }
  `,
  container: styled.div`
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  productsContent: styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1390px) {
      justify-content: space-between;
    }
  `,
  btnBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  recomendHeader: styled.div`
    position: relative;

    @media (max-width: 1200px) {
      display: flex;
      background-color: #fff;
      border-radius: 15px;
      flex-direction: column;
      align-items: center;
      padding-bottom: 30px;
      margin-bottom: 30px;
    }

    @media (max-width: 630px) {
      padding-right: 20px;
      padding-left: 20px;
    }
  `
}

const RecomTitle = styled(SectionTitle)`
  margin-bottom: 25px;

  @media (max-width: 500px) {
    font-size: 30px;
    margin-bottom: 15px;s
  }
`

const SkeletonMargin = styled(Skeleton)`
  &:not(:nth-child(4n)) {
    margin-right: 30px;
  }
`
