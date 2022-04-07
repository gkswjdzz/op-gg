import Image from 'next/image';

import { Text } from '@/components/Text';
import { MostChampionMatchInfo } from '@/components/MostChampionMatchInfo';

import { TChampion, TPosition, TSummary } from '@/lib/API/useSummonerMatch';
import {
  getKDA,
  getKDATextColor,
  getWinRate,
  positionImgSrc,
  positionToHangul,
} from '@/lib/common';

import { styled } from '@/stitches.config';

const SummonerMatchInfoDetailWrapper = styled('div', {
  display: 'flex',
  height: 158,
  backgroundColor: '$white-five',
  padding: '0 16px',
});

const Flex = styled('div', {
  display: 'flex',
});
const FlexColumn = styled(Flex, {
  flexDirection: 'column',
});

const CircleInfo = styled('div', {
  position: 'relative',
  width: 90,
  height: 90,
  borderRadius: '50%',
});

const InnerCircle = styled('div', {
  position: 'absolute',
  backgroundColor: '$white-five',
  color: '$greyish-brown',
  borderRadius: '50%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 64,
  height: 64,
  fontSize: 14,
  fontFamily: '$helvetica',
  fontWeight: '$bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const PreferPositionWrapper = styled(FlexColumn, {
  padding: '16px 0 16px 16px',
  gap: 22,
  width: '100%',
});

const PreferPosition = styled(Flex, {
  gap: 8,
  alignItems: 'center',
  height: 30,
});

const PreferPositionSecondTexts = styled(Flex, {
  gap: 6,
  alignItems: 'center',
  height: 13,
});

const Span = styled('span', {});
const Box = styled('div', {});

interface SummonerMatchInfoDetailProps {
  summary: TSummary;
  champions: TChampion[];
  positions: TPosition[];
}

export const SummonerMatchInfoDetail = ({
  summary,
  champions,
  positions,
}: SummonerMatchInfoDetailProps) => {
  const winRate = getWinRate(summary.wins, summary.losses);
  const kda = getKDA(summary.kills, summary.deaths, summary.assists);
  const totalGames = summary.wins + summary.losses;

  const getPositionPickRate = (total: number, pick: number) => {
    if (!total) {
      return 0;
    }

    return Math.floor((pick / total) * 100);
  };
  return (
    <SummonerMatchInfoDetailWrapper>
      <Flex css={{ width: 260, borderRight: '1px solid $silver-three' }}>
        <FlexColumn
          css={{
            gap: 14,
            margin: '16px 0 0 8px',
            alignItems: 'center',
          }}
        >
          <Text size={12} color="brownish-grey-two">
            {totalGames}전 {summary.wins}승 {summary.losses}패
          </Text>
          <CircleInfo
            css={{
              background: `conic-gradient($coral 0%, $coral ${
                100 - Number(winRate)
              }%, $bluish ${100 - Number(winRate)}%, $bluish 100%)`,
            }}
          >
            <InnerCircle>{winRate}%</InnerCircle>
          </CircleInfo>
        </FlexColumn>
        <FlexColumn
          css={{
            margin: '0 auto',
            gap: 4,
            alignItems: 'center',
            justifyContent: 'center',
            width: 92,
          }}
        >
          <Text size={11} weight="bold" color="warm-grey-two">
            {summary.kills} / <Text color="reddish">{summary.deaths}</Text> /{' '}
            {summary.assists}
          </Text>
          <Text size={16} color="warm-grey-two">
            <Span
              css={{
                color: getKDATextColor(Number(kda)),
              }}
            >
              {kda}
            </Span>{' '}
            <Text color="reddish">({winRate}%)</Text>
          </Text>
        </FlexColumn>
      </Flex>
      <FlexColumn
        css={{
          flex: 1,
          alignItems: 'flex-start',
          margin: 'auto 0',
          gap: 12,
        }}
      >
        <MostChampionMatchInfo champion={champions[0]} />
        <MostChampionMatchInfo champion={champions[1]} />
        <MostChampionMatchInfo champion={champions[2]} />
      </FlexColumn>
      <Flex css={{ width: 168, borderLeft: '1px solid $silver-three' }}>
        <PreferPositionWrapper>
          <Text size="12" color="brownish-grey-two">
            선호 포지션 (랭크)
          </Text>
          {positions.map((position) => (
            <PreferPosition key={position.positionName}>
              <Image
                alt={position.positionName}
                src={positionImgSrc[position.position]}
                height={28}
                width={28}
              />
              <FlexColumn>
                <Text size="14" color="black" fontFamily="nanum">
                  {positionToHangul[position.position]}
                </Text>
                <PreferPositionSecondTexts>
                  <Text size="11" color="bluish">
                    {getPositionPickRate(totalGames, position.games)}%
                  </Text>
                  <Box
                    css={{ height: 12, borderRight: '1px solid $silver-three' }}
                  />
                  <Text size="11" color="black" fontFamily="helvetica">
                    승률{' '}
                    <strong>
                      {getWinRate(position.wins, position.losses)}%
                    </strong>
                  </Text>
                </PreferPositionSecondTexts>
              </FlexColumn>
            </PreferPosition>
          ))}
        </PreferPositionWrapper>
      </Flex>
    </SummonerMatchInfoDetailWrapper>
  );
};
