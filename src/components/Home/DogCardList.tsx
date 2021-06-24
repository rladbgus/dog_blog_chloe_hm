import DogCard from 'components/Home/DogCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateProps } from 'store/interface';
import { moreDogsData } from 'store/modules/dogsData';
import * as S from 'styles/styled';

interface DogCardListProps {
  unUseInfinite?: boolean;
}

function DogCardList(props: DogCardListProps) {
  const { unUseInfinite } = props;
  const dispatch = useDispatch();
  const storeData = useSelector((state: initialStateProps) => state.dogsData);
  // console.log('🚀 ~ storeData', storeData);
  // ???
  const storeDogsData = storeData.dogsData;
  // console.log('🚀 ~ storeDogsData', storeDogsData);

  const [dogsData, setDogsData] = useState(storeDogsData);
  const [hasMore, setHasMore] = useState(!unUseInfinite);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setDogsData(storeDogsData);
  }, [storeDogsData]);

  // 스크롤시 강아지데이터 호출
  const handleMoreDogsData = () => {
    const query = {
      page: page,
      limit: 50
    };
    setTimeout(() => {
      dispatch(moreDogsData(query));
    }, 700);
    setPage(page + 1);
    setHasMore(page < 4);
  };

  return (
    <InfiniteScroll
      hasMore={hasMore}
      next={handleMoreDogsData}
      dataLength={dogsData.length}
      loader={<h3>Loading...</h3>}
      style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      <S.DogCardList>
        {dogsData.map((dogData: any) => {
          return (
            <Link
              href={`/app/detail/${dogData.reference_image_id}`}
              as={`/app/detail/${dogData.reference_image_id}`}
              key={dogData.id}
              scroll={false}>
              <a>
                <DogCard
                  key={dogData.id}
                  dogData={dogData}
                  imageUrl={dogData.image.url}
                  isHome
                />
              </a>
            </Link>
          );
        })}
      </S.DogCardList>
    </InfiniteScroll>
  );
}

export default DogCardList;
