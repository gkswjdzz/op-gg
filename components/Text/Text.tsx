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
  },
});
