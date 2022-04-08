import Image from 'next/image';
import path from 'path';

import { Text } from '@/components/Text';
import { ItemTooltip } from './Tooltip';

import { useItemInfo } from '@/lib/API/useItemInfo';

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
  const { itemInfo } = useItemInfo();

  const itemIdFromItemImageUrl = (imageUrl: string): number => {
    const splitted = imageUrl.split('/');
    const filename = splitted[splitted.length - 1];
    const id = path.parse(filename).name;
    return Number(id);
  };

  if (!itemInfo) {
    return null;
  }

  return (
    <SummonerMatchDetailItemsWrapper>
      <Items>
        {game.items.map((item, index) => (
          <ItemTooltip.Provider key={item.imageUrl + index}>
            <ItemTooltip.Root delayDuration={200}>
              <ItemTooltip.Trigger>
                <Item>
                  <Image
                    alt="item-image"
                    src={item.imageUrl}
                    width={22}
                    height={22}
                  />
                </Item>
              </ItemTooltip.Trigger>
              <ItemTooltip.Content side="top" sideOffset={8}>
                <Text
                  size="11"
                  color="white-two"
                  fontFamily="apple"
                  css={{ lineHeight: 1.36 }}
                >
                  {itemInfo[itemIdFromItemImageUrl(item.imageUrl)].plaintext}
                </Text>
                <ItemTooltip.Arrow />
              </ItemTooltip.Content>
            </ItemTooltip.Root>
          </ItemTooltip.Provider>
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
