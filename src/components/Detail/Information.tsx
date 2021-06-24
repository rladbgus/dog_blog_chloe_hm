import React from 'react';
import styled from 'styled-components';

interface InformationProps {
  dogDetail?: DogDetail;
}

export interface DogDetail {
  breed_group?: string;
  life_span?: string;
  name?: string;
  temperament?: string;
}

function Information({ dogDetail }: InformationProps) {
  return (
    <>
      {dogDetail && (
        <InformationSectionS>
          <NameS> {dogDetail.name}</NameS>
          <div>breed: {dogDetail.breed_group}</div>
          <div>life: {dogDetail.life_span}</div>
          <div>temperament: {dogDetail.temperament}</div>
        </InformationSectionS>
      )}
    </>
  );
}

const InformationSectionS = styled.div`
  padding: 17px 0 0 22px;
  font-size: 15px;
  line-height: 28px;
`;

const NameS = styled.span`
  font-size: 26px;
`;

export default Information;
