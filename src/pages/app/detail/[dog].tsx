import Detail from 'components/Detail';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { END } from 'redux-saga';
import { searchDogDataApi } from 'store/api';
import { getDogsData } from 'store/modules/dogsData';
import { wrapper } from 'store/store';

function DetailPage() {
  const router = useRouter();
  const query = router.query.dog;
  const [dogData, setDogData] = useState([]);
  console.log('🚀 ~ dogData', dogData);

  // 해당 강아지 데이터 호출
  useEffect(() => {
    if (!router.isReady) return;
    searchDogDataApi(query)
      .then((res) => {
        if (res.status === 200) {
          return setDogData(res.data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [router.isReady]);

  return (
    <>
      <Detail dogData={dogData} />
    </>
  );
}

// 상세페이지에서 새로고침시 store날아갔을시 dispatch
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(getDogsData());
    store.dispatch(END);
    await store.sagaTask.toPromise();

    return {
      props: {}
    };
  }
);

export default DetailPage;
