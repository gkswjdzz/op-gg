import Image from 'next/image';
import { Text } from '@/components/Text';

import { TTeam } from '@/lib/API/useSummonerMatch';

import { styled } from '@/stitches.config';

const SummonerMatchDetailTeamsWrapper = styled('div', {
  marginTop: 7,
});

const Flex = styled('div', {
  display: 'flex',
});

const FlexColumn = styled(Flex, {
  flexDirection: 'column',
});

const Summoner = styled(Flex, {
  height: 16,
  gap: 4,
});

const ImageWrapper = styled('div', {
  flexShrink: 0,
  '& img': {
    border: '1px solid #0d0819',
  },
});

interface SummonerMatchDetailTeamsProps {
  team: TTeam;
}

export const SummonerMatchDetailTeams = ({
  team,
}: SummonerMatchDetailTeamsProps) => {
  return (
    <SummonerMatchDetailTeamsWrapper>
      <FlexColumn css={{ gap: 2 }}>
        {team.players.map((player) => (
          <Summoner key={player.summonerId}>
            <ImageWrapper>
              <Image
                alt="champion-img"
                src={player.champion.imageUrl}
                width={16}
                height={16}
              />
            </ImageWrapper>
            <Text
              size="11"
              height="13"
              fontFamily="apple"
              color="greyish-brown"
              css={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: '100%',
              }}
            >
              {player.summonerName}
            </Text>
          </Summoner>
        ))}
      </FlexColumn>
    </SummonerMatchDetailTeamsWrapper>
  );
};
