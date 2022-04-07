import type { NextPage } from 'next';

import { Header } from '@/components/header';
import { SummonerMatchInfo } from '@/components/SummonerMatchInfo';
import { SummonerMostInfo } from '@/components/SummonerMostInfo';
import { SummonerProfile } from '@/components/SummonerProfile';
import { SummonerTierInfo } from '@/components/SummonerTierInfo';

import { styled } from '@/stitches.config';

const HomeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
});

const HeaderWrapper = styled('div', {
  backgroundColor: '$azure',
  height: 97,
});

const SummonerProfileWrapper = styled('div', {
  borderBottom: '1px solid $white-three',
  height: 175,
});

const ContentWrapper = styled('div', {
  backgroundColor: '$white',
});

const Content = styled('main', {
  width: 1000,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 10,
  flex: 1,
});

const Box = styled('div', {});

const FlexGap10 = styled('div', {
  display: 'flex',
  gap: 10,
});

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SummonerProfileWrapper>
        <SummonerProfile />
      </SummonerProfileWrapper>
      <ContentWrapper>
        <Content>
          <FlexGap10>
            <Box>
              <SummonerTierInfo />
              <SummonerMostInfo />
            </Box>
            <Box css={{ flex: 1 }}>
              <SummonerMatchInfo />
            </Box>
          </FlexGap10>
        </Content>
      </ContentWrapper>
    </HomeWrapper>
  );
};

export default Home;
