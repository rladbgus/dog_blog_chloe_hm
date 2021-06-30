import * as Api from 'api';
import Detail from 'components/Detail';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { END } from 'redux-saga';
import { getDogsData } from 'store/modules/dogsData';
import { wrapper } from 'store/store';

function DetailPage() {
  const router = useRouter();
  const query = router.query.dog;
  const [dogData, setDogData] = useState([]);

  // 해당 강아지 데이터 호출
  useEffect(() => {
    if (!router.isReady) return;
    Api.dogList
      .searchDogData(query)
      .then((res) => {
        if (res.status === 200) {
          setDogData(res.data);
        }
      })
      .catch((err) => {
        alert('잠시후 다시 이용 바랍니다.');
        console.error(err);
      });
  }, [router.isReady]);

  return (
    <>
      <Detail dogData={dogData} />;
    </>
  );
}

// 상세페이지에서 새로고침시 store날아갔을시 새로 dispatch
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async ({ store }) => {
    const query = { limit: 50 };
    store.dispatch(getDogsData(query));
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  });

export default DetailPage;
