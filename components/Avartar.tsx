import { styled } from '@/stitches.config';

export const Avartar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '& img': {
    borderRadius: '100%',
  },
  flexShrink: 0,
});
