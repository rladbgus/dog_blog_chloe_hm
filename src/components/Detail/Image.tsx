import React, { useState } from 'react';
import { postLikeApi } from 'store/api';
import styled from 'styled-components';

const Image = ({ dogData }) => {
  console.log('🚀 ~ dogData', dogData);
  const [isLike, setIsLike] = useState(false);
  const heartImageUrl = '/icons/heart.png';
  const unheartImageUrl = '/icons/unheart.png';

  const handleHeart = () => {
    const aaa = {
      image_id: dogData.id,
      sub_id: 'chloe'
    };
    postLikeApi(aaa)
      .then((res) => {
        if (res.status === 200) {
          return alert('좋아요 완료!');
        }
        alert('이미 좋아요를 누른 강아지입니다!');
      })
      .catch((err) => console.error(err));
    setIsLike(!isLike);
  };

  return (
    <ImgSection>
      <img src={`${dogData.url}`} alt="강아지 이미지" />
      <img
        src={isLike ? heartImageUrl : unheartImageUrl}
        onClick={() => handleHeart()}
        className="heart"
      />
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
