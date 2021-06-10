import Likes from 'components/Likes';
import { GetServerSideProps } from 'next';
import React from 'react';
import { getLikeListApi } from 'store/api';

const LikesPage = (props) => {
  const { likeList } = props;
  return (
    <>
      <Likes likeList={likeList} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    const res = await getLikeListApi(query);

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

export default LikesPage;
