import Bookmarks from 'components/Bookmarks';
import { GetServerSideProps } from 'next';
import React from 'react';
import { getBookmarkListApi } from 'store/api';

const BookmarksPage = (props) => {
  const { bookmarkList } = props;
  return (
    <>
      <Bookmarks bookmarkList={bookmarkList} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    const res = await getBookmarkListApi(query);

    if (res.status === 200) {
      console.log('🚀 ~ res', res);
      const bookmarkList = res.data;
      return {
        props: { bookmarkList }
      };
    }
  } catch (err) {
    console.error(err);
  }
  return {
    props: {}
  };
};

export default BookmarksPage;
