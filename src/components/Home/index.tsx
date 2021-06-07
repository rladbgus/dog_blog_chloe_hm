import React, { useState } from 'react';
import DogCard from 'components/Home/DogCard';
import Search from 'components/Home/Search';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Sort from 'components/Home/Sort';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getDogsData, moreDogsData } from 'store/modules/dogsData';

function Home() {
  const storeDogsData = useSelector((state) => state.dogsData);
  const dogsData = storeDogsData.dogsData;
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(100);

  // 스크롤시 강아지데이터 호출
  const moreDogsData = () => {
    const query = {
      page: page,
      limit: limit
    };
    console.log('🚀 ~ query', query);
    dispatch(getDogsData(query));
    // setHasMore( === hasMore)
    setPage(page + 1);
    setLimit(limit + 50);
  };

  return (
    <>
      <Sort />
      <Search />

      <InfiniteScroll
        dataLength={dogsData.length}
        loader={<h4>Loading...</h4>}
        hasMore={true}
        next={moreDogsData}
        scrollThreshold="50px"
        style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <DogCardS>
          {dogsData.map((dogData: any) => {
            // console.log('🚀 ~ dogData', dogData);
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
      </InfiniteScroll>
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
