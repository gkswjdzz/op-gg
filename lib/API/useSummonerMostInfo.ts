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
export interface TSummonerMostInfo {
  champions: TChampion[];
  recentWinRate: TWinRate[];
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useSummonerMostInfo = (name: string) => {
  const { data } = useSWR<TSummonerMostInfo>(
    `/api/_/summoner/${name}/mostInfo`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnMount: false }
  );

  const { champions, recentWinRate } = data || {};

  return { champions, recentWinRate };
};
