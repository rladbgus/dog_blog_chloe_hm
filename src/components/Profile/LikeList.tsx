import { searchDogDataApi } from 'api/api';
import DogCard from 'components/Home/DogCard';
import React, { useEffect, useState } from 'react';
import * as S from 'styles/styled';

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
    <S.DogCardList>
      {likeDogs?.map((likeDog: any) => {
        const likeDogDetail = likeDog.breeds[0];
        return (
          <DogCard
            key={likeDogDetail.id}
            dogData={likeDogDetail}
            imageUrl={likeDog.url}
            // isLikeList
          />
        );
      })}
    </S.DogCardList>
  );
};

export default Likes;
