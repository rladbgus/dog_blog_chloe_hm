import React from 'react';
import styled from 'styled-components';

const Likes = (props) => {
  const { likeList } = props;
  console.log('🚀 ~ likeList', likeList);
  return (
    <DogCardS>
      좋아요 목록
      {likeList.map((likeDog: any) => {
        console.log('🚀 ~ likeDog', likeDog);
        <div>{likeDog.id}</div>;
        {
          // <DogCard
          //   key={likeDog.id}
          //   // name={likeDog.name}
          //   // life_span={likeDog.life_span}
          //   imageUrl={likeDog.image.url}
          // />;
        }
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
