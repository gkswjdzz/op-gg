import Image from 'next/image';
import { Text } from '../components/Text';
import { TChampion } from '../lib/API/useSummonerMatch';
import {
  getKDA,
  getKDATextColor,
  getWinRate,
  getWinRateTextColor,
} from '../lib/common';

import { styled } from '../stitches.config';

const MostChampionMatchInfoWrapper = styled('div', {
  display: 'flex',
  gap: 8,
  marginLeft: 16,
  alignItems: 'center',
});
const Avartar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  '& img': {
    borderRadius: '100%',
  },
  flexShrink: 0,
});

const Flex = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
const Span = styled('span', {});

interface MostChampionMatchInfoProps {
  champion: TChampion;
}
export const MostChampionMatchInfo = ({
  champion,
}: MostChampionMatchInfoProps) => {
  if (!champion) {
    return (
      <MostChampionMatchInfoWrapper>
        <Avartar>
          <Image
            src="/icons/no-info.svg"
            alt="champion-img"
            width={34}
            height={34}
          />
        </Avartar>
        <Text size={11} css={{ color: '$warm-grey-two' }}>
          챔피언 정보가 없습니다.
        </Text>
      </MostChampionMatchInfoWrapper>
    );
  }
  const winRate = getWinRate(champion.wins, champion.losses);
  const kda = getKDA(champion.wins, champion.deaths, champion.assists);

  champion.imageUrl = champion.imageUrl.startsWith('//')
    ? `https:${champion.imageUrl}`
    : champion.imageUrl;

  return (
    <MostChampionMatchInfoWrapper>
      <Avartar>
        <Image
          src={champion.imageUrl}
          alt="champion-img"
          width={34}
          height={34}
        />
      </Avartar>
      <Flex>
        <Text size={14} css={{ color: '$black', marginBottom: 3 }}>
          {champion.name}
        </Text>
        <Text size={11} css={{ color: '$greyish-brown' }}>
          <Span css={{ color: getWinRateTextColor(Number(winRate)) }}>
            {winRate}%
          </Span>{' '}
          ({champion.wins}승 {champion.losses}패){' '}
          <Span css={{ color: getKDATextColor(Number(kda)) }}>{kda} 평점</Span>
        </Text>
      </Flex>
    </MostChampionMatchInfoWrapper>
  );
};
