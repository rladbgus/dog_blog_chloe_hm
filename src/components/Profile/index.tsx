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
      <div>내 정보 section</div>
      <div>User Agent: </div>
      <div>IP: </div>

      {/* 좋아요 목록 모달 */}
      <ModalLayout>
        <ModalTitle>
          {'< '}Like Dog List{' >'}
        </ModalTitle>
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
const ModalTitle = styled.div`
  font-size: 22px;
  color: #454c53;
  text-align: center;
  margin: 50px 0 25px;
`;

export default Profile;
