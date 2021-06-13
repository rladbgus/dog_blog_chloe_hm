import ModalLayout from 'common/modal/modal';
import Likes from 'components/Profile/LikeList';
import Link from 'next/link';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

const Profile = (props) => {
  Modal.setAppElement('*');
  const { likeList } = props;

  return (
    <>
      <Title>내 정보 section</Title>
      <div>User Agent: </div>
      <div>IP: </div>

      {/* 좋아요 목록 모달 */}
      <ModalLayout>
        <div>Like Dog List</div>
        <Likes likeList={likeList} />
      </ModalLayout>

      {/* 즐겨찾기 목록 라우팅 */}
      <Link href={'/app/bookmark'}>
        <a>
          <S.Button color={them.color.yellowGreen}>Bookmark</S.Button>
        </a>
      </Link>
    </>
  );
};
const Title = styled.div`
  color: #6fb3eb;
`;

export default Profile;
