import { createGlobalStyle } from 'styled-components'

export const returnGlobalStyle = () => {
    return createGlobalStyle`
@font-face {
  font-family:  "Montserrat";
  src: url('/MontserratRegular.woff') format('woff');
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "Montserrat";
  src: url('/MontserratSemiBold.woff') format('woff');
  font-style: normal;
  font-weight: 600;
}

@font-face {
  font-family: 'Montserrat';
  src: url('/MontserratExtraBold.woff') format('woff');
  font-style: normal;
  font-weight: 800;
}

  body {
    font-family:  "Montserrat";
}
`
}