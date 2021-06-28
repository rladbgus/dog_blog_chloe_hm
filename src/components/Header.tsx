import * as ImagePath from 'common/imagePath';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

function Header() {
  // 로고클릭 라우팅시 스크롤 상단고정
  const removeScroll = () => {
    // 스토리지 삭제
    sessionStorage.removeItem('home_scroll_pos');
  };

  return (
    <>
      <TitleS>
        <Link href="/">
          <a onClick={removeScroll}>
            <img src={ImagePath.Logo} />
            <span>Dog Blog</span>
          </a>
        </Link>
      </TitleS>
      <SectionS>
        <Link href="/app/register">
          <S.Button color={them.color.blue}>register</S.Button>
        </Link>
        <Link href="/app/profile">
          <S.Button color={them.color.yellow}>profile</S.Button>
        </Link>
      </SectionS>
    </>
  );
}

const TitleS = styled.div`
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

const SectionS = styled.div`
  display: inline;
  float: right;
`;

export default Header;
