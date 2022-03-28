import type { NextPage } from 'next';

import { Header } from '../components/header';
import { SummonerMatchDetail } from '../components/SummonerMatchDetail';
import { SummonerMatchInfo } from '../components/SummonerMatchInfo';
import { SummonerMostInfo } from '../components/SummonerMostInfo';
import { SummonerProfile } from '../components/SummonerProfile';
import { SummonerTierInfo } from '../components/SummonerTierInfo';

import { styled } from '../stitches.config';

const HomeWrapper = styled('div', {});

const Content = styled('main', {});

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <Header />
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
