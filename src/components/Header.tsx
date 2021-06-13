import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Header = () => {
  return (
    <>
      <Title>
        <Link href="/">
          <a>
            <img src={'/favicon.ico'} />
            <span>Dog Blog</span>
          </a>
        </Link>
      </Title>
      <Section>
        <Link href="/app/register">
          <S.Button color={them.color.blue}>register</S.Button>
        </Link>
        <Link href="/app/profile">
          <S.Button color={them.color.yellow}>profile</S.Button>
        </Link>
      </Section>
    </>
  );
};

const Title = styled.div`
  font-size: 35px;
  margin-bottom: 20px;

  img {
    display: inline;
    width: 70px;
    height: 70px;
    margin-right: 10px;
    vertical-align: -5px;
  }
`;
const Section = styled.div`
  display: inline;
  float: right;
`;

const RegisterButton = styled.button`
  width: 95px;
  height: 35px;
  padding: 6px 12px;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 4px;
  background-color: #74b9ff;
  margin-right: 3px;
  :hover {
    opacity: 0.7;
  }
`;

const ProfileButton = styled(RegisterButton)`
  background-color: #ecc65b;
  :hover {
    opacity: 0.7;
  }
`;

export default Header;
