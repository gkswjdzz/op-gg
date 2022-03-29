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
      warmGrey: '#727272',
      'silver-two': '#d0d3d4',
      silver: '#e0e3e3',
      'silver-three': '#cdd2d2',
      'slate-grey': '#657070',
      charcoal: '#242929',
      'cool-grey': '#879292',
      gunmetal: '#555e5e',
      bluish: '#1f8ecd',
      'brownish-grey': '#5e5e5e',
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
