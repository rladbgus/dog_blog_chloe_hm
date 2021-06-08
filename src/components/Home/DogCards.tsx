import React, { useState } from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DogCard from 'components/Home/DogCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { moreDogsData } from 'store/modules/dogsData';

const DogCards = () => {
  const storeDogsData = useSelector((state) => state.dogsData);
  const dogsData = storeDogsData.dogsData;
  const dispatch = useDispatch();

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  // 스크롤시 강아지데이터 호출
  const HandleMoreDogsData = () => {
    const query = {
      page: page,
      limit: 50
    };
    dispatch(moreDogsData(query));
    setPage(page + 1);
    setHasMore(page < 4); // 임시ㅠ
  };

  return (
    <InfiniteScroll
      dataLength={dogsData.length}
      loader={<h3>Loading...</h3>}
      hasMore={hasMore}
      next={HandleMoreDogsData}
      scrollThreshold="50px"
      style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <DogCardS>
        {dogsData.map((dogData: any) => {
          return (
            <Link href={`/app/detail/${dogData.reference_image_id}`} key={dogData.id}>
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
  );
};

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default DogCards;
