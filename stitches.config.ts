import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    fonts: {
      helvetica: 'Helvetica',
      apple: 'AppleSDGothicNeo',
      nanum: 'NanumBarunGothicOTF',
    },
    fontWeights: {
      normal: 'normal',
      bold: 'bold',
    },
    colors: {
      azure: '#1ea1f7',
      white: '#eaeaea',
      'white-two': '#ffffff',
      'white-three': '#d8d8d8',
      'white-four': '#f2f2f2',
      'white-five': '#ededed',
      'warm-grey': '#727272',
      'warm-grey-two': '#999999',
      'warm-grey-three': '#948e8d',
      'silver-two': '#d0d3d4',
      silver: '#e0e3e3',
      'silver-three': '#cdd2d2',
      'slate-grey': '#657070',
      charcoal: '#242929',
      'cool-grey': '#879292',
      'cool-blue': '#549dc7',
      gunmetal: '#555e5e',
      bluish: '#1f8ecd',
      'brownish-grey': '#5e5e5e',
      'brownish-grey-two': '#666666',
      coral: '#ee5a52',
      'greyish-brown': '#555555',
      black: '#333333',
      'yellow-ochre': '#e19205',
      'bluey-green': '#2daf7f',
      reddish: '#c6443e',
      'reddish-two': '#bf3b36',
      'pinkish-grey': '#d6b5b2',
      'pinkish-grey-two': '#c0aba8',
      'pinkish-grey-three': '#d0a6a5',
      'pinkish-tan': '#e89c95',
      'light-blue-grey': '#b9ceea',
      'light-grey-blue-two': '#94b9d6',
      perrywinkle: '#7fb0e1',
      'brownish-pink': '#c8817c',
      'ugly-blue': '#2c709b',
      scarlet: '#d0021b',
      tomato: '#ec4c48',
      'warm-purple': '#7f3590',
      amethyst: '#8c51c5'
    },
  },
});

export const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },
  body: {
    height: '100vh',
  },
  '#__next': {
    height: '100%',
    position: 'relative',
    zIndex: 0,
  },
  '#__next > div': {
    height: '100%',
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },
});
