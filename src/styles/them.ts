import baseStyled, { css, ThemedStyledInterface } from 'styled-components';

/**
 * 공통적으로 사용할 테마(media query, color 등)
 */
const sizes = {
  desktop: 1167,
  tablet: 990,
  phone: 576
};

// Iterate through the sizes and create a media template
const media = {
  desktop: (...args) => undefined,
  tablet: (...args) => undefined,
  phone: (...args) => undefined
};

Object.keys(sizes).reduce((acc, label: string) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(args.shift(), ...args)}
    }
  `;
  return acc;
}, media);

const color = {
  blue: '#74b9ff',
  yellow: '#ecc65b',
  yellowGreen: '#a2ce49',
  gray: '#454c53',
  pink: '#db72b8',
  black: '#24272a'
};

const theme = {
  color,
  media
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
