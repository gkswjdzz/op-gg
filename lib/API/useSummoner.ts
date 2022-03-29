import useSWR from 'swr';

export interface TTierRank {
  name: string;
  tier: string;
  tierDivision: string;
  string: string;
  shortString: string;
  division: string;
  imageUrl: string;
  lp: number;
  tierRankPoint: number;
}

export interface TLeague {
  hasResults: true;
  wins: number;
  losses: number;
  tierRank: TTierRank;
}

export interface TPreviousTier {
  name: string;
  tier: string;
  tierDivision: string;
  string: string;
  shortString: string;
  division: string;
  imageUrl: string;
  lp: number;
  tierRankPoint: number;
  season: number;
}

export interface TLadderRank {
  rank: number;
  rankPercentOfTop: number;
}
export interface TSummoner {
  name: string;
  level: number;
  profileImageUrl: string;
  profileBorderImageUrl: string;
  url: string;
  leagues: TLeague[];
  previousTiers: TPreviousTier[];
  ladderRank: TLadderRank;
  profileBackgroundImageUrl: string;
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useSummoner = (name: string) => {
  const { data } = useSWR<{ summoner: TSummoner }>(
    `/api/_/summoner/${name}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const { summoner } = data || {};
  const { leagues, previousTiers, ladderRank, ...rest } = summoner || {};

  return {
    leagues,
    previousTiers,
    ladderRank,
    ...rest,
  };
};
