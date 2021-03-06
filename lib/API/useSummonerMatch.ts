import useSWR from 'swr';

export interface TWinRate {
  id: number;
  imageUrl: string;
  key: string;
  losses: number;
  name: string;
  wins: number;
}

export interface TChampion {
  assists: number;
  cs: number;
  deaths: number;
  games: number;
  id: number;
  imageUrl: string;
  key: string;
  kills: number;
  losses: number;
  name: string;
  rank: number;
  wins: number;
}

export interface TGame {
  mmr: number;
  champion: {
    imageUrl: string;
    level: number;
  };
  spells: {
    imageUrl: string;
  }[];
  items: {
    imageUrl: string;
  }[];
  needRenew: boolean;
  gameId: string;
  createDate: number;
  gameLength: number;
  gameType: string;
  summonerId: string;
  summonerName: string;
  tierRankShort: string;
  stats: {
    general: {
      kill: number;
      death: number;
      assist: number;
      kdaString: string;
      cs: number;
      csPerMin: number;
      contributionForKillRate: string;
      goldEarned: number;
      totalDamageDealtToChampions: number;
      largestMultiKillString: 'Double Kill';
      opScoreBadge: string;
    };
    ward: {
      sightWardsBought: number;
      visionWardsBought: number;
    };
  };
  mapInfo: null;
  peak: string[];
  isWin: boolean;
}

export interface TPosition {
  games: number;
  wins: number;
  losses: number;
  position: 'TOP' | 'JNG' | 'MID' | 'ADC' | 'SUP';
  positionName: string;
}

export interface TSummary {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
}
export interface TSummonerMostInfo {
  champions: TChampion[];
  positions: TPosition[];
  summary: TSummary;
  games: TGame[];
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useSummonerMatch = (name: string) => {
  const { data } = useSWR<TSummonerMostInfo>(
    `/api/_/summoner/${name}/matches`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const { champions, positions, summary, games } = data || {};

  return { champions, positions, summary, games };
};

export interface TTeam {
  teamId: number,
  players:
  {
    champion: {
      imageUrl: string,
      level: number
    },
    summonerId: number,
    summonerName: string
  }[]
}

export interface TSummonerMatchDetail {
  gameId: string,
  teams: TTeam[]
}

export const useSummonerMatchDetail = (name: string, gameId: string) => {
  const { data } = useSWR<TSummonerMatchDetail>(
    `/api/_/summoner/${name}/matchDetail/${gameId}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const { gameId: resGameId, teams } = data || {};

  return { gameId: resGameId, teams };
};
