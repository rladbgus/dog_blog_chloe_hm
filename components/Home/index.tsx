import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DogCard from './DogCard';

const Title = styled.div`
  color: #6fb3eb;
`;

function Home({ dogsData }) {
  const [aaa, setDogsData] = useState<string>('');

  useEffect(() => {
    setDogsData(dogsData);
  }, []);

  console.log('🚀 ~ aaa', aaa);
  return (
    <>
      <Title>메인페이지</Title>
    </>
  );
}

export default Home;
