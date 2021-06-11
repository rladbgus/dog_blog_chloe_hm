import React from 'react';
import styled from 'styled-components';

function DogCard(props) {
  const { name, life_span, imageUrl, isLikeList } = props;
  const dislikeImageUrl = '/icons/dislike.png';

  // const onDislike = () => {
  //   deleteLikeApi(likedId)
  //   .then((res) => {
  //     if (res.status === 200) {
  //       return alert('싫어요 완료!');
  //     }
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }

  return (
    <SDogCard>
      <img src={`${imageUrl}`} alt="강아지 이미지" />
      <div className="name">{name}</div>
      <div className="life">{life_span}</div>
      {/* {isLikeList && <img className="dislike" src={`${dislikeImageUrl}`} onClick={onDislike} alt="좋아요 취소" />} */}
    </SDogCard>
  );
}

const SDogCard = styled.div`
  margin: 0px 60px 30px 0;
  color: #454c53;
  width: 130px;
  flex: 1;

  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 19px;
  }
  .life {
    font-size: 15px;
  }
  .dislike {
    width: 35px;
    height: 35px;
  }
`;

export default DogCard;
