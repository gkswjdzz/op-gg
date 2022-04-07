import { config } from '@/stitches.config';
import { TChampion } from '@/lib/API/useSummonerMostInfo';

export const getKDATextColor = (score: number) => {
  if (score >= 5.0) {
    return config.theme.colors['yellow-ochre'];
  } else if (score >= 4.0) {
    return config.theme.colors['bluish'];
  } else if (score >= 3.0) {
    return config.theme.colors['bluey-green'];
  } else {
    return config.theme.colors['brownish-grey'];
  }
};

export const getKDA = (kills: number, assists: number, deaths: number) => {
  if (!deaths) {
    return 'PERFECT';
  }

  const kda = (assists + kills) / deaths;
  return kda.toFixed(2);
};

export const getWinRate = (wins: number, losses: number) => {
  const games = wins + losses;

  if (!games) {
    return 100;
  }

  const rate = (wins / games) * 100;
  return rate.toFixed(0);
};

export const getAverageKDA = (champion: TChampion) => {
  if (!champion.games) {
    return [0, 0, 0];
  }
  const kill = champion.kills / champion.games;
  const death = champion.deaths / champion.games;
  const assist = champion.assists / champion.games;
  return [kill.toFixed(1), death.toFixed(1), assist.toFixed(1)];
};

export const getWinRateTextColor = (winRate: number) => {
  if (winRate >= 60) {
    return config.theme.colors['reddish'];
  }
  return config.theme.colors['brownish-grey'];
};

export const positionImgSrc = {
  TOP: '/icons/icon-mostposition-top.png',
  JNG: '/icons/icon-mostposition-jng.png',
  MID: '/icons/icon-mostposition-mid.png',
  ADC: '/icons/icon-mostposition-adc.png',
  SUP: '/icons/icon-mostposition-sup.png',
};

export const viewDetailImgSrc = {
  red: '/icons/icon-viewdetail-red.png',
  blue: '/icons/icon-viewdetail-blue.png',
};

export const positionToHangul = {
  TOP: '탑',
  JNG: '정글',
  MID: '미드',
  ADC: '원딜',
  SUP: '서포터',
};
