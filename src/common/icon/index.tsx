import React from 'react';
import styled from 'styled-components';

interface IconLayoutProps {
  alt: string;
  ImageUrl: string;
  isVisible?: boolean;
  className?: string;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

function IconLayout(props: IconLayoutProps) {
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
