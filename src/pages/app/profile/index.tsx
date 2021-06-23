import * as Api from 'api';
import Profile from 'components/Profile';
import Likes from 'components/Profile/LikeList';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

interface ProfileProps {
  likeList: object;
  uploadList: object;
}

function ProfilePage(props: ProfileProps) {
  const { likeList, uploadList } = props;
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile likeList={likeList} uploadList={uploadList} />
      <Likes />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    // 좋아요한 목록
    const likeListRes = await Api.getLikeList(query);
    // 업로드한 파일 목록
    const uploadListRes = await Api.getUploadImage();

    if (likeListRes.status === 200 && uploadListRes.status === 200) {
      const likeList = likeListRes.data;
      const uploadList = uploadListRes.data;
      return {
        props: { likeList, uploadList }
      };
    }
  } catch (err) {
    console.error(err);
  }

  return {
    props: {}
  };
};

export default ProfilePage;
