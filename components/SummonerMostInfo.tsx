import * as Tabs from '@radix-ui/react-tabs';

import { SummonerMostDetail } from './SummonerMostDetail';
import { SummonerMostWinLoss } from './SummonerMostWinLoss';

import { styled } from '../stitches.config';

const SummonerMostInfoWrapper = styled('div', {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  gap: 45,
});

const TabsRoot = styled(Tabs.Root, {
  width: 300,
});

const TabsList = styled(Tabs.List, {
  display: 'flex',
});

const TabsTrigger = styled(Tabs.Trigger, {
  all: 'unset',
  backgroundColor: '$white-four',
  boxSizing: 'border-box',
  fontSize: 12,
  height: 44,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  border: '1px solid $silver-three',
  '&[data-state="active"]': {
    backgroundColor: '$white-five',
    fontWeight: '$bold',
    borderBottom: 'none',
  },
});

const TabsContent = styled(Tabs.Content, {
  border: '1px solid $silver-three',
  borderTop: 'none',
});

export const SummonerMostInfo = () => {
  return (
    <SummonerMostInfoWrapper>
      <TabsRoot defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">챔피언 승률</TabsTrigger>
          <TabsTrigger value="tab2">7일간 랭크 승률</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <SummonerMostDetail />
        </TabsContent>
        <TabsContent value="tab2">
          <SummonerMostWinLoss />
        </TabsContent>
      </TabsRoot>
    </SummonerMostInfoWrapper>
  );
};
