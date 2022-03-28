import Image from 'next/image';
import { styled } from '../../stitches.config';

const StyledHeader = styled('header', {
  width: 1000,
  height: 'inherit',
  margin: '0 auto',
  display: 'flex',
});

const InputWrapper = styled('div', {
  width: 260,
  height: 'fit-content',
  marginLeft: 'auto',
  marginTop: 'auto',
  marginBottom: 12,
  position: 'relative',
});

const StyledInput = styled('input', {
  all: 'unset',
  width: 'stretch',
  boxSizing: 'border-box',
  backgroundColor: '$white',
  borderRadius: 2,
  padding: '0 14px',
  height: 32,
  fontSize: '12px',
  '&::placeholder': {
    color: '$warmGrey',
  },
});

const EndAdormentWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  transform: 'translate(-12px, -50%);',
  top: '50%',
});

export const Header = () => {
  return (
    <StyledHeader>
      <InputWrapper>
        <StyledInput type="text" placeholder="소환사명,챔피언..." />
        <EndAdormentWrapper>
          <Image
            src="/icons/icon-gg.svg"
            alt="icon-gg"
            width={30}
            height={13}
          />
        </EndAdormentWrapper>
      </InputWrapper>
    </StyledHeader>
  );
};
