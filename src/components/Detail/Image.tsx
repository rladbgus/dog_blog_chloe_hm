import * as Api from 'api';
import Icon from 'common/icon';
import * as ImagePath from 'common/imagePath';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import styled from 'styled-components';

const ReactViewer = dynamic(() => import('react-viewer'), { ssr: false });

function Image(props) {
  const { dogData } = props;
  const [isUnlike, setIsUnlike] = useState(false);
  const [likedId, setLikedId] = useState('');
  const [isViewerOpen, setIsViewerOpen] = useState(false);
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

    Api.postLike(query)
      .then((res) => {
        if (res.status === 200) {
          setLikedId(res.data.id);
          setIsUnlike(true);
        }
      })
      .catch((err) => console.error(err));
  };

  // 싫어요 기능 호출
  const onUnLikeApi = () => {
    Api.deleteLike(likedId)
      .then((res) => {
        if (res.status === 200) {
          setIsUnlike(false);
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
    return onUnLikeApi();
  };

  return (
    <ImgSectionS>
      <img
        src={`${dogData.url}`}
        onClick={handleImageViewer}
        alt="강아지 이미지"
      />
      {/* 좋아요 기능 */}
      <LikeSectionS>
        <Icon
          ImageUrl={ImagePath.like}
          onClick={() => handleHeart('like')}
          isVisible
          alt="좋아요 아이콘"
        />
        <Icon
          ImageUrl={ImagePath.unLike}
          onClick={() => handleHeart('unLike')}
          isVisible={isUnlike}
          alt="싫어요 아이콘"
        />
      </LikeSectionS>
      {/* 이미지 뷰어 */}
      <ReactViewer
        visible={isViewerOpen}
        onClose={() => handleImageViewer()}
        images={images}
      />
    </ImgSectionS>
  );
}

const ImgSectionS = styled.div`
  margin-bottom: 25px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const LikeSectionS = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100px;
  justify-content: space-around;
`;

export default Image;
