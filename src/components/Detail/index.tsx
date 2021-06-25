import Image from 'components/Detail/Image';
import Information from 'components/Detail/Information';
import SimilarList from 'components/Detail/SimilarList';
import React from 'react';
import styled from 'styled-components';

interface DetailProps {
  dogData: DogData;
}

export interface DogData {
  breeds?: object[];
  id?: number;
  url?: string;
  length?: number;
  height?: number;
  width?: number;
}

function Detail({ dogData }: DetailProps) {
  const dogDetail = dogData.breeds && dogData.breeds[0];

  return (
    <>
      <DetailSectionS>
        <Image dogData={dogData} />
        <Information dogDetail={dogDetail} />
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
