import React from 'react';
import styled from 'styled-components';
import DogCard from 'components/Home/DogCard';
import Sort from 'components/Home/Sort';
import { useSelector } from 'react-redux';
import Search from 'components/Home/Search';
import Link from 'next/link';

function Home() {
  const getDogsData = useSelector((state) => state.dogsData);

  return (
    <>
      <Sort />
      <Search />
      <DogCardS>
        {getDogsData.dogsData.map((dogData: any) => {
          return (
            <Link href={{ pathname: `/app/detail/${dogData.id}`, query: dogData }}>
              <a>
                <DogCard
                  key={dogData.id}
                  name={dogData.name}
                  life_span={dogData.life_span}
                  image={dogData.image}
                />
              </a>
            </Link>
          );
        })}
      </DogCardS>
    </>
  );
}

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default Home;
