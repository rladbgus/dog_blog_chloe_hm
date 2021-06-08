import React, { useState } from 'react';
import Image from 'components/Detail/Image';
import styled from 'styled-components';
import Information from 'components/Detail/Information';
import SimilarList from 'components/Detail/SimilarList';

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
