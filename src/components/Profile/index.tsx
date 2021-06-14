import * as Api from 'api/user';
import ModalLayout from 'common/modal/modal';
import Likes from 'components/Profile/LikeList';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

Modal.setAppElement('*');
const Profile = (props) => {
  const { likeList } = props;
  const [userAgent, setUserAgent] = useState('');
  const [userIp, setUserIp] = useState('');

  useEffect(() => {
    // Agent저장
    const UserAgent = navigator.userAgent;
    setUserAgent(UserAgent);

    // Ip저장
    Api.getUserIp()
      .then((res) => {
        setUserIp(res.data.ip);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <ProfileLayout>
      {/* 내 프로필 정보 */}
      <MyInformation>
        <div>My Information</div>
        <div>User Agent: {userAgent} </div>
        <div>IP: {userIp}</div>
      </MyInformation>

      {/* 좋아요 목록 모달 */}
      <ModalLayout>
        <S.ModalTitle>&lt; Like Dog List &gt;</S.ModalTitle>
        <Likes likeList={likeList} />
      </ModalLayout>

      {/* 즐겨찾기 목록 라우팅 */}
      <Link href={'/app/bookmark'}>
        <a>
          <S.Button color={them.color.yellowGreen}>Bookmark</S.Button>
        </a>
      </Link>
    </ProfileLayout>
  );
};

const ProfileLayout = styled.div`
  text-align: center;
  margin: 170px 230px;
`;

const MyInformation = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
  color: #454c53;
`;

export default Profile;
