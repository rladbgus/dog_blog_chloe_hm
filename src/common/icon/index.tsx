import React from 'react';
import styled from 'styled-components';

interface IconLayoutI {
  alt: string;
  ImageUrl: string;
  isVisible: boolean;
  className?: string;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

function IconLayout(props: IconLayoutI) {
  const { ImageUrl, isVisible, alt, className, onClick } = props;

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
