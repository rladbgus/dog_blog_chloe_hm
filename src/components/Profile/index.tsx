import * as Api from 'api/user';
import ModalLayout from 'common/modal';
import useScrollMove from 'common/scroll';
import LikeList from 'components/Profile/LikeList';
import UploadList from 'components/Profile/UploadList';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import * as S from 'styles/styled';
import them from 'styles/them';

Modal.setAppElement('*');
const Profile = (props) => {
  const { likeList, uploadList } = props;
  const [userAgent, setUserAgent] = useState('');
  const [userIp, setUserIp] = useState('');

  useScrollMove('scroll_poss', true);

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
    <ProfileLayoutS>
      {/* 내 프로필 정보 */}
      <MyInformationSs>
        <h1>My Information</h1>
        <div>User Agent: {userAgent} </div>
        <div>IP: {userIp}</div>
      </MyInformationSs>
      {/* 즐겨찾기 목록 라우팅 */}
      <Link href={'/app/bookmark'}>
        <a>
          <S.Button color={them.color.yellowGreen}>Bookmark</S.Button>
        </a>
      </Link>
      {/* 좋아요 목록 모달 */}
      <ModalLayout buttonName="Like List">
        <S.ModalTitle>&lt; Like Dog List &gt;</S.ModalTitle>
        <LikeList likeList={likeList} />
      </ModalLayout>
      {/* 업로드한 파일 목록 모달*/}
      <ModalLayout buttonName="Uploaded">
        <S.ModalTitle>&lt; Upload Dog List &gt;</S.ModalTitle>
        <UploadList uploadList={uploadList} />
      </ModalLayout>
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
      <Link href={`/`} as={`/`}>
        <a>
          <div>dddd</div>
        </a>
      </Link>
      <br />
    </ProfileLayoutS>
  );
};

const ProfileLayoutS = styled.div`
  text-align: center;
  margin: 170px 320px;
  font-size: 22px;
`;

const MyInformationSs = styled.div`
  margin-bottom: 35px;
  color: #454c53;
  div {
    font-size: 18px;
    margin-top: 20px;
    text-align: left;
  }
`;

export default Profile;
