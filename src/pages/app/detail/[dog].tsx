import Detail from 'components/Detail';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { searchDogDataApi } from 'store/api';

function DogDetail() {
  const router = useRouter();
  const query = router.query.dog;
  const [dogData, setDogData] = useState([]);

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

export default DogDetail;
