import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DogCard from './DogCard';
import { useSelector } from 'react-redux';

const SDogCard = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  flex-flow: row wrap;
`;

function Home() {
  const storeDogsData = useSelector((state) => state.dogsData);
  console.log('🚀 ~ storeDogsData', storeDogsData.dogsData);
  const aaa = storeDogsData.dogsData;

  return (
    <SDogCard>
      {storeDogsData?.dogsData.map((dogData: any) => {
        return (
          <DogCard
            key={dogData.id}
            name={dogData.name}
            life_span={dogData.life_span}
            image={dogData.image}
          />
        );
      })}
    </SDogCard>
  );
}

export default Home;
