import Image from 'next/image';
import { styled } from '@/stitches.config';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { summonerState } from '../atom/summonerState';

const StyledHeader = styled('header', {
  width: 1000,
  height: 'inherit',
  margin: '0 auto',
  display: 'flex',
});

const InputWrapper = styled('form', {
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
  backgroundColor: '$white-two',
  borderRadius: 2,
  padding: '0 14px',
  height: 32,
  fontSize: '12px',
  '&::placeholder': {
    color: '$warm-grey',
  },
});

const EndAdormentWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  transform: 'translate(-12px, -50%);',
  top: '50%',
});

export const Header = () => {
  const [summonerName, setSummonerName] = useState('');
  const [summoner, setSummoner] = useRecoilState(summonerState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSummoner({ ...summoner, name: summonerName });
    setSummonerName('');
  };

  return (
    <StyledHeader>
      <InputWrapper onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="소환사명,챔피언..."
          value={summonerName}
          onChange={(e) => setSummonerName(e.target.value)}
        />
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
