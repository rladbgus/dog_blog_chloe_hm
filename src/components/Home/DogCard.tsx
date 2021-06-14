import * as Api from 'api';
import * as ImagePath from 'common/utils/imagePath';
import React, { useState } from 'react';
import styled from 'styled-components';

function DogCard(props) {
  const { isHome, dogData, imageUrl } = props;
  const [isLike, setIsLike] = useState(false);
  const [likedId, setLikedId] = useState('');

  // 즐겨찾기
  const onLikeApi = () => {
    const query = {
      image_id: dogData.image.id,
      sub_id: 'chloe'
    };
    Api.postBookmark(query)
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
    Api.deleteBookmark(likedId)
      .then((res) => {
        if (res.status === 200) {
          setIsLike(false);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleLike = (e) => {
    e.preventDefault();
    if (isLike) {
      // 즐겨찾기 취소
      onUnLikeApi();
    }
    // 즐겨찾기
    onLikeApi();
  };

  return (
    <DogCardS>
      <img src={`${imageUrl}`} alt="강아지 이미지" />
      <div className="name">{dogData.name}</div>
      <div>{dogData.life_span}</div>
      {/* //안으로~! */}
      {isHome && (
        <LikeSection>
          <img
            src={`${isLike ? ImagePath.fullHeart : ImagePath.emptyHeart}`}
            onClick={handleLike}
            className="like_icon"
            alt="좋아요"
          />
        </LikeSection>
      )}
    </DogCardS>
  );
}

const DogCardS = styled.div`
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
