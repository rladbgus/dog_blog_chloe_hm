import * as Api from 'api';
import Profile from 'components/Profile';
import Likes from 'components/Profile/LikeList';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

function ProfilePage(props) {
  const { likeList } = props;
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Profile likeList={likeList} />
      <Likes />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    const res = await Api.getLikeList(query);
    if (res.status === 200) {
      const likeList = res.data;
      return {
        props: { likeList }
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
