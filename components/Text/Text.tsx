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
      15: {
        fontSize: '15px',
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
