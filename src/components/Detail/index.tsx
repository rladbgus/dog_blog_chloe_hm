import Image from 'components/Detail/Image';
import Information from 'components/Detail/Information';
import SimilarList from 'components/Detail/SimilarList';
import React from 'react';

function Detail({ dogData }) {
  const dogImageUrl = dogData.url;
  const dogDetail = dogData.breeds && dogData.breeds[0];
  return (
    <>
      <Image dogImageUrl={dogImageUrl} />
      <Information dogData={dogDetail} />
      <SimilarList />
    </>
  );
}

export default Detail;
