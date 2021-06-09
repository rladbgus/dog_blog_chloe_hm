import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/**
 * reset 또는 공통적으로 사용하는 css
 */
const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body{
    background-color: #ffffff;
    margin:70px auto;
    width: 990px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {

  }
  img {
    display: block;
    width: 185px;
    height: 185px;
    border-radius: 5%
  }

  @media only screen and (max-width: 990px) {
    body {
      font-size: 18px;
    }
    img{
      width:100px;
      height: 100px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 15px;
    }
    img{
      width: 50px;
      height: 50px;
    }
  }
`;

export default GlobalStyle;
