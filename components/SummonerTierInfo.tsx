import Image from 'next/image';
import { Text } from '../components/Text';

import { styled } from '../stitches.config';

const SummonerTierInfoWrapper = styled('div', {
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  fontFamily: '$apple',
});
const SoloRank = styled('div', {
  width: 'inherit',
  padding: '16px 8px',
  backgroundColor: '$white-four',
  borderRadius: 2,
  display: 'flex',
  gap: 8,
});
const FreeRank = styled('div', {
  width: 'inherit',
  padding: '16px 8px',
  backgroundColor: '$white-four',
  borderRadius: 2,
  display: 'flex',
  gap: 8,
});

const Box = styled('div', {});
const Strong = styled('strong', {
  color: '$gunmetal',
});
export const SummonerTierInfo = () => {
  const soloLeague = {
    hasResults: true,
    wins: 244,
    losses: 661,
    tierRank: {
      name: '솔랭',
      tier: 'Platinum',
      tierDivision: 'Platinum',
      string: 'Platinum (280LP)',
      shortString: 'P1',
      division: 'i',
      imageUrl:
        'https://opgg-static.akamaized.net/images/medals/platinum_1.png',
      lp: 280,
      tierRankPoint: 122,
    },
  };
  return (
    <SummonerTierInfoWrapper>
      <SoloRank>
        <Box css={{ float: 'left' }}>
          <Image
            src={soloLeague.tierRank.imageUrl}
            alt="tier-img"
            width={100}
            height={100}
          />
        </Box>
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <Text size={11} css={{ color: '$cool-grey' }}>
            솔로 랭크
          </Text>
          <Text size={12} css={{ color: '#353a3a' }}>
            탑 (총27게임)
          </Text>
          <Text
            size={15}
            css={{
              fontFamily: '$helvetica',
              fontWeight: '$bold',
              color: '$bluish',
            }}
          >
            Platinum 2
          </Text>
          <Text
            size={12}
            css={{
              fontFamily: '$helvetica',
              color: '$cool-grey',
              fontWeight: '$bold',
            }}
          >
            <Strong>80 LP</Strong> / 28승 30패
          </Text>
          <Text
            size={12}
            css={{ fontFamily: '$helvetica', color: '$cool-grey' }}
          >
            승률 51%
          </Text>
        </Box>
      </SoloRank>

      <FreeRank></FreeRank>
    </SummonerTierInfoWrapper>
  );
};
