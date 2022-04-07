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
});
const FlexColumn = styled(Flex, {
  flexDirection: 'column',
});
const Box = styled('div', {});

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
        <Text size={11} color="warm-grey-two">
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
      <FlexColumn>
        <Text size={14} color="black" css={{ marginBottom: 3, height: 16 }}>
          {champion.name}
        </Text>
        <Flex css={{ height: 13, alignItems: 'center', gap: 6 }}>
          <Text
            size={11}
            color="greyish-brown"
            css={{ color: getWinRateTextColor(Number(winRate)) }}
          >
            {winRate}%
          </Text>{' '}
          <Text size={11}>
            ({champion.wins}승 {champion.losses}패){' '}
          </Text>
          <Box css={{ height: 12, borderRight: '1px solid $silver-three' }} />
          <Text size={11} css={{ color: getKDATextColor(Number(kda)) }}>
            {kda} 평점
          </Text>
        </Flex>
      </FlexColumn>
    </MostChampionMatchInfoWrapper>
  );
};
