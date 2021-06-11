import DogCard from 'components/Home/DogCard';
import React, { useEffect, useState } from 'react';
import { searchDogDataApi } from 'store/api';
import styled from 'styled-components';

const Likes = (props) => {
  const { likeList } = props;
  console.log('🚀 ~ likeList', likeList);
  const [likeDogs, setLikeDogs] = useState([]);

  // 강아지의 세부정보 조회 및 저장
  const getDetailData = () => {
    let totalLikeDogs: [] = [];
    likeList?.map((likeDog: any) => {
      searchDogDataApi(likeDog.image_id)
        .then((res) => {
          totalLikeDogs.push(res.data);
          setLikeDogs(totalLikeDogs);
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };
  console.log(likeDogs);

  // likeDogs 추가시 무한루프;;
  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <DogCardS>
      {likeDogs.map((likeDog: any) => {
        return (
          <>
            <DogCard
              key={likeDog.breeds[0].id}
              name={likeDog.breeds[0].name}
              life_span={likeDog.breeds[0].life_span}
              imageUrl={likeDog.url}
              // isLikeList
            />
          </>
        );
      })}
    </DogCardS>
  );
};

const DogCardS = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export default Likes;
