import Image from 'next/image';
import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';

import { Text } from '@/components/Text';
import { Avartar } from '@/components/Avartar';

import { TGame } from '@/lib/API/useSummonerMatch';
import { multiKillKorean, viewDetailImgSrc } from '@/lib/common';

import { styled } from '@/stitches.config';
import { Badge } from '../Badge';
import { SummonerMatchDetailItems } from './SummonerMatchDetailItems';

const SummonerMatchDetailWrapper = styled('div', {
  display: 'flex',
  height: 96,

  variants: {
    isWin: {
      true: {
        backgroundColor: '$light-blue-grey',
      },
      false: {
        backgroundColor: '$pinkish-grey',
      },
    },
  },
});

const Box = styled('div', {});

const ViewDetailBox = styled(Box, {
  position: 'relative',
  width: 30,
  variants: {
    isWin: {
      true: {
        backgroundColor: '$perrywinkle',
        border: '1px solid $cool-blue',
      },
      false: {
        backgroundColor: '$pinkish-tan',
        border: '1px solid $brownish-pink',
      },
    },
  },
});

const ViewDetail = styled('div', {
  position: 'absolute',
  bottom: 12,
  right: 9,
});

const Flex = styled('div', {
  display: 'flex',
});

const FlexColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const FlexColumnWrap = styled(FlexColumn, {
  flexWrap: 'wrap',
});

interface SummonerMatchDetailProps {
  game: TGame;
}

export const SummonerMatchDetail = ({ game }: SummonerMatchDetailProps) => {
  return (
    <SummonerMatchDetailWrapper isWin={game.isWin}>
      <Box css={{ width: 70, marginTop: 13 }}>
        <FlexColumn css={{ alignItems: 'center', gap: 4 }}>
          <Text
            size="11"
            height="13"
            fontFamily="apple"
            weight="bold"
            color="greyish-brown"
            css={{ letterSpacing: -0.42 }}
          >
            {game.gameType}
          </Text>
          <Text
            size="11"
            height="13"
            fontFamily="apple"
            color="greyish-brown"
            css={{ letterSpacing: -0.42 }}
          >
            {formatDistance(new Date(game.createDate * 1000), Date.now(), {
              locale: ko,
            })}{' '}
            전
          </Text>
          <Box
            css={{
              width: 27,
              borderTop: `1px solid ${
                game.isWin ? '$light-grey-blue-two' : '$pinkish-grey-three'
              }`,
            }}
          />
          <Text
            size="11"
            height="13"
            fontFamily="apple"
            weight="bold"
            color={game.isWin ? 'ugly-blue' : 'scarlet'}
            css={{
              letterSpacing: -0.42,
            }}
          >
            {game.isWin ? '승리' : '패배'}
          </Text>
          <Text size="11" height="13" fontFamily="apple" color="greyish-brown">
            {Math.floor(game.gameLength / 60)}분 {game.gameLength % 60}초
          </Text>
        </FlexColumn>
      </Box>
      <Box css={{ width: 100 }}>
        <Flex css={{ gap: 6, marginTop: 15 }}>
          <Box css={{ flexShrink: 0 }}>
            <Avartar>
              <Image
                alt="champion"
                src={game.champion.imageUrl}
                width={46}
                height={46}
              />
            </Avartar>
          </Box>
          <FlexColumnWrap css={{ gap: 4, height: 48 }}>
            <Image
              alt="spell-1"
              src={game.spells[0].imageUrl}
              width={22}
              height={22}
            />
            <Image
              alt="spell-2"
              src={game.spells[1].imageUrl}
              width={22}
              height={22}
            />
            <Image alt="peak-1" src={game.peak[0]} width={22} height={22} />
            <Image alt="peak-2" src={game.peak[1]} width={22} height={22} />
          </FlexColumnWrap>
        </Flex>
      </Box>
      <Flex css={{ flex: 1 }}>
        <FlexColumn
          css={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 6,
          }}
        >
          <Flex css={{ letterSpacing: -0.58 }}>
            <Text
              size="15"
              height="18"
              weight="bold"
              fontFamily="helvetica"
              color="gunmetal"
            >
              {game.stats.general.kill}
            </Text>
            <Text size="15" height="18" color="warm-grey-three">
              &nbsp;/&nbsp;
            </Text>
            <Text
              size="15"
              height="18"
              weight="bold"
              fontFamily="helvetica"
              color="scarlet"
            >
              {game.stats.general.death}
            </Text>
            <Text size="15" height="18" color="warm-grey-three">
              &nbsp;/&nbsp;
            </Text>
            <Text
              size="15"
              height="18"
              weight="bold"
              fontFamily="helvetica"
              color="gunmetal"
            >
              {game.stats.general.assist}
            </Text>
          </Flex>
          <Flex css={{ letterSpacing: -0.42 }}>
            <Text
              size="11"
              height="13"
              weight="bold"
              fontFamily="helvetica"
              color="black"
            >
              {game.stats.general.kdaString}
            </Text>
            <Text
              size="11"
              height="13"
              weight="bold"
              fontFamily="apple"
              color="gunmetal"
            >
              &nbsp;평점
            </Text>
          </Flex>
          <Flex css={{ gap: 4 }}>
            {game.stats.general.largestMultiKillString && (
              <Badge multiKill>
                {multiKillKorean[game.stats.general.largestMultiKillString]}
              </Badge>
            )}
            {game.stats.general.opScoreBadge && <Badge ace>ACE</Badge>}
          </Flex>
        </FlexColumn>
      </Flex>
      <Box css={{ width: 90, marginTop: 13 }}>
        <FlexColumn
          css={{
            alignItems: 'center',
            width: '100%',
            gap: 6,
            letterSpacing: -0.42,
          }}
        >
          <Text size={11} height={13} fontFamily="apple" color="gunmetal">
            레벨{game.champion.level}
          </Text>
          <Text size={11} height={13} fontFamily="apple" color="gunmetal">
            {game.stats.general.cs} ({game.stats.general.csPerMin}) CS
          </Text>
          <Text size={11} height={13} fontFamily="apple" color="scarlet">
            킬관여 {game.stats.general.contributionForKillRate}
          </Text>
        </FlexColumn>
      </Box>
      <Box css={{ width: 105, marginTop: 15 }}>
        <SummonerMatchDetailItems game={game} />
      </Box>
      <Box css={{ width: 84 }}></Box>
      <Box css={{ width: 84 }}></Box>
      <ViewDetailBox isWin={game.isWin}>
        <ViewDetail>
          <Image
            alt="viewDetail"
            src={viewDetailImgSrc[game.isWin ? 'blue' : 'red']}
            width={13}
            height={10}
          />
        </ViewDetail>
      </ViewDetailBox>
    </SummonerMatchDetailWrapper>
  );
};
