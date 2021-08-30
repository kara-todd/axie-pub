import React from 'react';
import { css, Global } from '@emotion/react';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const base = css`
  :root {
    --max-width: 1280px;

    --axie-card-min-width: 300px;
    --axie-card-bg: rgba(255, 255, 255, 0.05);

    --color-aquatic: #00b8ce;
    --color-beast: #ffb812;
    --color-bug: #ff5341;
    --color-bird: #ff8bbd;
    --color-plant: #6cc000;
    --color-reptile: #dc8be4;

    --color-mech: #c6bdd4;
    --color-dawn: #beceff;
    --color-dusk: #129092;

    --color-aquatic-light: #4cb6cd;
    --color-aquatic-dark: #3479b7;
    --color-beast-light: #fdb610;
    --color-beast-dark: #e37c11;
    --color-bug-light: #ef5243;
    --color-bug-dark: #b72c2c;
    --color-bird-light: #f38abc;
    --color-bird-dark: #d2536f;
    --color-plant-light: #6cc001;
    --color-plant-dark: #428b13;
    --color-reptile-light: #9b47cc;
    --color-reptile-dark: #7736c1;

    --color-axie: #8d65ff;
    --color-savannah: #f99e2e;
    --color-forest: #6cc000;
    --color-arctic: #dbf0ef;
    --color-mystic: #6fccd4;
    --color-genesis: #3e7292;
    --color-rarity-rare: #09b99b;
    --color-rariry-epic: #ffa22a;
    --color-rarity-mystic: #ae2aff;
    --color-text-arctic: #55586a;

    --color-white: #ffffff;
    --color-gray-1: #a1a6b6;
    --color-gray-2: #6b7185;
    --color-gray-3: #3a3f50;
    --color-gray-4: #282b39;
    --color-gray-5: #242735;
    --color-gray-6: #11131b;
    --color-black: #000000;
  }

  *,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    line-height: 1.5;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    color: var(--color-white);
    background: var(--color-gray-6);
    margin: 0;
  }

  html abbr[title] {
    border-bottom: none;
    text-decoration: none;
  }
`;

const GlobalStyles = () => (
  <>
    <Global styles={base} />
    <BaseStyles />
  </>
);

export default GlobalStyles;
