import React from 'react';
import styled from 'styled-components';

function Information({ dogData }) {
  return (
    <>
      {dogData && (
        <InformationSection>
          <Name> {dogData.name}</Name>
          <div>breed: {dogData.breed_group}</div>
          <div>life: {dogData.life_span}</div>
          <div>temperament: {dogData.temperament}</div>
        </InformationSection>
      )}
    </>
  );
}

const InformationSection = styled.div`
  padding: 17px 0 0 22px;
  font-size: 15px;
  line-height: 28px;
`;

const Name = styled.span`
  font-size: 26px;
`;

export default Information;
