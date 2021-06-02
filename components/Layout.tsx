import React, { ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 20px;
`;

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <header>
      <nav>
        <div>
          <Link href="/">
            <a>Dog Blog</a>
          </Link>
        </div>
        <Link href="/app/profile">
          <a>profile</a>
        </Link>{' '}
        <Link href="/app/register">
          <a>register</a>
        </Link>{' '}
      </nav>
    </header>
    <Section>{children}</Section>
    {/* <footer>
      <hr />
      <span>Footer</span>
    </footer> */}
  </div>
);

export default Layout;
