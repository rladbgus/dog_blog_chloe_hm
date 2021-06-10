import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <>
      <Title>내 정보들</Title>
      <Link href={'/app/likes'}>
        <a>
          <button>좋아요 목록</button>
        </a>
      </Link>

      <Link href={'/app/bookmark'}>
        <a>
          <button>즐겨찾기 목록</button>
        </a>
      </Link>
    </>
  );
};
const Title = styled.div`
  color: #6fb3eb;
`;

export default Profile;
