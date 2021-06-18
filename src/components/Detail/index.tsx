import Image from 'components/Detail/Image';
import Information from 'components/Detail/Information';
import SimilarList from 'components/Detail/SimilarList';
import React from 'react';
import styled from 'styled-components';

function Detail({ dogData }) {
  const dogDetail = dogData.breeds && dogData.breeds[0];

  return (
    <>
      <DetailSectionS>
        <Image dogData={dogData} />
        <Information dogData={dogDetail} />
      </DetailSectionS>
      <SimilarList />
    </>
  );
}

const DetailSectionS = styled.div`
  display: flex;
  margin: 0 250px;
`;

export default Detail;
