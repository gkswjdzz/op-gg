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
    colors: {
      azure: '#1ea1f7',
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
