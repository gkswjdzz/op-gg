import Image from 'next/image';
import { Text } from '../components/Text';
import { useSummoner, TLeague } from '../lib/API/useSummoner';

import { styled } from '../stitches.config';

const SummonerTierInfoWrapper = styled('div', {
  width: 300,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  fontFamily: '$apple',
});
const LeagueWrapper = styled('div', {
  width: 'inherit',
  padding: '16px 8px',
  backgroundColor: '$white-four',
  borderRadius: 2,
  display: 'flex',
  gap: 8,
  border: '1px solid $silver-three',
});

const Box = styled('div', {});
const Strong = styled('strong', {
  color: '$gunmetal',
});

const League = (league: TLeague) => {
  return (
    <LeagueWrapper>
      <Box css={{ float: 'left' }}>
        <Image
          src={league.tierRank.imageUrl}
          alt="tier-img"
          width={100}
          height={100}
        />
      </Box>
      <Box css={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Text size={11} color="cool-grey">
          {league.tierRank.name === '솔랭' ? '솔로 랭크' : league.tierRank.name}
        </Text>
        {/* TODO ???    
        <Text size={12} css={{ color: '#353a3a' }}>
          탑 (총{league.wins + league.losses}게임)
        </Text> */}
        <Text size={15} color="bluish" weight="bold" fontFamily="helvetica">
          {league.tierRank.string}
        </Text>
        <Text size={12} weight="bold" color="cool-grey" fontFamily="helvetica">
          <Strong>{league.tierRank.lp} LP</Strong> / {league.wins}승{' '}
          {league.losses}패
        </Text>
        <Text size={12} color="cool-grey" fontFamily="helvetica">
          승률{' '}
          {league.losses !== 0
            ? Math.floor((league.wins / (league.wins + league.losses)) * 100)
            : '100'}
          %
        </Text>
      </Box>
    </LeagueWrapper>
  );
};
export const SummonerTierInfo = () => {
  const { leagues } = useSummoner('이한정');

  if (!leagues) {
    return null;
  }

  return (
    <SummonerTierInfoWrapper>
      {leagues.map((league) => (
        <League key={league.tierRank.name} {...league} />
      ))}
    </SummonerTierInfoWrapper>
  );
};
