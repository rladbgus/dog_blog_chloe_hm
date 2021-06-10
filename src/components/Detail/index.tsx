import Image from 'components/Detail/Image';
import Information from 'components/Detail/Information';
import SimilarList from 'components/Detail/SimilarList';
import React from 'react';

function Detail({ dogData }) {
  const dogDetail = dogData.breeds && dogData.breeds[0];
  return (
    <>
      <Image dogData={dogData} />
      <Information dogData={dogDetail} />
      <SimilarList />
    </>
  );
}

export default Detail;
