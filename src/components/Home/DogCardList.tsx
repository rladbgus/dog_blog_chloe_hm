import DogCard from 'components/Home/DogCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { moreDogsData } from 'store/modules/dogsData';
import * as S from 'styles/styled';

const DogCardList = (props) => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.dogsData);
  const filterData = storeData.filterData;
  const storeDogsData = storeData.dogsData;

  const { useDetailPage } = props;
  const [dogsData, setDogsData] = useState(storeDogsData);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  useEffect(() => {
    setDogsData(storeData.dogsData);
  }, [storeDogsData]);

  // 필터링된 데이터 세팅
  // ++리듀서에서
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

  // 상세페이지 인피니티스크롤 사용 X
  // ++
  useEffect(() => {
    if (useDetailPage) {
      setHasMore(false);
    }
  }, []);

  // 스크롤시 강아지데이터 호출
  const handleMoreDogsData = () => {
    const query = {
      page: page,
      limit: 50
    };
    dispatch(moreDogsData(query));
    setPage(page + 1);
    setHasMore(page < 4);
  };

  return (
    <InfiniteScroll
      dataLength={dogsData.length}
      loader={<h3>Loading...</h3>}
      hasMore={hasMore}
      next={handleMoreDogsData}
      scrollThreshold="50px"
      style={{ overflowY: 'auto', overflowX: 'hidden' }}>
      {/* ++종속적인 네이밍 */}
      <S.DogCardList>
        {dogsData.map((dogData: any) => {
          return (
            <Link
              href={`/app/detail/${dogData.reference_image_id}`}
              as={`/app/detail/${dogData.reference_image_id}`}
              key={dogData.id}>
              <a>
                <DogCard key={dogData.id} dogData={dogData} imageUrl={dogData.image.url} isHome />
              </a>
            </Link>
          );
        })}
      </S.DogCardList>
    </InfiniteScroll>
  );
};

export default DogCardList;
