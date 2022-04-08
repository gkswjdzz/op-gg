import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Text } from '@/components/Text';

import { useOnClickOutside } from '@/lib/hooks/useOnClickOutside';

import { styled } from '@/stitches.config';

const StyledHeader = styled('header', {
  width: 1000,
  height: 'inherit',
  margin: '0 auto',
  display: 'flex',
});

const InputWrapper = styled('form', {
  width: 260,
  height: 'fit-content',
  marginLeft: 'auto',
  marginTop: 'auto',
  marginBottom: 12,
  position: 'relative',
});

const StyledInput = styled('input', {
  all: 'unset',
  width: 'stretch',
  boxSizing: 'border-box',
  backgroundColor: '$white-two',
  borderRadius: 2,
  padding: '0 14px',
  height: 32,
  fontSize: '12px',
  '&::placeholder': {
    color: '$warm-grey',
  },
});

const EndAdormentWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  transform: 'translate(-12px, -50%);',
  top: '50%',
});

const RecentlySearchUserPopup = styled('div', {
  position: 'absolute',
  width: 283,
  padding: '8px 0',
  background: '$white-two',
  boxShadow: 'rgb(0 0 0 / 50%) 0px 2px 4px 0px;',
});

const Ul = styled('ul', {
  listStyle: 'none',
});

const Li = styled('li', {
  listStyle: 'none',
  padding: '8px 16px',
});

export const Header = () => {
  const [summonerName, setSummonerName] = useState('');
  const [recentlySearchedUsers, setRecentlySearchedUsers] = useState([]);
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const router = useRouter();
  const inputRef = useRef(null);

  useOnClickOutside(inputRef, () => setOpenPopup(false));

  const pushUserToLocalStorage = (summonerName: string) => {
    const users = localStorage.getItem('users');
    let newUsers = [];
    if (users) {
      newUsers = JSON.parse(users);
    }
    newUsers.push(summonerName);
    const set = new Set(newUsers);
    localStorage.setItem('users', JSON.stringify(Array.from(set)));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    pushUserToLocalStorage(summonerName);
    router.push({
      query: {
        name: summonerName,
      },
    });
    setSummonerName('');
  };

  useEffect(() => {
    const users = localStorage.getItem('users');
    if (users) {
      setRecentlySearchedUsers(JSON.parse(users));
    }
  }, [router]);

  return (
    <StyledHeader>
      <InputWrapper ref={inputRef} onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="소환사명,챔피언..."
          value={summonerName}
          onFocus={() => setOpenPopup(true)}
          onChange={(e) => {
            setSummonerName(e.target.value);
            setOpenPopup(false);
          }}
        />
        <EndAdormentWrapper>
          <Image
            src="/icons/icon-gg.svg"
            alt="icon-gg"
            width={30}
            height={13}
          />
        </EndAdormentWrapper>
        {openPopup && (
          <RecentlySearchUserPopup>
            <Ul>
              {recentlySearchedUsers.map((user) => (
                <Li
                  key={user}
                  onClick={(e) => {
                    const clickedUsername = e.currentTarget.innerText;
                    pushUserToLocalStorage(clickedUsername);
                    router.push({
                      query: {
                        name: clickedUsername,
                      },
                    });
                    setOpenPopup(false);
                  }}
                >
                  <Text size="12" css={{ color: '#44515C' }}>
                    {user}
                  </Text>
                </Li>
              ))}
            </Ul>
          </RecentlySearchUserPopup>
        )}
      </InputWrapper>
    </StyledHeader>
  );
};
