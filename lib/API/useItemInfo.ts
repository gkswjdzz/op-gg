import useSWR from 'swr';

interface TItemInfo {
  data: {
    [number: number]: {
      plaintext: string;
    };
  };
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useItemInfo = () => {
  const { data } = useSWR<TItemInfo>(
    `http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json`,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  const { data: itemInfo } = data || {};

  return {
    itemInfo,
  };
};
