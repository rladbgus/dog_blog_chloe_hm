import React from 'react';
import styled from 'styled-components';
import DogCard from 'components/Home/DogCard';
import Sort from 'components/Home/Sort';
import { useSelector } from 'react-redux';
import Search from 'components/Home/Search';

function Home() {
  const getDogsData = useSelector((state) => state.dogsData);
  console.log('🚀 ~ 미ㅏ어ㅜㅁ니ㅏㅇㅁ', getDogsData);

  return (
    <>
      <Search />
      <Sort />
      <SDogCard>
        {getDogsData.dogsData.map((dogData: any) => {
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
    </>
  );
}

const SDogCard = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default Home;
