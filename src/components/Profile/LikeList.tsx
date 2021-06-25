import * as Api from 'api';
import DogCard from 'components/Home/DogCard';
import React, { useEffect, useState } from 'react';
import * as S from 'styles/styled';

interface LikeListProps {
  likeList?: LikeList[];
}

interface LikeList {
  // country_code: string;
  // created_at: string;
  // id: number;
  image_id?: string;
  // sub_id: string;
  // value: number;
}

interface likeDog {
  breeds: [{ id: number }];
  id: number;
  url: string;
}

function LikeList(props: LikeListProps) {
  const { likeList } = props;
  const [likeDogs, setLikeDogs] = useState([]);

  // 강아지의 세부정보 조회 및 저장
  const getDetailData = async () => {
    let totalLikeDogs = [];
    const dogsInfo = likeList?.map(async (likeDog) => {
      return await Api.dogList
        .searchDogData(likeDog.image_id)
        .then((res) => res.data);
    });
    totalLikeDogs = likeList && (await Promise.all(dogsInfo));
    setLikeDogs(totalLikeDogs);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <S.DogCardList>
      {likeDogs?.map((likeDog: likeDog) => {
        const likeDogDetail = likeDog.breeds[0];
        return (
          <DogCard
            key={likeDogDetail.id}
            dogData={likeDogDetail}
            imageUrl={likeDog.url}
          />
        );
      })}
    </S.DogCardList>
  );
}

export default LikeList;
