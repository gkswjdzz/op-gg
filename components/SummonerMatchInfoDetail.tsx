import { Text } from '../components/Text';
import { TChampion, TSummary } from '../lib/API/useSummonerMatch';
import { getKDA, getKDATextColor, getWinRate } from '../lib/common';

import { styled } from '../stitches.config';
import { MostChampionMatchInfo } from './MostChampionMatchInfo';

const SummonerMatchInfoDetailWrapper = styled('div', {
  display: 'flex',
  height: 158,
  backgroundColor: '$white-five',
  padding: '0 16px',
});

const Flex = styled('div', {
  display: 'flex',
  alignItems: 'center',
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

const Span = styled('span', {});

interface SummonerMatchInfoDetailProps {
  summary: TSummary;
  champions: TChampion[];
}
export const SummonerMatchInfoDetail = ({
  summary,
  champions,
}: SummonerMatchInfoDetailProps) => {
  const winRate = getWinRate(summary.wins, summary.losses);
  const kda = getKDA(summary.kills, summary.deaths, summary.assists);
  return (
    <SummonerMatchInfoDetailWrapper>
      <Flex css={{ width: 260, borderRight: '1px solid $silver-three' }}>
        <FlexColumn css={{ gap: 14, marginLeft: 8 }}>
          <Text size={12} css={{ color: '$brownish-grey-two' }}>
            {summary.wins + summary.losses}전 {summary.wins}승 {summary.losses}
            패
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
            marginRight: 34,
            marginLeft: 'auto',
            gap: 4,
          }}
        >
          <Text size={11} weight="bold" css={{ color: '$warm-grey-two' }}>
            {summary.kills} /{' '}
            <Span css={{ color: '#c6443e' }}>{summary.deaths}</Span> /{' '}
            {summary.assists}
          </Text>
          <Text size={16} css={{ color: '$warm-grey-two' }}>
            <Span
              css={{
                color: getKDATextColor(Number(kda)),
              }}
            >
              {kda}
            </Span>{' '}
            <Span css={{ color: '#c6443e' }}>({winRate}%)</Span>
          </Text>
        </FlexColumn>
      </Flex>
      <FlexColumn
        css={{
          flex: 1,
          alignItems: 'flex-start',
          justifyContent: 'space-around',
        }}
      >
        <MostChampionMatchInfo champion={champions[0]} />
        <MostChampionMatchInfo champion={champions[1]} />
        <MostChampionMatchInfo champion={champions[2]} />
      </FlexColumn>
      <Flex css={{ width: 168, borderLeft: '1px solid $silver-three' }}></Flex>
    </SummonerMatchInfoDetailWrapper>
  );
};
