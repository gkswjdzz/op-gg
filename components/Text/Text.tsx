import { styled } from '../../stitches.config';

export const Text = styled('span', {
  variants: {
    size: {
      11: {
        fontSize: '11px',
      },
      12: {
        fontSize: '12px',
      },
      13: {
        fontSize: '13px',
      },
      14: {
        fontSize: '14px',
      },
      15: {
        fontSize: '15px',
      },
      16: {
        fontSize: '16px',
      },
      20: {
        fontSize: '20px',
      },
    },
    weight: {
      bold: {
        fontWeight: '$bold',
      },
      regular: {
        fontWeight: '$normal',
      },
    },
    fontFamily: {
      apple: {
        fontFamily: '$apple',
      },
      helvetica: {
        fontFamily: '$helvetica',
      },
      nanum: {
        fontFamily: '$nanum',
      },
    },
    color: {
      'brownish-grey': {
        color: '$brownish-grey',
      },
      'brownish-grey-two': {
        color: '$brownish-grey-two',
      },
      black: {
        color: '$black',
      },
      bluish: {
        color: '$bluish',
      },
      charcoal: {
        color: '$charcoal',
      },
      'cool-grey': {
        color: '$cool-grey',
      },
      'warm-grey-two': {
        color: '$warm-grey-two',
      },
      'greyish-brown': {
        color: '$greyish-brown',
      },
      'slate-grey': {
        color: '$slate-grey',
      },
      reddish: {
        color: '$reddish',
      },
    },
  },
});
