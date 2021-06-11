import ModalLayout from 'common/modal/modal';
import Likes from 'components/Profile/LikeList';
import Link from 'next/link';
import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

const Profile = (props) => {
  Modal.setAppElement('*');
  const { likeList } = props;

  return (
    <>
      <Title>내 정보 section</Title>

      {/* 좋아요 목록 모달 */}
      <ModalLayout>
        <div>Like Dog List</div>
        <Likes likeList={likeList} />
      </ModalLayout>

      {/* 즐겨찾기 목록 라우팅 */}
      <Link href={'/app/bookmark'}>
        <a>
          <button>Bookmark List</button>
        </a>
      </Link>
    </>
  );
};
const Title = styled.div`
  color: #6fb3eb;
`;

export default Profile;
