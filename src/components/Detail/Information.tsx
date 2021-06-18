import React from 'react';
import styled from 'styled-components';

function Information({ dogData }) {
  return (
    <>
      {dogData && (
        <InformationSectionS>
          <NameS> {dogData.nameS}</NameS>
          <div>breed: {dogData.breed_group}</div>
          <div>life: {dogData.life_span}</div>
          <div>temperament: {dogData.temperament}</div>
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
