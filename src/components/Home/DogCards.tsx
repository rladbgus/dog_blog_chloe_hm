import DogCard from 'components/Home/DogCard';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { moreDogsData } from 'store/modules/dogsData';
import styled from 'styled-components';

const DogCards = (props) => {
  const dispatch = useDispatch();
  const storeDogsData = useSelector((state) => state.dogsData);
  const filterData = storeDogsData.filterData;

  const { useDetailPage } = props;
  const [dogsData, setDogsData] = useState(storeDogsData.dogsData);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  // const currentRef = useRef([]);

  // 필터링된 데이터 세팅
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
  useEffect(() => {
    if (useDetailPage) {
      setHasMore(false);
    }
  }, []);

  // 스크롤시 강아지데이터 호출
  const HandleMoreDogsData = () => {
    console.log('s');
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
            <Link
              href={`/app/detail/[id]`}
              as={`/app/detail/${dogData.reference_image_id}`}
              key={dogData.id}>
              {/* <a ref={currentRef}> */}
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
