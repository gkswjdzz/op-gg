import Image from 'next/image';
import { Text } from '../components/Text';

import { TChampion, useSummonerMostInfo } from '../lib/API/useSummonerMostInfo';

import { styled } from '../stitches.config';

const SummonerMostDetailWrapper = styled('ul', {});

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
  height: 53,
  borderBottom: '1px solid $silver-three',
  padding: '0 15px',
});

const Avartar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '& img': {
    borderRadius: '100%',
  },
});

export const SummonerMostDetail = () => {
  const { champions } = useSummonerMostInfo('이한정');

  if (!champions) {
    return null;
  }

  champions.forEach((champion) => {
    champion.imageUrl = champion.imageUrl.startsWith('//')
      ? `https:${champion.imageUrl}`
      : champion.imageUrl;
  });

  const getKDA = (champion: TChampion) => {
    if (!champion.deaths) {
      return 'PERFECT';
    }

    const kda = (champion.assists + champion.kills) / champion.deaths;
    return kda.toFixed(2);
  };

  const getWinRate = (champion: TChampion) => {
    if (!champion.games) {
      return 100;
    }

    const rate = (champion.wins / champion.games) * 100;
    return rate.toFixed(0);
  };

  const getAverageKDA = (champion: TChampion) => {
    if (!champion.games) {
      return [0, 0, 0];
    }
    const kill = champion.kills / champion.games;
    const death = champion.deaths / champion.games;
    const assist = champion.assists / champion.games;
    return [kill.toFixed(1), death.toFixed(1), assist.toFixed(1)];
  };

  return (
    <SummonerMostDetailWrapper>
      {champions
        // sort by games
        .sort((a, b) => b.games - a.games)
        .map((champion, index) => {
          if (index > 8) {
            return;
          }
          return (
            <Li key={champion.id}>
              <Avartar>
                <Image
                  src={champion.imageUrl}
                  alt="champion-img"
                  width={45}
                  height={45}
                />
              </Avartar>
              <FlexColumn css={{ width: 75, alignItems: 'flex-start' }}>
                <Text
                  size={13}
                  weight="bold"
                  css={{
                    color: '$brownish-grey',
                    fontFamily: '$apple',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  {champion.name}
                </Text>
                <Text size={11} css={{ color: '$cool-grey' }}>
                  CS {champion.cs}
                </Text>
              </FlexColumn>
              <FlexColumn css={{ width: 100 }}>
                <Text size={13} weight="bold" css={{ color: '$brownish-grey' }}>
                  {getKDA(champion)}:1 평점
                </Text>
                <Text size={11} css={{ color: '$cool-grey' }}>
                  {getAverageKDA(champion)[0]} / {getAverageKDA(champion)[1]} /{' '}
                  {getAverageKDA(champion)[2]}
                </Text>
              </FlexColumn>
              <FlexColumn>
                <Text size={13} weight="bold" css={{ color: '$brownish-grey' }}>
                  {getWinRate(champion)}%
                </Text>
                <Text size={11} css={{ color: '$cool-grey' }}>
                  {champion.games}게임
                </Text>
              </FlexColumn>
            </Li>
          );
        })}
    </SummonerMostDetailWrapper>
  );
};
