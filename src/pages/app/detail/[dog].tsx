import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Detail from 'components/Detail';
import { searchDogDataApi } from 'store/api';
import { GetServerSideProps } from 'next';
import { wrapper } from 'store/store';

function DogDetail() {
  const router = useRouter();
  const dogName = router.query.dog;
  console.log('🚀 ~ dogName', dogName);
  const query = { q: dogName };

  useEffect(() => {
    const aaa = searchDogDataApi(query);
    console.log('🚀 ~ aaa', aaa);
  }, []);
  return (
    <>
      <Detail />
    </>
  );
}

export default DogDetail;

// export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
//   async ({ store }) => {
//     return {
//       props: {}
//     };
//   }
// );
