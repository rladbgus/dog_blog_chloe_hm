import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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
          <button>register</button>
        </Link>
        <Link href="/app/profile">
          <button>profile</button>
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

export default Header;
