import Image from 'next/image';

import { Text } from '../components/Text';

import { styled } from '../stitches.config';

const SummonerProfileWrapper = styled('div', {
  width: 1000,
  margin: '0 auto',
  height: 'inherit',
  padding: '14px 0',
  display: 'grid',
  gridTemplateAreas: `
    "tierboxes tierboxes"
    "profile-img profile-info"
  `,
  gridTemplateRows: '40px 1fr',
  gridTemplateColumns: '120px 1fr',
});

const TierBoxes = styled('ul', {
  all: 'unset',
  gridArea: 'tierboxes',
  display: 'flex',
  gap: 7,
  marginLeft: 32,
});

const TierBox = styled('li', {
  all: 'unset',
  boxSizing: 'border-box',
  height: 20,
  padding: '4px 5px',
  borderRadius: 2,
  border: '1px solid $silver-two',
  backgroundColor: '$silver',
  fontSize: 11,
  letterSpacing: -0.42,
  fontFamily: '$helvetica',
  color: '$slate-grey',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ProfileImage = styled('div', {
  gridArea: 'profile-img',
  position: 'relative',
  width: 120,
  height: 120,
  marginLeft: 21,
});

const BorderBox = styled('div', {
  top: -10,
  left: -10,
  position: 'absolute',
  height: 'inherit',
  width: 'inherit',
});

const ProfileInfoBox = styled('div', {
  gridArea: 'profile-info',
  margin: '11px 17px',
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const SummonerProfile = () => {
  const previousTiers = [
    {
      division: 'string',
      imageUrl:
        'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
      lp: 0,
      name: 'string',
      season: 0,
      shortString: 'string',
      string: 'string',
      tier: 'string',
      tierDivision: 'string',
      tierRankPoint: 0,
    },
  ];
  const summoner = {
    name: 'Hide on bush',
    level: 94,
    profileImageUrl:
      'https://opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg',
    profileBorderImageUrl:
      'https://opgg-static.akamaized.net/images/borders2/challenger.png',
    ladderRank: {
      rank: 239298,
      rankPercentOfTop: 42,
    },
  };
  //opgg-static.akamaized.net/images/profile_icons/profileIcon1625.jpg
  https: return (
    <SummonerProfileWrapper>
      <TierBoxes>
        {previousTiers.map((tier) => (
          <TierBox key={tier.season}>
            <Text>
              <strong>S{tier.season}</strong> {tier.tier}
            </Text>
          </TierBox>
        ))}
      </TierBoxes>
      <ProfileImage>
        <BorderBox
          css={{
            backgroundImage: `url(${summoner.profileBorderImageUrl})`,
          }}
        />
        <Image
          src={summoner.profileImageUrl}
          alt="profile-img"
          width={100}
          height={100}
        />
      </ProfileImage>
      <ProfileInfoBox>
        <Text size="20" weight="bold" css={{ color: '$charcoal' }}>
          {summoner.name}
        </Text>
        <Text size="11" css={{ color: '$slate-grey' }}>
          레더 랭킹 {summoner.ladderRank.rank}위 (상위{' '}
          {summoner.ladderRank.rank}
          %)
        </Text>
      </ProfileInfoBox>
    </SummonerProfileWrapper>
  );
};
