import Likes from 'components/Likes';
import { GetServerSideProps } from 'next';
import React from 'react';
import { END } from 'redux-saga';
import { getLikeList } from 'store/api';
import { wrapper } from 'store/store';

const LikesPage = () => {
  return (
    <>
      <Likes />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getLikeList());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  }
);

export default LikesPage;
