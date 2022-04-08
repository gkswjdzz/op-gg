import Image from 'next/image';
import { Text } from '@/components/Text';

import { TGame } from '@/lib/API/useSummonerMatch';

import { styled } from '@/stitches.config';

const SummonerMatchDetailItemsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 7,
});

const Flex = styled('div', {
  display: 'flex',
});
const FlexWrap = styled(Flex, {
  flexWrap: 'wrap',
  paddingLeft: 4,
});

const Items = styled(FlexWrap, {
  height: 46,
  gap: 2,
});

const Item = styled('div', {
  width: 22,
  height: 22,
  '& img': {
    borderRadius: 2,
  },
});

const BlankItem = styled('div', {
  borderRadius: 2,
  height: 22,
  width: 22,
  variants: {
    isWin: {
      true: {
        backgroundColor: '$greyblue',
      },
      false: {
        backgroundColor: '$pinkish-grey-four',
      },
    },
  },
});
interface SummonerMatchDetailItemsProps {
  game: TGame;
}

export const SummonerMatchDetailItems = ({
  game,
}: SummonerMatchDetailItemsProps) => {
  return (
    <SummonerMatchDetailItemsWrapper>
      <Items>
        {game.items.map((item, index) => (
          <Item key={item.imageUrl + index}>
            <Image
              alt="item-image"
              src={item.imageUrl}
              width={22}
              height={22}
            />
          </Item>
        ))}
        {Array(7 - game.items.length)
          .fill('')
          .map((_, index) => {
            return <BlankItem key={index} isWin={game.isWin} />;
          })}
        <Item>
          <Image
            alt="build"
            src={
              game.isWin
                ? '/icons/icon-buildblue.png'
                : '/icons/icon-buildred.png'
            }
            height={22}
            width={22}
          />
        </Item>
      </Items>
      <Flex css={{ alignItems: 'center', gap: 4 }}>
        <Image
          alt="ward-image"
          src="/icons/icon-ward-red.png"
          width={16}
          height={16}
        />
        <Text size="11" height="13" color="black-two">
          제어 와드 {game.stats.ward.visionWardsBought}
        </Text>
      </Flex>
    </SummonerMatchDetailItemsWrapper>
  );
};
