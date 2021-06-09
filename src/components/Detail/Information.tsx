import React, { useState } from 'react';
import styled from 'styled-components';

function Information({ dogData }) {
  const [isLike, setIsLike] = useState(false);
  const heartImageUrl = '/icons/heart.png';
  const unheartImageUrl = '/icons/unheart.png';

  const handleHeart = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      {dogData && (
        <InformationSection>
          <div>name: {dogData.name}</div>
          <div>breed : {dogData.breed_group}</div>
          <div>life: {dogData.life_span}</div>
          <div>temperament: {dogData.temperament}</div>
          <img src={isLike ? heartImageUrl : unheartImageUrl} onClick={() => handleHeart()} />
        </InformationSection>
      )}
    </>
  );
}

const InformationSection = styled.div`
  img {
    width: 23px;
    height: 23px;
  }
`;

export default Information;
