import React from 'react';
import styled from 'styled-components';

const Image = ({ dogImageUrl }) => {
  return <img src={`${dogImageUrl}`} alt="강아지 이미지" />;
};

export default Image;
