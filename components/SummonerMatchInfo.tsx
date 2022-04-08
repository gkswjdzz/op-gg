import { useRecoilValue } from 'recoil';
import * as Tabs from '@radix-ui/react-tabs';

import { SummonerMatchDetailList } from './SummonerMatchDetailList';
import { summonerState } from './atom/summonerState';

import { useSummonerMatch } from '@/lib/API/useSummonerMatch';

import { styled } from '@/stitches.config';

const SummonerMatchInfoWrapper = styled('div', {
  flex: 1,
});

const TabsRoot = styled(Tabs.Root, {
  width: '100%',
});

const TabsList = styled(Tabs.List, {
  display: 'flex',
  backgroundColor: '$white-four',
  border: '1px solid $silver-three',
  paddingLeft: 16,
  gap: 24,
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  backgroundColor: '$white-four',
  boxSizing: 'border-box',
  fontSize: 12,
  height: 44,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  '&[data-state="active"]': {
    fontWeight: '$bold',
    borderBottom: '2px solid $bluish',
    color: '$bluish',
  },
});
const TabsContent = styled(Tabs.Content, {});

export const SummonerMatchInfo = () => {
  const summoner = useRecoilValue(summonerState);

  const { summary, champions, positions, games } = useSummonerMatch(
    summoner.name
  );

  if (!summary || !champions || !positions || !games) {
    return null;
  }

  return (
    <SummonerMatchInfoWrapper>
      <TabsRoot defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">전체</TabsTrigger>
          <TabsTrigger value="solo">솔로게임</TabsTrigger>
          <TabsTrigger value="free">자유랭크</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <SummonerMatchDetailList
            summary={summary}
            champions={champions}
            positions={positions.sort((a, b) => b.games - a.games)}
            games={games}
          />
        </TabsContent>
        <TabsContent value="solo">
          <SummonerMatchDetailList
            summary={summary}
            champions={champions}
            positions={positions.sort((a, b) => b.games - a.games)}
            games={games.filter((game) => game.gameType === '솔랭')}
          />
        </TabsContent>
        <TabsContent value="free">
          <SummonerMatchDetailList
            summary={summary}
            champions={champions}
            positions={positions.sort((a, b) => b.games - a.games)}
            games={games.filter((game) => game.gameType === '자유 5:5 랭크')}
          />
        </TabsContent>
      </TabsRoot>
    </SummonerMatchInfoWrapper>
  );
};
