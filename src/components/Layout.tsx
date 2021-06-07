import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <header>
      <LayoutS>
        <Title>
          <Link href="/">
            <a>Dog Blog</a>
          </Link>
        </Title>
        <AAA>
          <Link href="/app/register">
            <button>register</button>
          </Link>
          <Link href="/app/profile">
            <button>profile</button>
          </Link>
        </AAA>
      </LayoutS>
    </header>
    <Section>{children}</Section>
    {/* <footer>
      <hr />
      <span>Footer</span>
    </footer> */}
  </div>
);

const LayoutS = styled.nav`
  /* width: 900px; */
`;

const Title = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
`;
const AAA = styled.div`
  display: inline;
  float: right;
`;
const Section = styled.section`
  margin-top: 90px;
`;

export default Layout;
