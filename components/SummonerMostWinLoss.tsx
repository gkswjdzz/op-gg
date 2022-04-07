import Image from 'next/image';
import { Text } from '../components/Text';

import { TWinRate } from '../lib/API/useSummonerMostInfo';

import { styled } from '../stitches.config';

const SummonerMostWinLossWrapper = styled('div', {});

const FlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 3,
  padding: '0 6px',
});

const Li = styled('li', {
  all: 'unset',
  display: 'flex',
  userSelect: 'none',
  fontFamily: '$helvetica',
  height: 48,
  borderBottom: '1px solid $silver-three',
  padding: '0 15px',
});

const Avartar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '& img': {
    borderRadius: '100%',
  },
  flexShrink: 0,
});

const Progress = styled('div', {
  position: 'relative',
  width: 123,
  display: 'flex',
  alignItems: 'center',
  color: '$white-two',
  fontSize: 12,
  fontWeight: '$bold',
});

const BluishBox = styled('div', {
  height: 24,
  backgroundColor: '$bluish',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  paddingLeft: 4,
  display: 'flex',
  alignItems: 'center',
});

const ColarBox = styled('div', {
  height: 24,
  flex: 1,
  backgroundColor: '$coral',
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  paddingRight: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
});

interface SummonerMostWinLossProps {
  recentWinRate: TWinRate[];
}
export const SummonerMostWinLoss = ({
  recentWinRate,
}: SummonerMostWinLossProps) => {
  const getWinRate = (data: TWinRate) => {
    const games = data.wins + data.losses;
    if (!games) {
      return 100;
    }

    const rate = (data.wins / games) * 100;
    return rate.toFixed(0);
  };

  recentWinRate.forEach((data) => {
    data.imageUrl = data.imageUrl.startsWith('//')
      ? `https:${data.imageUrl}`
      : data.imageUrl;
  });

  return (
    <SummonerMostWinLossWrapper>
      {recentWinRate
        .sort((a, b) => b.wins + b.losses - (a.wins + a.losses))
        .map((data, index) => {
          if (index > 8) {
            return;
          }
          return (
            <Li key={data.id}>
              <Avartar>
                <Image
                  src={data.imageUrl}
                  alt="champion-img"
                  width={32}
                  height={32}
                />
              </Avartar>
              <FlexColumn
                css={{ width: 75, alignItems: 'flex-start', flexShrink: 0 }}
              >
                <Text
                  size={13}
                  weight="bold"
                  color="brownish-grey"
                  fontFamily="apple"
                  css={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  {data.name}
                </Text>
              </FlexColumn>
              <FlexColumn css={{ width: 50 }}>
                <Text size={13} weight="bold" color="cool-grey">
                  {getWinRate(data)}%
                </Text>
              </FlexColumn>
              <FlexColumn css={{ flex: 1 }}>
                <Progress>
                  <BluishBox css={{ width: `${getWinRate(data)}%` }} />
                  <ColarBox />
                  <Text css={{ position: 'absolute', left: 4 }}>
                    {data.wins}승
                  </Text>
                  <Text css={{ position: 'absolute', right: 4 }}>
                    {data.losses}패
                  </Text>
                </Progress>
              </FlexColumn>
            </Li>
          );
        })}
    </SummonerMostWinLossWrapper>
  );
};
