import { styled } from '@/stitches.config';
import * as Tooltip from '@radix-ui/react-tooltip';

const ItemTooltipProvider = styled(Tooltip.Provider, {
  all: 'unset',
});

const ItemTooltipRoot = styled(Tooltip.Root, {
  all: 'unset',
});

const ItemTooltipContent = styled(Tooltip.Content, {
  maxWidth: 300,
  padding: 18,
  backgroundColor: '#222727',
});

const ItemTooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
});

const ItemTooltipArrow = styled(Tooltip.Arrow, {});

export const ItemTooltip = {
  Provider: ItemTooltipProvider,
  Root: ItemTooltipRoot,
  Content: ItemTooltipContent,
  Trigger: ItemTooltipTrigger,
  Arrow: ItemTooltipArrow,
};
