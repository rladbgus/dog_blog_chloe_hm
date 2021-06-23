import Header from 'components/Header';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <ComponentS>{children}</ComponentS>
    </div>
  );
}
const ComponentS = styled.section`
  margin-top: 100px;
`;

export default Layout;
