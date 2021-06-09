import Header from 'components/Header';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <header>
      <Header />
    </header>
    <Section>{children}</Section>
    {/* <footer>
      <hr />
      <span>Footer</span>
    </footer> */}
  </div>
);

const Section = styled.section`
  margin-top: 90px;
`;

export default Layout;
