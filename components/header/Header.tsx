import { styled } from '../../stitches.config';

const StyledHeader = styled('header', {});

export const Header = () => {
  return (
    <StyledHeader>
      <input type="text" placeholder="소환사명,챔피언..." />
    </StyledHeader>
  );
};
