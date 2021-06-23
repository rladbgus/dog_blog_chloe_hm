import React from 'react';
import styled from 'styled-components';

function IconLayout(props) {
  const { ImageUrl, isVisible, alt, onClick, className } = props;

  return (
    <>
      {isVisible && (
        <IconS
          src={ImageUrl}
          alt={alt}
          onClick={onClick}
          className={className}
        />
      )}
    </>
  );
}

const IconS = styled.img`
  width: 30px;
  height: 30px;
`;

export default IconLayout;
