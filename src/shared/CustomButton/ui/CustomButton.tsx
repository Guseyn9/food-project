import { memo } from 'react'
import { styled } from 'styled-components'
import { COLORS } from '../../common/constants/COLORS'

type Props = {
    className?: string;
    children?: any
    bgColor?: string
    onClick?: () => void
    width?: string
    height?: string
    padding?: string
    margin?: string
    borderRadius?: string
    fz?: string
    fw?: string
    border?: string
    textColor?: string
    hoverBgColor?: string
    disabled?: boolean
}

export const CustomButton = memo((props: Props) => {
    return (
        <Styled.button
            className={props.className}
            onClick={props.onClick}
            {...props}
            disabled={props.disabled}
        >
            {props.children}
        </Styled.button>
    )
})

const Styled = {
    button: styled.button<Props>`
        cursor: pointer;
        font-family: 'Montserrat';
        overflow: hidden;
        position: relative;
        transition: background-color .3s ease-in-out, color .3s ease-in-out;
        background-color: ${({ bgColor }: Props) =>
            bgColor ? bgColor : COLORS.ORANGE_BG};
        font-size: ${({ fz }: Props) => (fz ? fz : '22px')};
        font-weight: ${({ fw }: Props) => (fw ? fw : '600')};
        width: ${({ width }: Props) => (width ? width : '')};
        height: ${({ height }: Props) => (height ? height : '')};
        padding: ${({ padding }: Props) => (padding ? padding : '13px 0')};
        margin: ${({ margin }: Props) => (margin ? margin : '')};
        border-radius: ${({ borderRadius }: Props) =>
            borderRadius ? borderRadius : '10px'};
        border: ${({ border }: Props) => (border ? border : 'none')};
        color: ${({ textColor }: Props) =>
            textColor ? textColor : COLORS.WHITE};
        &:hover {
            background-color: ${({ hoverBgColor }: Props) => hoverBgColor};
        }
    `,
}
