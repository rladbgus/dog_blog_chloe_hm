import { searchDogDataApi } from 'api/api';
import DogCard from 'components/Home/DogCard';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Likes = (props) => {
  const { likeList } = props;
  const [likeDogs, setLikeDogs] = useState([]);

  // 강아지의 세부정보 조회 및 저장
  const getDetailData = async () => {
    let totalLikeDogs: any = [];
    const dogsInfo = likeList?.map(async (likeDog: any) => {
      return await searchDogDataApi(likeDog.image_id).then((data) => data.data);
    });
    totalLikeDogs = likeList && (await Promise.all(dogsInfo));
    setLikeDogs(totalLikeDogs);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <DogCardS>
      {likeDogs?.map((likeDog: any) => {
        const likeDogDetail = likeDog.breeds[0];
        return (
          <DogCard
            key={likeDogDetail.id}
            name={likeDogDetail.name}
            life_span={likeDogDetail.life_span}
            imageUrl={likeDog.url}
            // isLikeList
          />
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
