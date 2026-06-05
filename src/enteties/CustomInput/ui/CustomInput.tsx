import { styled } from "styled-components"
import { COLORS } from "../../../shared/common/constants/COLORS"

type Props = {
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

export const CustomInput = (props: Props) => {
  return (
    <Styled.input onChange={props.onChange} 
                  placeholder={props.placeholder} 
                  className={props.className} 
                  type={props.type}
                  name={props.name}
                  value={props.value}
                  required={props.required}
                />
  )
}

const Styled = {
    input: styled.input`
      width: 100%;
      background-color: ${COLORS.WHITE};
      border: none;
      font-size: 16px;
      line-height: 19px;
      padding: 12px 24px;
      border-radius: 10px;
      border: 1px solid ${COLORS.GRAY_BACKGROUND};
      color: ${COLORS.GRAY_TEXT};
    `
}