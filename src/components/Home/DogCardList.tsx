import DogCard from 'components/Home/DogCard';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { moreDogsData } from 'store/modules/dogsData';
import * as S from 'styles/styled';

const DogCardList = (props) => {
  const dispatch = useDispatch();
  const { unUseInfinite } = props;
  const storeData = useSelector((state: any) => state.dogsData);
  const filterData = storeData.filterData;
  const storeDogsData = storeData.dogsData;

  const [dogsData, setDogsData] = useState(storeDogsData);
  const [hasMore, setHasMore] = useState(!unUseInfinite);
  const [page, setPage] = useState(2);

  useEffect(() => {
    setDogsData(storeData.dogsData);
  }, [storeDogsData]);

  // const { history } = useRouter();
  // const { scrollOnceMove } = useScrollMove();

  const focusTarget = useRef();
  useEffect(() => {
    focusTarget.current;
  }, []);

  // 필터링된 데이터 세팅
  // ++리듀서에서 마이그레이션
  useEffect(() => {
    if (filterData?.breeds) {
      const filteredData = [
        {
          name: filterData.breeds[0]?.name,
          life_span: filterData.breeds[0]?.life_span,
          id: filterData.id,
          image: {
            url: filterData.url
          }
        }
      ];
      setDogsData(filteredData);
    }
  }, [filterData]);

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
      <S.DogCardList ref={focusTarget}>
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
};

export default DogCardList;
