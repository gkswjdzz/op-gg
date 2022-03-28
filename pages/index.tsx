import type { NextPage } from 'next';

import { Header } from '../components/header';
import { SummonerMatchDetail } from '../components/SummonerMatchDetail';
import { SummonerMatchInfo } from '../components/SummonerMatchInfo';
import { SummonerMostInfo } from '../components/SummonerMostInfo';
import { SummonerProfile } from '../components/SummonerProfile';
import { SummonerTierInfo } from '../components/SummonerTierInfo';

import { styled } from '../stitches.config';

const HomeWrapper = styled('div', {});

const HeaderWrapper = styled('div', {
  backgroundColor: '$azure',
  height: 97,
});

const Content = styled('main', {});

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Content>
        <SummonerProfile />
        <SummonerTierInfo />
        <SummonerMostInfo />
        <SummonerMatchInfo />
        <SummonerMatchDetail />
      </Content>
    </HomeWrapper>
  );
};

export default Home;
