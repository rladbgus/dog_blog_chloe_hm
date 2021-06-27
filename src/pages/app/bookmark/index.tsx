import * as Api from 'api';
import Bookmarks from 'components/Bookmarks';
import { GetServerSideProps } from 'next';
import React from 'react';

interface BookmarkProps {
  bookmarkList: BookmarkList[];
}

interface BookmarkList {
  created_at: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: string;
  user_id: string;
}

function BookmarksPage(props: BookmarkProps) {
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
