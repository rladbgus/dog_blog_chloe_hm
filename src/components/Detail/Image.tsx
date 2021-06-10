import React, { useState } from 'react';
import { deleteLikeApi, postLikeApi } from 'store/api';
import styled from 'styled-components';

const Image = ({ dogData }) => {
  const [isLike, setIsLike] = useState(false);
  const [likedId, setLikedId] = useState('');
  const heartImageUrl = '/icons/heart.png';
  const unheartImageUrl = '/icons/unheart.png';

  const onLikeApi = () => {
    const query = {
      image_id: dogData.id,
      sub_id: 'chloe',
      value: 1
    };
    postLikeApi(query)
      .then((res) => {
        console.log('🚀 ~ res', res);
        if (res.status === 200) {
          setLikedId(res.data.id);
          setIsLike(!isLike);
          return alert('좋아요 완료!');
        }
      })
      .catch((err) => console.error(err));
  };

  const onUnLikeApi = () => {
    deleteLikeApi(likedId)
      .then((res) => {
        if (res.status === 200) {
          setIsLike(!isLike);
          return alert('싫어요 완료!');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleHeart = (type) => {
    if (type === 'like') {
      return onLikeApi();
    }
    onUnLikeApi();
  };

  return (
    <ImgSection>
      <img src={`${dogData.url}`} alt="강아지 이미지" />
      <img src={heartImageUrl} onClick={() => handleHeart('like')} className="heart" />
      {isLike && (
        <img src={unheartImageUrl} onClick={() => handleHeart('unLike')} className="heart" />
      )}
    </ImgSection>
  );
};

const ImgSection = styled.div`
  .heart {
    width: 23px;
    height: 23px;
  }
`;

export default Image;
