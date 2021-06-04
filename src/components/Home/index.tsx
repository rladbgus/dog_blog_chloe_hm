import React from 'react';
import styled from 'styled-components';
import DogCard from './DogCard';
import { useSelector } from 'react-redux';

const SDogCard = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

function Home() {
  const storeDogsData = useSelector((state) => state.dogsData);

  return (
    <SDogCard>
      {storeDogsData.dogsData.map((dogData: any) => {
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
