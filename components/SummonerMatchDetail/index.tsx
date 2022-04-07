import { TGame } from '@/lib/API/useSummonerMatch';
import { viewDetailImgSrc } from '@/lib/common';
import { styled } from '@/stitches.config';
import Image from 'next/image';

const SummonerMatchDetailWrapper = styled('div', {
  display: 'flex',
  height: 96,

  variants: {
    isWin: {
      true: {
        backgroundColor: '$light-blue-grey',
      },
      false: {
        backgroundColor: '$pinkish-grey',
      },
    },
  },
});

const Box = styled('div', {});

const ViewDetailBox = styled(Box, {
  position: 'relative',
  width: 30,
  variants: {
    isWin: {
      true: {
        backgroundColor: '$perrywinkle',
        border: '1px solid $cool-blue',
      },
      false: {
        backgroundColor: '$pinkish-tan',
        border: '1px solid $brownish-pink',
      },
    },
  },
});

const ViewDetail = styled('div', {
  position: 'absolute',
  bottom: 12,
  right: 9,
});
interface SummonerMatchDetailProps {
  game: TGame;
}

export const SummonerMatchDetail = ({ game }: SummonerMatchDetailProps) => {
  console.log(game);
  return (
    <SummonerMatchDetailWrapper isWin={game.isWin}>
      <Box css={{ width: 70 }}></Box>
      <Box css={{ width: 100 }}></Box>
      <Box css={{ flex: 1 }}></Box>
      <Box css={{ width: 150 }}></Box>
      <Box css={{ width: 105 }}></Box>
      <Box css={{ width: 84 }}></Box>
      <Box css={{ width: 84 }}></Box>
      <ViewDetailBox isWin={game.isWin}>
        <ViewDetail>
          <Image
            alt="viewDetail"
            src={viewDetailImgSrc[game.isWin ? 'blue' : 'red']}
            width={13}
            height={10}
          />
        </ViewDetail>
      </ViewDetailBox>
    </SummonerMatchDetailWrapper>
  );
};
