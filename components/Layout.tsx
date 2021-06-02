import React, { ReactNode } from 'react';
import Link from 'next/link';

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
        <Link href="/detail">
          <a>profile</a>
        </Link>{' '}
        <Link href="/regist">
          <a>register</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    {/* <footer>
      <hr />
      <span>Footer</span>
    </footer> */}
  </div>
);

export default Layout;
