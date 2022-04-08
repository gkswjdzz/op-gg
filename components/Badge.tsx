import { styled } from '@/stitches.config';

export const Badge = styled('div', {
  borderRadius: 9,
  color: '$white-two',
  letterSpacing: -0.38,
  fontFamily: '$apple',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0px 5px',
  fontSize: 10,
  height: 18,

  variants: {
    multiKill: {
      true: {
        border: '1px solid $reddish-two',
        backgroundColor: '$tomato',
      },
    },
    ace: {
      true: {
        border: '1px solid $warm-purple',
        backgroundColor: '$amethyst',
      },
    },
  },
});
