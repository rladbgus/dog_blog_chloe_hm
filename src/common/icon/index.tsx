import React from 'react';
import styled from 'styled-components';

const IconLayout = (props) => {
  const { ImageUrl, isVisible, alt, onClick } = props;

  return (
    <>{isVisible && <IconS src={ImageUrl} alt={alt} onClick={onClick} />}</>
  );
};

const IconS = styled.img`
  width: 30px;
  height: 30px;
`;

export default IconLayout;
