import { TGame } from '@/lib/API/useSummonerMatch';
import { styled } from '@/stitches.config';

const SummonerMatchDetailWrapper = styled('div', {});

interface SummonerMatchDetailProps {
  game: TGame;
}

export const SummonerMatchDetail = ({ game }: SummonerMatchDetailProps) => {
  console.log(game);
  return (
    <SummonerMatchDetailWrapper>
      {JSON.stringify(game)}
    </SummonerMatchDetailWrapper>
  );
};
