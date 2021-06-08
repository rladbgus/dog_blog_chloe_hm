import React from 'react';
import styled from 'styled-components';

const Image = ({ dogImageUrl }) => {
  console.log('🚀 ~ dogImageUrl', dogImageUrl);

  return <img src={`${dogImageUrl}`} alt="강아지 이미지" />;
};

export default Image;
