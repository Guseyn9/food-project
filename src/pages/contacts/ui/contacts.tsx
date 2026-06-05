import React from 'react'
import { styled } from 'styled-components'
import { SectionTitle } from '../../../enteties/sectionTitle/ui/sectionTitle'
import { RecomBtn } from '../../../enteties/recombtn/ui/recomBtn'
import dawnImg from '../config/dawn.jpg'
import spiralImg from '../config/spiral.jpg'

type Props = {}

export const Contacts = (props: Props) => {
  return (
    <Styled.contacts>
        <Styled.container>
          <ContactsTitle name='Контакты' />
          <Styled.content>
            <Styled.contactsLeft>
                  <Styled.contactsForm>
                      <Styled.textArea placeholder='Комментарий' />
                      <Styled.formContent>
                        <Styled.input required placeholder='Email' />
                        <ContactsInput required placeholder='Имя' /> 
                      </Styled.formContent>
                      <ContactsBtn name='Отправить' />
                  </Styled.contactsForm>
              </Styled.contactsLeft>
            <Styled.contactsRight>
                  <Styled.rightTitle>Оставить заявку</Styled.rightTitle>
                  <Styled.rightDescr>
                      Оставьте ваши данные, указав в графе “Комментарий”  желаемую еду или продукт, который вы хотели бы видеть в нашем магазине 
                  </Styled.rightDescr>
                  <Styled.icons>
                      <Styled.iconDown src={dawnImg} alt="" />
                      <Styled.iconSpiral src={spiralImg} alt="" />
                  </Styled.icons>
            </Styled.contactsRight>
          </Styled.content>
        </Styled.container>
    </Styled.contacts>
  )
}

const Styled = {
  contacts: styled.section`
    padding: 60px 50px 0 50px;

    @media (max-width: 780px) {
      padding-bottom: 50px;
    }

    @media (max-width: 780px) {
      padding: 40px 30px 30px 30px;
    }
  `,
  container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
  `,
  content: styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 780px) {
      flex-direction: column-reverse;
    }
  `,
  contactsLeft: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 20px;

    @media (max-width: 780px) {
      margin-right: 0;
    }
  `,
  contactsForm: styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    @media (max-width: 780px) {
      width: 100%;
      margin-bottom: 0;
    }
  `,
  formContent: styled.div`
    display: flex;
    margin-bottom: 30px;

    @media(max-width: 1000px) {
      flex-direction: column;
    }
  `,
  textArea: styled.textarea`
    // grid-column: 1 / 3;
    max-width: 100%;
    height: 200px;
    border: none;
    background-color: #E9E9E9;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 17px;
    padding-left: 29px;
    margin-bottom: 30px;
    resize: none;
  `,
  input: styled.input`
    // grid-column: 2;
    // grid-row: 2;
    width: 50%;
    background-color: #E9E9E9;
    font-size: 20px;
    line-height: 24px;
    font-weight: 600;
    padding-top: 22px;
    padding-left: 29px;
    padding-bottom: 22px;
    border: none;

    @media(max-width: 1000px) {
      max-width: 100%;
      width: unset;
    }
  `,
  contactsRight: styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 780px) {
      margin-bottom: 30px;
    }
  `,
  rightTitle: styled.h3`
    font-size: 28px;
    line-height: 34px;
    font-weight: 600;
    margin: 0;
    margin-bottom: 16px;

    @media (max-width: 480px) {
      font-size: 24px;
    }
  `,
  rightDescr: styled.p`
    max-width: 534px;
    font-size: 19px;
    line-height: 23px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 20px;

    @media (max-width: 480px) {
      font-size: 16px;
      line-height: 23px;
    }
  `,
  icons: styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 780px) {
      max-width: 534px;
    }

    @media (max-width: 480px) {
      display: none;
    }
  `,
  iconDown: styled.img`
    @media (max-width: 1000px) {
      width: 222px;
      height: 222px;
    }
  `,
  iconSpiral: styled.img`
    @media (max-width: 1000px) {
      width: 123px;
    }
  `
}

const ContactsTitle = styled(SectionTitle)`
  margin-bottom: 28px;

  @media (max-width: 480px) {
    font-size: 30px;
  }
`

const ContactsInput = styled(Styled.input)`
  grid-column: 1;
  margin-left: 30px;

  @media (max-width: 1000px) {
    margin-left: 0;
    margin-top: 30px;
  }
`

const ContactsBtn = styled(RecomBtn)`
  max-width: 190px;
`