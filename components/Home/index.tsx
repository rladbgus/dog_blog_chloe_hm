import React from 'react';
import styled from 'styled-components';
import DogCard from './DogCard';

const Title = styled.div`
  color: #6fb3eb;
`;

function Home() {
  return (
    <>
      <Title>메인페이지</Title>
      <DogCard />
    </>
  );
}

export default Home;
