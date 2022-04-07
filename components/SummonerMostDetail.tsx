import Image from 'next/image';
import { Text } from '../components/Text';

import {
  getKDATextColor,
  getKDA,
  getAverageKDA,
  getWinRateTextColor,
  getWinRate,
} from '../lib/common';

import { TChampion } from '../lib/API/useSummonerMostInfo';

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

interface SummonerMostDetailProps {
  champions: TChampion[];
}

export const SummonerMostDetail = ({ champions }: SummonerMostDetailProps) => {
  champions.forEach((champion) => {
    champion.imageUrl = champion.imageUrl.startsWith('//')
      ? `https:${champion.imageUrl}`
      : champion.imageUrl;
  });

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
                  color="brownish-grey"
                  fontFamily="apple"
                  css={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                  }}
                >
                  {champion.name}
                </Text>
                <Text size={11} color="cool-grey">
                  CS {champion.cs}
                </Text>
              </FlexColumn>
              <FlexColumn css={{ width: 100 }}>
                <Text
                  size={13}
                  weight="bold"
                  css={{
                    color: getKDATextColor(
                      Number(
                        getKDA(
                          champion.kills,
                          champion.deaths,
                          champion.assists
                        )
                      )
                    ),
                  }}
                >
                  {getKDA(champion.kills, champion.deaths, champion.assists) ===
                  'PERFECT'
                    ? 'PERFECT'
                    : `${getKDA(
                        champion.kills,
                        champion.deaths,
                        champion.assists
                      )}:1 평점`}
                </Text>
                <Text size={11} color="cool-grey">
                  {getAverageKDA(champion)[0]} / {getAverageKDA(champion)[1]} /{' '}
                  {getAverageKDA(champion)[2]}
                </Text>
              </FlexColumn>
              <FlexColumn>
                <Text
                  size={13}
                  weight="bold"
                  css={{
                    color: getWinRateTextColor(
                      Number(getWinRate(champion.wins, champion.losses))
                    ),
                  }}
                >
                  {getWinRate(champion.wins, champion.losses)}%
                </Text>
                <Text size={11} color="cool-grey">
                  {champion.games}게임
                </Text>
              </FlexColumn>
            </Li>
          );
        })}
    </SummonerMostDetailWrapper>
  );
};
