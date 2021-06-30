import Header from 'components/Header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header>
        <Header />
      </header>
      {children}
    </div>
  );
}

export default Layout;
