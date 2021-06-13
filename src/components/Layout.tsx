import Header from 'components/Header';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Component>{children}</Component>
    </div>
  );
};
const Component = styled.section`
  margin-top: 100px;
`;

export default Layout;
