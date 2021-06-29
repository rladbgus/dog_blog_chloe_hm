import * as Api from 'api';
import * as I from 'common/interface';
import Bookmarks from 'components/Bookmarks';
import { GetServerSideProps } from 'next';
import React from 'react';

interface BookmarkI {
  bookmarkList: I.DogDetailData[];
}

function BookmarksPage(props: BookmarkI) {
  const { bookmarkList } = props;
  return (
    <>
      <Bookmarks bookmarkList={bookmarkList} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const query = { sub_id: 'chloe' };

  try {
    const res = await Api.bookmark.getBookmarkList(query);

    if (res.status === 200) {
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
