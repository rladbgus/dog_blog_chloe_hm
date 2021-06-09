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
    margin:40px 100px;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {

  }
  img {
    display: block;
    width: 100px;
    height: 100px;
  }

  @media only screen and (max-width: 768px) {
    body {
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
