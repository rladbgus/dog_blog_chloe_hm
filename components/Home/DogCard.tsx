import React from 'react';
import styled from 'styled-components';

function DogCard(props: any) {
  const SDogCard = styled.div``;

  const { name, life_span, image } = props;
  return (
    <SDogCard>
      <img src={`${image.url}`} alt="강아지 이미지" />
      <div>{name}</div>
      <div>{life_span}</div>
    </SDogCard>
  );
}

export default DogCard;
