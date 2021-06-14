/**
 * 공통적으로 사용할 테마(color, media query등)
 */
const color = {
  blue: '#74b9ff',
  yellow: '#ecc65b',
  yellowGreen: '#a2ce49',
  gray: '#454c53',
  pink: '#db72b8',
  black: '#24272a'
};

const sizes = {
  desktop: 1167,
  tablet: 990,
  phone: 576
};

const theme = {
  color
};

export type Theme = typeof theme;
export default theme;
