import React from 'react';
import DogCard from 'components/Home/DogCard';
import Search from 'components/Home/Search';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Sort from 'components/Home/Sort';

function Home() {
  const getDogsData = useSelector((state) => state.dogsData);

  return (
    <>
      <Sort />
      <Search />
      <DogCardS>
        {getDogsData.dogsData.map((dogData: any) => {
          console.log('🚀 ~ dogData', dogData);
          // const dogDataQuery = {
          //   id: dogData.id,
          //   name: dogData.name,
          //   imageUrl: dogData.image.url,
          //   life_span: dogData.life_span,
          //   height: dogData.height
          // };
          return (
            <Link href={{ pathname: `/app/detail/${dogData.id}`, query: dogData }}>
              <a>
                <DogCard
                  key={dogData.id}
                  name={dogData.name}
                  life_span={dogData.life_span}
                  imageUrl={dogData.image.url}
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
