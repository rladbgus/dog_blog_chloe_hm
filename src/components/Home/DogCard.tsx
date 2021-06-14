import { deleteBookmarkApi, postBookmarkApi } from 'api/api';
import React, { useState } from 'react';
import styled from 'styled-components';

function DogCard(props) {
  const { isHome, isLikeList, dogData, imageUrl } = props;
  const [isLike, setIsLike] = useState(false);
  const [likedId, setLikedId] = useState('');
  const fullHeartIconUrl = '/icons/heart.png';
  const heartIconUrl = '/icons/disHeart.png';

  // 즐겨찾기
  const onLikeApi = () => {
    const query = {
      image_id: dogData.image.id,
      sub_id: 'chloe'
    };
    postBookmarkApi(query)
      .then((res) => {
        if (res.status === 200) {
          setLikedId(res.data.id);
          setIsLike(true);
        }
      })
      .catch((err) => console.error(err));
  };

  // 즐겨찾기 취소
  const onUnLikeApi = () => {
    deleteBookmarkApi(likedId)
      .then((res) => {
        if (res.status === 200) {
          setIsLike(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleHeart = (e) => {
    e.preventDefault();
    if (isLike) {
      // 즐겨찾기 취소
      onUnLikeApi();
    }
    // 즐겨찾기
    onLikeApi();
  };

  return (
    <SDogCard>
      <img src={`${imageUrl}`} alt="강아지 이미지" />
      <div className="name">{dogData.name}</div>
      <div>{dogData.life_span}</div>
      {isHome && (
        <LikeSection>
          <img
            src={`${isLike ? fullHeartIconUrl : heartIconUrl}`}
            onClick={handleHeart}
            className="like_icon"
            alt="좋아요"
          />
        </LikeSection>
      )}
    </SDogCard>
  );
}

const SDogCard = styled.div`
  position: relative;
  margin: 0px 60px 30px 0;
  color: #454c53;
  width: 130px;
  font-size: 14px;
  .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    margin: 5px 0 3px;
  }
  .like_icon {
    display: none;
  }
  &:hover {
    .like_icon {
      display: inline;
    }
  }
`;

const LikeSection = styled.div`
  position: absolute;
  top: 8px;
  right: -43px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export default DogCard;
