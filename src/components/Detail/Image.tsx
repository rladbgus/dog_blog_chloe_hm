import { deleteLikeApi, postLikeApi } from 'api/api';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styled from 'styled-components';
const ReactViewer = dynamic(() => import('react-viewer'), { ssr: false });

const Image = ({ dogData }) => {
  const [isLike, setIsLike] = useState(false);
  const [likedId, setLikedId] = useState('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const likeImageUrl = '/icons/like.png';
  const dislikeImageUrl = '/icons/dislike.png';
  const images = [{ src: dogData.url }];

  const handleImageViewer = () => {
    setIsViewerOpen(!isViewerOpen);
  };

  // 좋아요 기능 호출
  const onLikeApi = () => {
    const query = {
      image_id: dogData.id,
      sub_id: 'chloe',
      value: 1
    };
    postLikeApi(query)
      .then((res) => {
        if (res.status === 200) {
          setLikedId(res.data.id);
          setIsLike(!isLike);
        }
      })
      .catch((err) => console.error(err));
  };

  // 싫어요 기능 호출
  const onUnLikeApi = () => {
    deleteLikeApi(likedId)
      .then((res) => {
        if (res.status === 200) {
          setIsLike(!isLike);
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
      <img src={`${dogData.url}`} onClick={handleImageViewer} alt="강아지 이미지" />
      <LikeSection>
        <img src={likeImageUrl} onClick={() => handleHeart('like')} className="like" />
        {/* 좋아요 기능 */}
        {isLike && (
          <img src={dislikeImageUrl} onClick={() => handleHeart('unLike')} className="like" />
        )}
      </LikeSection>
      {/* 이미지 뷰어 */}
      <ReactViewer visible={isViewerOpen} onClose={() => handleImageViewer()} images={images} />
    </ImgSection>
  );
};

const ImgSection = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-flow: column;
  align-items: center;
  .like {
    width: 30px;
    height: 30px;
  }
`;
const LikeSection = styled.div`
  margin-top: 10px;
  .img {
    display: inline-flex;
  }
`;

export default Image;
