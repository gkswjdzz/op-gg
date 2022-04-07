import type { NextPage } from 'next';

import { Header } from '@/components/header';
import { SummonerMatchDetail } from '@/components/SummonerMatchDetail';
import { SummonerMatchInfo } from '@/components/SummonerMatchInfo';
import { SummonerMostInfo } from '@/components/SummonerMostInfo';
import { SummonerProfile } from '@/components/SummonerProfile';
import { SummonerTierInfo } from '@/components/SummonerTierInfo';

import { styled } from '@/stitches.config';

const HomeWrapper = styled('div', {
  backgroundColor: '$white',
});

const HeaderWrapper = styled('div', {
  backgroundColor: '$azure',
  height: 97,
});

const SummonerProfileWrapper = styled('main', {
  borderBottom: '1px solid $white-three',
  height: 175,
});

const Content = styled('main', {
  width: 1000,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 10,
});

const Box = styled('div', {});

const Flex = styled('div', {
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
      <Content>
        <Flex>
          <Box>
            <SummonerTierInfo />
            <SummonerMostInfo />
          </Box>
          <Box css={{ flex: 1 }}>
            <SummonerMatchInfo />
            <SummonerMatchDetail />
          </Box>
        </Flex>
      </Content>
    </HomeWrapper>
  );
};

export default Home;
