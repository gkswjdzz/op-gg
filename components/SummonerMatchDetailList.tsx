import { SummonerMatchInfoDetail } from './SummonerMatchInfoDetail';

import {
  TChampion,
  TGame,
  TPosition,
  TSummary,
} from '@/lib/API/useSummonerMatch';

import { styled } from '@/stitches.config';
import { SummonerMatchDetail } from './SummonerMatchDetail';

const SummonerMatchDetailListWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const SummonerMatchDetailWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
  gap: 8,
});
interface SummonerMatchDetailListProps {
  summary: TSummary;
  champions: TChampion[];
  positions: TPosition[];
  games: TGame[];
}

export const SummonerMatchDetailList = ({
  summary,
  champions,
  positions,
  games,
}: SummonerMatchDetailListProps) => {
  return (
    <SummonerMatchDetailListWrapper>
      <SummonerMatchInfoDetail
        summary={summary}
        champions={champions}
        positions={positions.sort((a, b) => b.games - a.games)}
      />
      <SummonerMatchDetailWrapper>
        {games.map((game) => (
          <SummonerMatchDetail key={game.createDate} game={game} />
        ))}
      </SummonerMatchDetailWrapper>
    </SummonerMatchDetailListWrapper>
  );
};
